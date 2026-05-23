import { useState, useContext } from "react";

import axios from "axios";

import { DatasetContext } from "../context/context";

export default function Upload() {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);

  const {
    datasetType,
    setDatasetType,

    totalRows,
    setTotalRows,

    columns,
    setColumns,
  } = useContext(DatasetContext);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
      );

      console.log(res.data);

      setDatasetType(res.data.datasetType);

      setColumns(res.data.columns);

      setTotalRows(res.data.totalRows);

      setPreview(res.data.preview);

      alert("Dataset analyzed successfully");
    } catch (err) {
      console.log(err);

      alert("Upload failed");
    }
  };

  const refreshDashboard = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/refresh");

      console.log(response.data);

      alert("Dashboard refresh triggered");

    } catch (error) {
      console.log(error);

      alert("Refresh failed");
    }
  };

  return (
    <div className="main-content">
      <div className="mb-4">
        <h1>Upload Dataset</h1>

        <p className="text-muted">Upload CSV or Excel files for analytics</p>
      </div>

      <div className="card-box">
        <div
          style={{
            border: "2px dashed #cbd5e1",
            borderRadius: "12px",
            padding: "50px",
            textAlign: "center",
            backgroundColor: "#f8fafc",
          }}
        >
          <h4>Upload Dataset</h4>

          <p className="text-muted">Supported formats: CSV, XLSX</p>

          <input
            type="file"
            className="form-control mt-4"
            accept=".csv,.xlsx"
            onChange={handleFileChange}
          />

          {fileName && (
            <div className="mt-4">
              <p>
                <strong>Selected File:</strong> {fileName}
              </p>
            </div>
          )}

          <button className="btn btn-primary mt-4" onClick={handleUpload}>
            Analyze Dataset
          </button>

          <button
            className="btn btn-success mt-4 ms-3"
            onClick={refreshDashboard}
          >
            Refresh Dashboard
          </button>
        </div>
      </div>

      <div className="card-box">
        <h4>Dataset Preview</h4>

        {preview.length > 0 && (
          <table className="table mt-4">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {preview.map((row, index) => (
                <tr key={index}>
                  {columns.map((col, i) => (
                    <td key={i}>{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="card-box">
        <h4>Detection Result</h4>

        <div className="mt-4">
          <p>
            <strong>Dataset Type:</strong> {datasetType}
          </p>

          <p>
            <strong>Total Rows:</strong> {totalRows}
          </p>

          <p>
            <strong>Total Columns:</strong> {columns.length}
          </p>
        </div>
      </div>
    </div>
  );
}
