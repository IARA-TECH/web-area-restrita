import React from "react";

function ExpoTechReport() {
  const reportUrl = "https://app.powerbi.com/view?r=eyJrIjoiZDM0MmE0ZjItNDYxZi00MzVlLTgwZGEtNDAwMWM3NWRmNjg2IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

  return (
    <iframe
      title="ExpoTech Report"
      width="100%"
      height="600px"
      src={reportUrl}
      frameBorder="0"
      allowFullScreen={true}
    />
  );
}

export default ExpoTechReport;