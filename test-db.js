import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function testDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Koneksi MongoDB berhasil!");
  } catch (error) {
    console.error("❌ Gagal terhubung ke MongoDB:", error);
  } finally {
    mongoose.connection.close();
  }
}

testDB();
