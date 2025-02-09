import { connectToDatabase } from "@/lib/mongodb";
import Feedback from "@/models/Feedback";
import { MongoClient } from "mongodb";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection(process.env.MONGODB_COLLECTION);

    console.log("📌 Menerima request POST ke /api/feedback");

    await connectToDatabase();
    console.log("✅ Terhubung ke database!");

    await collection.insertOne({
      name,
      email,
      subject,
      message, // ✅ Pastikan ini ditambahkan tanpa tanda koma atau objek lain
      createdAt: new Date(), // ✅ Pastikan waktu tersimpan dengan format Date, bukan timestamp
    });

    client.close();
    console.log("✅ Data berhasil disimpan!");
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    await connectToDatabase();
    const feedbacks = await Feedback.find({});
    return new Response(JSON.stringify(feedbacks), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Gagal mengambil data" }), {
      status: 500,
    });
  }
}
