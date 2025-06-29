import dotenv from "dotenv";
import { connectDB } from "../db/index.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
    console.error("Error: Issue while connecting MONGODB");
    process.exit(1);
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});
