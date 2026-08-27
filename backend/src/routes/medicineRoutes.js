const express = require("express");

const router = express.Router();

const { searchMedicines } = require("../controllers/medicinecontrollers");

// Search medicines
router.get("/search", searchMedicines);

module.exports = router;
