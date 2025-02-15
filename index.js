import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
