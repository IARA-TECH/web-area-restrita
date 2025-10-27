import React from "react";

function PowerBIReport() {
  const reportUrl = "https://app.powerbi.com/view?r=eyJrIjoiMTk2ZDFiYWUtYmFiMC00YjdjLWJhM2ItY2VkMjA5YzM4N2Y1IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

  return (
    <iframe
      title="Power BI Report"
      width="100%"
      height="600px"
      src={reportUrl}
      frameBorder="0"
      allowFullScreen={true}
    />
  );
}

export default PowerBIReport;