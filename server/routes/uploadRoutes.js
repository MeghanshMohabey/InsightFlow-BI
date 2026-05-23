const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");

const db = require("../db/db");
const detectDataset = require("../utils/dataset");
const refreshDataset = require("../services/powerbi");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("file"),

  async (req, res) => {
    const results = [];

    fs.createReadStream(req.file.path)

      .pipe(csv())

      .on("data", (data) => {
        results.push(data);
      })

      .on("end", async () => {
        try {
          if (results.length === 0) {
            return res.status(400).json({
              message: "CSV is empty",
            });
          }

          const columns = Object.keys(results[0]);

          console.log("CSV COLUMNS:", columns);

          const datasetType = detectDataset(columns);

          console.log("DETECTED DATASET:", datasetType);

          console.log("=================================");
          console.log("Clearing old dataset...");
          console.log("=================================");

          await db.query(
            `
            DELETE FROM uploaded_data
            WHERE dataset_type = $1
            `,
            [datasetType],
          );

          console.log("Old dataset removed");

          console.log("=================================");
          console.log("Inserting new dataset...");
          console.log("=================================");

          for (const row of results) {
            await db.query(
              `
              INSERT INTO uploaded_data
              (dataset_type, data)
              VALUES ($1, $2)
              `,
              [datasetType, JSON.stringify(row)],
            );
          }

          console.log("Dataset inserted successfully");

          // Optional Power BI refresh
          // await refreshDataset();

          res.json({
            message: "Dataset analyzed successfully",
            datasetType,
            columns,
            totalRows: results.length,
            preview: results.slice(0, 5),
          });
        } catch (error) {
          console.log(error);

          res.status(500).json({
            message: "Server Error",
          });
        }
      });
  },
);

module.exports = router;
