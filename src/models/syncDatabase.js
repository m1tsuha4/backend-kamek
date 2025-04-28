const { sequelize } = require('./index');
const seedDatabase = require('./seed');

const syncDatabase = async () => {
    try {
        if (process.env.NODE_ENV === 'development') {
            await sequelize.sync({ force: true }); // recreate tables
            console.log("Database & tables created!");
            await seedDatabase(); // seed after tables are created
            console.log("Database seeded successfully!");
        } else {
            await sequelize.sync(); // just sync without deleting
            console.log("Database synced without resetting tables.");
        }
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

module.exports = syncDatabase;
