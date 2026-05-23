import { useContext } from "react";
import { useLocation } from "react-router-dom";

import dashboardPages from "../../config/dashboardPages";
import { DatasetContext } from "../../context/context";

import PowerBIEmbed from "../Power_bi";

export default function DynamicDashboard() {
  const location = useLocation();

  const { datasetType } = useContext(DatasetContext);

  const dashboardUrls = {
    finance:
  "https://app.powerbi.com/reportEmbed?reportId=5d615491-aa87-446f-81df-b1f9fce9c6b0&autoAuth=true&ctid=18a39f0b-bbf5-479f-80ee-ca3314c75cef",

    healthcare:
      "https://app.powerbi.com/reportEmbed?reportId=1cc691a1-ab3f-4c6b-a0c4-de9c583f611d&autoAuth=true&ctid=18a39f0b-bbf5-479f-80ee-ca3314c75cef",

    sales:
      "https://app.powerbi.com/reportEmbed?reportId=bd30c700-b45f-4618-ae21-0b949beff96b&autoAuth=true&ctid=18a39f0b-bbf5-479f-80ee-ca3314c75cef",
  };

  const currentPage = dashboardPages[datasetType]?.find(
    (page) => page.route === location.pathname,
  );

  const finalUrl =
    currentPage && dashboardUrls[datasetType]
      ? `${dashboardUrls[datasetType]}&pageName=${currentPage.pageId}&filterPaneEnabled=false&navContentPaneEnabled=false`
      : null;

  console.log("FINAL URL:", finalUrl);

// ... your existing code ...

return (
  <div className="main-content">
    {!datasetType ? (
      <h2 style={{ padding: "20px" }}>
        Upload a dataset to view dashboard
      </h2>
    ) : finalUrl ? (
      /* Adding the key prop here forces a re-render when the URL shifts from null to valid */
      <PowerBIEmbed key={finalUrl} url={finalUrl} />
    ) : (
      <h2 style={{ padding: "20px" }}>
        Dashboard could not be loaded
      </h2>
    )}
  </div>
);
}