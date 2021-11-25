import React from "react";

function CompanyHighlight({ data: { title, message, classification } }) {
  function getColorClasses(classification) {
    if (classification === "negative") return "negative-color";
    if (classification === "positive") return "positive-color";
    return "neutral-color";
  }

  return (
    <div className={`company-highlight ${getColorClasses(classification)} `}>
      <h3>{title}: </h3>
      <p>{message}</p>
    </div>
  );
}

export default CompanyHighlight;
