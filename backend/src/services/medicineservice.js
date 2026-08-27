const axios = require("axios");

/**
 * Search for medicines using the FDA API.
 */
const searchMedicines = async (medicineName) => {
  try {
    if (!medicineName || medicineName.trim() === "") {
      throw new Error("Medicine name is required");
    }

    const response = await axios.get("https://api.fda.gov/drug/label.json", {
      params: {
        search: `openfda.brand_name:"${medicineName}"`,
        limit: 10,
      },
    });

    const results = response.data.results || [];

    return results.map((medicine) => ({
      name: medicine.openfda?.brand_name?.[0] || medicineName,
      genericName: medicine.openfda?.generic_name?.[0] || "Not available",
      manufacturer: medicine.openfda?.manufacturer_name?.[0] || "Not available",
      dosageForm: medicine.openfda?.dosage_form?.[0] || "Not available",
      purpose: medicine.purpose?.[0] || "Information not available",
    }));
  } catch (error) {
    console.error(
      "Medicine search error:",
      error.response?.data || error.message,
    );

    throw new Error("Unable to search medicines");
  }
};

module.exports = {
  searchMedicines,
};
