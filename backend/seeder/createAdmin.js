import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../models/userSchema.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      firstName: "Super",
      lastName: "Admin",
      email: "admin@example.com",
      phone: "01234567890", // 11 digits
      nic: "1234567890123", // 13 digits
      dob: "1990-01-01",
      gender: "Male",
      password: hashedPassword,
      role: "Admin"
    });
    

    console.log("✅ Admin created:", admin.email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
