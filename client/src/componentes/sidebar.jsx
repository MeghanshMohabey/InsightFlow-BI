import { Link } from "react-router-dom";
import { useContext } from "react";
import dashboardPages from "../config/dashboardPages";
import { DatasetContext } from "../context/context";

export default function Sidebar() {
  const {
    datasetType,
    totalRows = 0,
    columns = [],
  } = useContext(DatasetContext);
  console.log(datasetType);
  console.log(dashboardPages);
  console.log(dashboardPages[datasetType]);
  return (
    <div className="sidebar">
      <div>
        <h1 className="logo">InsightFlow BI</h1>

        <p className="subtitle">Analytics Workspace</p>
      </div>

      <div className="dataset-box">
        <h5>Dataset Info</h5>

        <p>Type: {datasetType}</p>

        <p>Rows: {totalRows}</p>

        <p>Columns: {columns.length}</p>
      </div>

      <div>
        <p className="menu-title">DASHBOARDS</p>

        {dashboardPages[datasetType]?.map((page) => (
          <Link
            key={page.route}
            to={page.route}
            style={{ textDecoration: "none" }}
          >
            <div
              className="menu-item"
              style={{
                color: "white",
                background: "red",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              {page.name}
            </div>
          </Link>
        ))}
      </div>

      <Link to="/upload">
        <button className="btn btn-primary upload-btn">+ Upload Dataset</button>
      </Link>
    </div>
  );
}
  