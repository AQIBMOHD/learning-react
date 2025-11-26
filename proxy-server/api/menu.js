const { getMenuData } = require('./mockData');

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const restaurantId = req.query.restaurantId;

  if (!restaurantId) {
    return res.status(400).json({ error: "Restaurant ID required" });
  }

  try {
    const data = getMenuData(restaurantId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
};
