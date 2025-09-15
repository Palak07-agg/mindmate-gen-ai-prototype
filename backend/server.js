import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));   // ✅ Add this
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Mood detection route
app.post("/api/detect-mood", async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    // Mock response
    res.json({ mood: "Happy" });
  } catch (err) {
    console.error("Error detecting mood:", err);
    res.status(500).json({ error: "Failed to detect mood" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
