import React from "react";

export default function PowerBIEmbed({ url }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
}
