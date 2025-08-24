const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Plant = require("./models/Plant.model");

dotenv.config();

const plants = [
  // Indoor Air Purifying
  {
    name: "Snake Plant",
    price: 150,
    categories: ["Indoor", "Air Purifying"],
    available: true,
    image: "https://images.unsplash.com/photo-1598853305746-7a79e92798c7",
  },
  {
    name: "Peace Lily",
    price: 250,
    categories: ["Indoor", "Air Purifying", "Flowering"],
    available: true,
    image: "https://images.unsplash.com/photo-1599058917211-b26473c4b85b",
  },
  {
    name: "Spider Plant",
    price: 99,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1619710246240-5113a8c6eec9",
  },
  {
    name: "Money Plant",
    price: 79,
    categories: ["Indoor", "Low Maintenance", "Vastu"],
    available: true,
    image: "https://images.unsplash.com/photo-1598620617135-44a9df7f82db",
  },
  {
    name: "Syngonium",
    price: 89,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1617196033395-0a9a16c0e2f3",
  },
  {
    name: "ZZ Plant",
    price: 199,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1602810319548-71c6e4896f10",
  },
  {
    name: "Areca Palm",
    price: 399,
    categories: ["Indoor", "Air Purifying"],
    available: true,
    image: "https://images.unsplash.com/photo-1612182060339-d43eb6cc16c9",
  },
  {
    name: "Dracaena Compacta",
    price: 99,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1601299575990-ecfc0e6f6b52",
  },
  {
    name: "Aglaonema Snow White",
    price: 299,
    categories: ["Indoor", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeec0b7d",
  },
  {
    name: "Fiddle Leaf Fig",
    price: 499,
    categories: ["Indoor", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1592853625608-bd6a244c6b12",
  },

  // Herbs & Low Maintenance
  {
    name: "Tulsi",
    price: 49,
    categories: ["Herb", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1624260073368-6ad5a91c3d1b",
  },
  {
    name: "Hibiscus Mini",
    price: 69,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1600190162851-17492d7b0ba3",
  },
  {
    name: "Jade Plant",
    price: 79,
    categories: ["Succulent", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1608222351213-8a9a3d02d87b",
  },
  {
    name: "Mint",
    price: 39,
    categories: ["Herb", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1627308595216-7b1c1e6e25b2",
  },
  {
    name: "Chameli (Jasmine)",
    price: 89,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d12f",
  },
  {
    name: "Marigold",
    price: 69,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1620916566398-3b00f5a6c8fe",
  },
  {
    name: "Cuphea (False Heather)",
    price: 29,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1623356086583-fb9152d2e8b1",
  },
  {
    name: "Aparajita (Butterfly Blue)",
    price: 39,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1626454393759-ccc2e5da3b70",
  },
  {
    name: "Coleus Red",
    price: 29,
    categories: ["Foliage", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1610020115681-4b6fb8c3d0c3",
  },
  {
    name: "Purple Heart",
    price: 39,
    categories: ["Foliage", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1598387857071-6c7a8e5d47e8",
  },

  // Flowering Plants
  {
    name: "Rose (Pink)",
    price: 239,
    categories: ["Flowering", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1616671737970-3c6b8e2f2f8b",
  },
  {
    name: "Bougainvillea Pink",
    price: 159,
    categories: ["Flowering", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1602745917652-9a7c5e5a8e58",
  },
  {
    name: "Chrysanthemum",
    price: 79,
    categories: ["Flowering"],
    available: true,
    image: "https://images.unsplash.com/photo-1607262836274-147c6a2cb2c8",
  },
  {
    name: "Miniature Hibiscus",
    price: 89,
    categories: ["Flowering", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1623930237690-b9433d61bb64",
  },
  {
    name: "Anthurium",
    price: 299,
    categories: ["Flowering", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1620915900916-03ff1c37f15c",
  },
  {
    name: "African Violet",
    price: 249,
    categories: ["Flowering", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1621930518922-4fbbfcdcd3f7",
  },
  {
    name: "Portulaca (Moss Rose)",
    price: 89,
    categories: ["Flowering", "Outdoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1597862231621-d7c5a3e6d5aa",
  },
  {
    name: "Wishbone Flower",
    price: 59,
    categories: ["Flowering", "Low Maintenance"],
    available: true,
    image: "https://images.unsplash.com/photo-1596611691803-6c8893e0a7c2",
  },

  // Succulents & Cacti
  {
    name: "Cactus (Assorted Small)",
    price: 99,
    categories: ["Outdoor", "Succulent"],
    available: true,
    image: "https://images.unsplash.com/photo-1610020125871-3d07a92d3b9e",
  },
  {
    name: "Sedum Succulent",
    price: 59,
    categories: ["Indoor", "Succulent"],
    available: true,
    image: "https://images.unsplash.com/photo-1599011422499-4c7b2e6dcb57",
  },
  {
    name: "Aloe Vera",
    price: 119,
    categories: ["Indoor", "Medicinal", "Succulent"],
    available: true,
    image: "https://images.unsplash.com/photo-1617334560923-4235f0e5a53c",
  },
  {
    name: "Zebra Haworthia",
    price: 129,
    categories: ["Indoor", "Succulent"],
    available: true,
    image: "https://images.unsplash.com/photo-1626199638980-8780d31e2c74",
  },
  {
    name: "Echeveria",
    price: 149,
    categories: ["Succulent"],
    available: true,
    image: "https://images.unsplash.com/photo-1625591213149-30816c0daac6",
  },
  {
    name: "Lithops (Living Stones)",
    price: 199,
    categories: ["Succulent", "Rare"],
    available: true,
    image: "https://images.unsplash.com/photo-1625192370311-99326b2d5a69",
  },
  {
    name: "String of Pearls",
    price: 199,
    categories: ["Succulent", "Hanging"],
    available: true,
    image: "https://images.unsplash.com/photo-1619440942424-bfcd4f56a393",
  },
  {
    name: "Crassula Ovata",
    price: 149,
    categories: ["Succulent", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1610020112442-bf465d174a23",
  },

  // Bundles
  {
    name: "Indoor Table Top Set – 6",
    price: 1099,
    categories: ["Bundle", "Indoor", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1600488993965-12b7e6f74006",
  },
  {
    name: "Air Purifying Combo – 7",
    price: 999,
    categories: ["Bundle", "Air Purifying"],
    available: true,
    image: "https://images.unsplash.com/photo-1600674474868-4b7a74a9c1b2",
  },
  {
    name: "Winter Garden Bliss – 7",
    price: 959,
    categories: ["Bundle", "Flowering"],
    available: true,
    image: "https://images.unsplash.com/photo-1599982850712-67987dbfdcf5",
  },
  {
    name: "Indoor Garden Special – 7",
    price: 1099,
    categories: ["Bundle", "Indoor"],
    available: true,
    image: "https://images.unsplash.com/photo-1616683694512-8de6d1f9fa40",
  },
  {
    name: "Ethereal Hanging Escape – 3",
    price: 899,
    categories: ["Bundle", "Hanging"],
    available: true,
    image: "https://images.unsplash.com/photo-1619775673801-4c5cda0a1f9c",
  },

  // Rare & Premium
  {
    name: "Syngonium Milky (Rare)",
    price: 119,
    categories: ["Indoor", "Rare"],
    available: true,
    image: "https://images.unsplash.com/photo-1605530065997-b63e06b8a4d4",
  },
  {
    name: "Monstera Broken Heart",
    price: 119,
    categories: ["Indoor", "Exotic"],
    available: true,
    image: "https://images.unsplash.com/photo-1626085557698-32577540182b",
  },
  {
    name: "Dieffenbachia Tropic Snow",
    price: 199,
    categories: ["Indoor", "Foliage"],
    available: true,
    image: "https://images.unsplash.com/photo-1608291537250-9abf8864c8ad",
  },
  {
    name: "Croton Petra",
    price: 79,
    categories: ["Indoor", "Decor"],
    available: true,
    image: "https://images.unsplash.com/photo-1609946902147-39f7a769278e",
  },
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
