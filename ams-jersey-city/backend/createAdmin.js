const mongoose = require("mongoose");
const Admin = require("./models/Admin");
require("dotenv").config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);
  
  await Admin.deleteMany({});
  
  const admin = new Admin({
    username: "amsadmin",
    password: "Adekunle2405",
  });
  
  await admin.save();
  console.log("Admin created successfully");
  console.log("Username: amsadmin");
  console.log("Password: Adekunle2405");
  
  mongoose.disconnect();
}

createAdmin();