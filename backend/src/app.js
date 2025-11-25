import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/v1", productRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

export default app;
