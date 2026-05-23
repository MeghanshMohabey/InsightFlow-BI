const express = require("express");

const router = express.Router();

router.post("/refresh", async (req, res) => {
  try {
    console.log("REFRESH ROUTE HIT");
    console.log("=================================");

    console.log("Refreshing dashboard visuals...");

    await new Promise((r) => setTimeout(r, 1000));

    console.log("Updating semantic model...");

    await new Promise((r) => setTimeout(r, 1000));

    console.log("Applying latest dataset...");

    await new Promise((r) => setTimeout(r, 1000));

    console.log("Dashboard visuals updated successfully");

    console.log("=================================");

    res.json({
      message: "Dashboard refresh triggered",
    });
  } catch (error) {
    res.status(500).json({
      message: "Refresh failed",
    });
  }
});

module.exports = router;
