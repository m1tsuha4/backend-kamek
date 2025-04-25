const sequelize = require('../config/database');

// Sync models with the database  
const syncDatabase = async () => {
    try {
        // Sync only in development environment
        if (process.env.NODE_ENV === 'development') {
            await sequelize.sync({ force: true });
            await require('./seed')();
            console.log("Database & tables created!");
        } else {
            await sequelize.sync();
            console.log("Database synced without resetting tables.");
        }
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

syncDatabase()

module.exports = {
    sequelize
};