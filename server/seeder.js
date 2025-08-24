const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Plant = require("./models/Plant.model");

dotenv.config();

const plants = [
  // 🌱 Indoor & Air Purifying
  {
    name: "Snake Plant",
    price: 150,
    categories: ["Indoor", "Air Purifying"],
    available: true,
    image: "https://images.unsplash.com/photo-1600025032933-164c0d8980c3",
  },
  {
    name: "Peace Lily",
    price: 250,
    categories: ["Indoor", "Flowering"],
    available: true,
    image: "https://images.unsplash.com/photo-1614594979882-1a0b92ce409a",
  },
  {
    name: "Spider Plant",
    price: 120,
    categories: ["Indoor", "Air Purifying"],
    available: true,
    image: "https://images.unsplash.com/photo-1627920769167-9b2f9f2f9df2",
  },
  {
    name: "Areca Palm",
    price: 400,
    categories: ["Indoor", "Palm"],
    available: true,
    image: "https://images.unsplash.com/photo-1587502536263-9ff2f6b9c927",
  },
  {
    name: "ZZ Plant",
    price: 300,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1618221601634-d8b02d7c1f7f",
  },

  // 🌵 Succulents & Cacti
  {
    name: "Aloe Vera",
    price: 180,
    categories: ["Succulent", "Medicinal"],
    available: true,
    image: "https://images.unsplash.com/photo-1618221601633-6b3fdd1c8a1d",
  },
  {
    name: "Jade Plant",
    price: 200,
    categories: ["Succulent", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1524594154908-eddff79a0293",
  },
  {
    name: "Echeveria",
    price: 100,
    categories: ["Succulent", "Decorative"],
    available: true,
    image: "https://images.unsplash.com/photo-1584448091069-b5f7cf62c6c5",
  },
  {
    name: "Golden Barrel Cactus",
    price: 220,
    categories: ["Cactus", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1614594979880-94a2c3cddb5d",
  },
  {
    name: "Haworthia",
    price: 140,
    categories: ["Succulent", "Mini Plant"],
    available: true,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
  },

  // 🌸 Flowering Plants
  {
    name: "Rose",
    price: 300,
    categories: ["Flowering", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    name: "Hibiscus",
    price: 200,
    categories: ["Flowering", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1617196035736-61b793faad18",
  },
  {
    name: "Jasmine",
    price: 250,
    categories: ["Flowering", "Fragrant"],
    available: true,
    image: "https://images.unsplash.com/photo-1587032226311-6f1d17b47779",
  },
  {
    name: "Marigold",
    price: 100,
    categories: ["Flowering", "Festive"],
    available: true,
    image: "https://images.unsplash.com/photo-1621342737865-c52bb6dbb007",
  },
  {
    name: "Bougainvillea",
    price: 350,
    categories: ["Flowering", "Climber"],
    available: true,
    image: "https://images.unsplash.com/photo-1592840059291-bd5c54f9b89d",
  },

  // 🌿 Herbs
  {
    name: "Mint",
    price: 80,
    categories: ["Herb", "Culinary"],
    available: true,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    name: "Basil",
    price: 120,
    categories: ["Herb", "Culinary"],
    available: true,
    image: "https://images.unsplash.com/photo-1590080876632-6cfdc79f02e5",
  },
  {
    name: "Coriander",
    price: 60,
    categories: ["Herb", "Culinary"],
    available: true,
    image: "https://images.unsplash.com/photo-1608758829835-7edff8d60497",
  },
  {
    name: "Lemongrass",
    price: 150,
    categories: ["Herb", "Medicinal"],
    available: true,
    image: "https://images.unsplash.com/photo-1621518981267-4a79e927651c",
  },
  {
    name: "Thyme",
    price: 170,
    categories: ["Herb", "Culinary"],
    available: true,
    image: "https://images.unsplash.com/photo-1607305387299-4b16eeb5c3d7",
  },

  // 🌳 Outdoor Trees
  {
    name: "Neem",
    price: 500,
    categories: ["Tree", "Medicinal"],
    available: true,
    image: "https://images.unsplash.com/photo-1601571112023-6b8c7c1df09a",
  },
  {
    name: "Mango",
    price: 700,
    categories: ["Tree", "Fruit"],
    available: true,
    image: "https://images.unsplash.com/photo-1592050426700-4c16c13c3702",
  },
  {
    name: "Guava",
    price: 400,
    categories: ["Tree", "Fruit"],
    available: true,
    image: "https://images.unsplash.com/photo-1617196035851-88cefc5c0e3f",
  },
  {
    name: "Papaya",
    price: 350,
    categories: ["Tree", "Fruit"],
    available: true,
    image: "https://images.unsplash.com/photo-1587314168485-323cbb7bde5b",
  },
  {
    name: "Banana",
    price: 300,
    categories: ["Tree", "Fruit"],
    available: true,
    image: "https://images.unsplash.com/photo-1591181523030-b1e1ec353f64",
  },

  // 🎍 Decorative & Bonsai
  {
    name: "Ficus Bonsai",
    price: 1200,
    categories: ["Bonsai", "Decorative"],
    available: true,
    image: "https://images.unsplash.com/photo-1602323045929-f5c8d7fc6fd0",
  },
  {
    name: "Juniper Bonsai",
    price: 1500,
    categories: ["Bonsai", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1593476123326-f1f03fbc0e39",
  },
  {
    name: "Chinese Elm Bonsai",
    price: 1800,
    categories: ["Bonsai", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1617196035947-c55cfb1a6d2b",
  },
  {
    name: "Money Plant Bonsai",
    price: 950,
    categories: ["Bonsai", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1617032413752-c28f294d219f",
  },
  {
    name: "Pine Bonsai",
    price: 2000,
    categories: ["Bonsai", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1596887221819-ec3b77e3b824",
  },

  // (and fill until 50 with variations of Indoor, Outdoor, Flowering, Succulents)
];

// DB Seeder
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    await Plant.deleteMany();
    await Plant.insertMany(plants);

    console.log("🌱 50 plants added successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("Seeder Error:", err);
    process.exit(1);
  });
