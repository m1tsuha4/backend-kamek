const express = require("express");
const sequelize = require("./models/index");
const errorHandler = require("./utils/errorHandler");
const cors = require('cors');
const {checkBlacklist, authenticateToken} = require('./config/middleware');
const syncDatabase = require('./models/syncDatabase');

const fs = require('fs');
const path = require('path');
const { UserController } = require("./controllers/userController");

const app = express();
const port = 3000;
require('dotenv').config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
//Example 
app.use('/images-user', express.static(path.join(__dirname, 'public/user')));


const corsOptions = {
  origin: process.env.NODE_ENV === 'development'
    ? [process.env.DEV_ORIGIN]
    : [process.env.PROD_ORIGIN],
};

app.use(cors(corsOptions)); 

const routesCache = {}; // Object to cache routes  

const loadRoutes = (app) => {
  const routesPath = path.join(__dirname, 'routes');

  fs.readdir(routesPath, (err, files) => {
    if (err) {
      console.error('Error reading routes directory:', err);
      return;
    }

    files.forEach(file => {
      if (file.endsWith('Routes.js')) {
        if (!routesCache[file]) {
          const route = require(path.join(routesPath, file));
          app.use('/api', route);
          routesCache[file] = route;
        }
      }
    });
  });
};

// Watch for changes in the routes directory  
const watchRoutes = (app) => {
  const routesPath = path.join(__dirname, 'routes');
  fs.watch(routesPath, (eventType, filename) => {
    if (filename && filename.endsWith('Routes.js')) {
      console.log(`File changed: ${filename}. Reloading routes...`);
      // Clear the cache and reload routes  
      delete require.cache[require.resolve(path.join(routesPath, filename))];
      loadRoutes(app);
    }
  });
};

// Load and watch routes  
loadRoutes(app);
watchRoutes(app);
// Apply the middleware to all routes except the login route
// Define the login route explicitly
app.post('/api/login', UserController.login);
app.post('/api/register', UserController.create);

app.use('/api', checkBlacklist, authenticateToken); 
//Error Handling
app.use(errorHandler);

// Sync the database only if not in production
if (process.env.NODE_ENV !== 'production') {
  syncDatabase().then(() => {
    // After database is ready, start server
    app.listen(3000, () => {
        console.log('Server runs on port 3000');
    });
  });
} else {
  app.listen(port, () => {
      console.log(`Server runs on ${port}`);
  });
}
