const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ================= HOME =================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MediFind AI Backend is running",
  });
});

// ================= HEALTH =================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend connected successfully",
  });
});

// ================= MEDICINE SEARCH =================

app.get("/api/medicines/search", (req, res) => {
  const { name } = req.query;

  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Medicine name is required",
    });
  }

  const searchName = name.trim();

  // Temporary medicine data
  // We will connect this to your Prisma/database next.
  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      pharmacy: "MediCare Pharmacy",
      price: 25,
      available: true,
      location: "Kanpur",
    },
    {
      id: 2,
      name: "Dolo 650",
      pharmacy: "HealthPlus Pharmacy",
      price: 32,
      available: true,
      location: "Kanpur",
    },
    {
      id: 3,
      name: "Azithromycin",
      pharmacy: "Apollo Pharmacy",
      price: 45,
      available: true,
      location: "Kanpur",
    },
    {
      id: 4,
      name: "Cetirizine",
      pharmacy: "City Medical Store",
      price: 20,
      available: true,
      location: "Kanpur",
    },
  ];

  const results = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchName.toLowerCase()),
  );

  res.json({
    success: true,
    results,
  });
});

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MediFind AI Backend running on port ${PORT}`);
});
