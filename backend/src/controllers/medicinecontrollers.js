const medicineService = require("../services/medicineservice");

const searchMedicines = async (req, res, next) => {
  try {
    const { name, location } = req.query;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Medicine name is required",
      });
    }

    const medicines = await medicineService.searchMedicines(name, location);

    res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  searchMedicines,
};
