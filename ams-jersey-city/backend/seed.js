const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const BASE_URL = "https://ams-jersey-front.vercel.app";

const products = [
  { name: "Arsenal Home Jersey", price: 20000, category: "Premier League (England)", type: "home", image: `${BASE_URL}/jerseys/arsenal-home.png`, badge: "NEW" },
  { name: "Arsenal Away Jersey", price: 22000, category: "Premier League (England)", type: "away", image: `${BASE_URL}/jerseys/arsenal-away.png`, badge: "HOT" },
  { name: "Chelsea Home Jersey", price: 20000, category: "Premier League (England)", type: "home", image: `${BASE_URL}/jerseys/chelsea-home.png`, badge: "NEW" },
  { name: "Chelsea Away Jersey", price: 22000, category: "Premier League (England)", type: "away", image: `${BASE_URL}/jerseys/chelsea-away.png`, badge: "HOT" },
  { name: "Manchester United Home Jersey", price: 20000, category: "Premier League (England)", type: "home", image: `${BASE_URL}/jerseys/manchesterunited-home.png`, badge: "NEW" },
  { name: "Manchester United Away Jersey", price: 22000, category: "Premier League (England)", type: "away", image: `${BASE_URL}/jerseys/manchesterunited-away.png`, badge: "HOT" },
  { name: "Manchester City Home Jersey", price: 20000, category: "Premier League (England)", type: "home", image: `${BASE_URL}/jerseys/manchestercity-home.png`, badge: "NEW" },
  { name: "Manchester City Away Jersey", price: 22000, category: "Premier League (England)", type: "away", image: `${BASE_URL}/jerseys/manchestercity-away.png`, badge: "HOT" },
  { name: "Liverpool Home Jersey", price: 20000, category: "Premier League (England)", type: "home", image: `${BASE_URL}/jerseys/liverpool-home.png`, badge: "NEW" },
  { name: "Liverpool Away Jersey", price: 22000, category: "Premier League (England)", type: "away", image: `${BASE_URL}/jerseys/liverpool-away.png`, badge: "HOT" },
  { name: "Barcelona Home Jersey", price: 20000, category: "La Liga (Spain)", type: "home", image: `${BASE_URL}/jerseys/barcelona-home.png`, badge: "NEW" },
  { name: "Barcelona Away Jersey", price: 22000, category: "La Liga (Spain)", type: "away", image: `${BASE_URL}/jerseys/barcelona-away.png`, badge: "HOT" },
  { name: "Real Madrid Home Jersey", price: 20000, category: "La Liga (Spain)", type: "home", image: `${BASE_URL}/jerseys/realmadrid-home.png`, badge: "NEW" },
  { name: "Real Madrid Away Jersey", price: 22000, category: "La Liga (Spain)", type: "away", image: `${BASE_URL}/jerseys/realmadrid-away.png`, badge: "HOT" },
  { name: "Sevilla Home Jersey", price: 20000, category: "La Liga (Spain)", type: "home", image: `${BASE_URL}/jerseys/sevilla-home.png`, badge: "NEW" },
  { name: "Valencia Home Jersey", price: 20000, category: "La Liga (Spain)", type: "home", image: `${BASE_URL}/jerseys/valencia-home.png`, badge: "NEW" },
  { name: "Villarreal Home Jersey", price: 20000, category: "La Liga (Spain)", type: "home", image: `${BASE_URL}/jerseys/villarreal-home.png`, badge: "NEW" },
  { name: "AC Milan Home Jersey", price: 20000, category: "Serie A (Italy)", type: "home", image: `${BASE_URL}/jerseys/acmilan-home.png`, badge: "NEW" },
  { name: "AC Milan Away Jersey", price: 22000, category: "Serie A (Italy)", type: "away", image: `${BASE_URL}/jerseys/acmilan-away.png`, badge: "HOT" },
  { name: "Inter Milan Home Jersey", price: 20000, category: "Serie A (Italy)", type: "home", image: `${BASE_URL}/jerseys/intermilan-home.jpeg`, badge: "NEW" },
  { name: "Inter Milan Away Jersey", price: 22000, category: "Serie A (Italy)", type: "away", image: `${BASE_URL}/jerseys/intermilan-away.png`, badge: "HOT" },
  { name: "Bayern Munich Home Jersey", price: 20000, category: "Bundesliga (Germany)", type: "home", image: `${BASE_URL}/jerseys/bayernmunich-home.png`, badge: "NEW" },
  { name: "Bayern Munich Away Jersey", price: 22000, category: "Bundesliga (Germany)", type: "away", image: `${BASE_URL}/jerseys/bayernmunich-away.png`, badge: "HOT" },
  { name: "Borussia Dortmund Home Jersey", price: 20000, category: "Bundesliga (Germany)", type: "home", image: `${BASE_URL}/jerseys/borussiadortmund-home.png`, badge: "NEW" },
  { name: "PSG Home Jersey", price: 20000, category: "Ligue 1 (France)", type: "home", image: `${BASE_URL}/jerseys/psg-home.png`, badge: "NEW" },
  { name: "Nigeria Home Jersey", price: 20000, category: "National Teams", type: "home", image: `${BASE_URL}/jerseys/nigeria-home.png`, badge: "NEW" },
  { name: "Argentina Home Jersey", price: 20000, category: "National Teams", type: "home", image: `${BASE_URL}/jerseys/argentina-home.png`, badge: "NEW" },
  { name: "Arsenal Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/arsenalretro-home.png`, badge: "RETRO" },
  { name: "Arsenal Retro Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/arsenalretro-away.png`, badge: "RETRO" },
  { name: "AC Milan Retro Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/acmilanretro-away.png`, badge: "RETRO" },
  { name: "Barcelona Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/barcelonaretro-home.png`, badge: "RETRO" },
  { name: "Liverpool Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/liverpoolretro-home.png`, badge: "RETRO" },
  { name: "Liverpool Retro 2 Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/liverpoolretro2-away.png`, badge: "RETRO" },
  { name: "Liverpool Retro 3 Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/liverpoolretro3-away.png`, badge: "RETRO" },
  { name: "Liverpool Retro 4 Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/liverpoolretro4-away.png`, badge: "RETRO" },
  { name: "Juventus Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/juventusretro-home.png`, badge: "RETRO" },
  { name: "Juventus Retro 2 Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/juventusretro2-home.png`, badge: "RETRO" },
  { name: "Lazio Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/lazioretro-home.png`, badge: "RETRO" },
  { name: "Lazio Retro Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/lazioretro-away.png`, badge: "RETRO" },
  { name: "Nigeria Retro Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/nigeriaretro-away.png`, badge: "RETRO" },
  { name: "Newcastle Retro Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/newcastleretro-away.png`, badge: "RETRO" },
  { name: "England Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/englandretro-home.png`, badge: "RETRO" },
  { name: "France Retro Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/franceretro-home.png`, badge: "RETRO" },
  { name: "Celta Vigo Home Jersey", price: 25000, category: "Retro Kits", type: "home", image: `${BASE_URL}/jerseys/celtavigo-home.png`, badge: "RETRO" },
  { name: "Celta Vigo Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/celtavigo-away.png`, badge: "RETRO" },
  { name: "Manchester United Retro 2 Away Jersey", price: 25000, category: "Retro Kits", type: "away", image: `${BASE_URL}/jerseys/manchesterunitedretro2-away.png`, badge: "RETRO" },
  { name: "Barcelona Special Home Jersey", price: 28000, category: "Special Edition", type: "home", image: `${BASE_URL}/jerseys/barcelonaspecial-home.png`, badge: "SPECIAL" },
  { name: "Brazil Special Home Jersey", price: 28000, category: "Special Edition", type: "home", image: `${BASE_URL}/jerseys/brazilspecial-home.png`, badge: "SPECIAL" },
  { name: "West Ham Special Away Jersey", price: 28000, category: "Special Edition", type: "away", image: `${BASE_URL}/jerseys/westhamspecial-away.png`, badge: "SPECIAL" },
  { name: "Blackair Home Jersey", price: 28000, category: "Special Edition", type: "home", image: `${BASE_URL}/jerseys/blackair-home.png`, badge: "SPECIAL" },
  { name: "Blackair Away Jersey", price: 28000, category: "Special Edition", type: "away", image: `${BASE_URL}/jerseys/blackair-away.png`, badge: "SPECIAL" },
  { name: "Arsenal Street Home Jersey", price: 30000, category: "Streetwear", type: "home", image: `${BASE_URL}/jerseys/arsenalstreet-home.png`, badge: "STREET" },
  { name: "Brazil Street Home Jersey", price: 30000, category: "Streetwear", type: "home", image: `${BASE_URL}/jerseys/brazilstreet-home.png`, badge: "STREET" },
  { name: "Real Madrid Street Home Jersey", price: 30000, category: "Streetwear", type: "home", image: `${BASE_URL}/jerseys/realmadridstreet-home.png`, badge: "STREET" },
  { name: "Inter Milan Street Home Jersey", price: 30000, category: "Streetwear", type: "home", image: `${BASE_URL}/jerseys/intermilanstreet-home.png`, badge: "STREET" },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    await Product.deleteMany({});
    console.log("Cleared existing products");
    await Product.insertMany(products);
    console.log(`Successfully seeded ${products.length} products`);
    mongoose.disconnect();
    console.log("Done");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seedDatabase();