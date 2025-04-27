const ShopItem = require("./shopItem");

const seedDatabase = async () => {
    try {
        await ShopItem.create({ name: "Apple", image_url: "https://example.com/apple.jpg", price: 1.99, link: "https://example.com/apple" });
        await ShopItem.create({ name: "Banana", image_url: "https://example.com/banana.jpg", price: 0.99, link: "https://example.com/banana" });
        await ShopItem.create({ name: "Orange", image_url: "https://example.com/orange.jpg", price: 1.49, link: "https://example.com/orange" });
        await ShopItem.create({ name: "Mango", image_url: "https://example.com/mango.jpg", price: 2.99, link: "https://example.com/mango" });
        await ShopItem.create({ name: "Pineapple", image_url: "https://example.com/pineapple.jpg", price: 3.99, link: "https://example.com/pineapple" });
        await ShopItem.create({ name: "Strawberry", image_url: "https://example.com/strawberry.jpg", price: 4.99, link: "https://example.com/strawberry" });
        await ShopItem.create({ name: "Watermelon", image_url: "https://example.com/watermelon.jpg", price: 5.99, link: "https://example.com/watermelon" });
        
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

module.exports = seedDatabase;