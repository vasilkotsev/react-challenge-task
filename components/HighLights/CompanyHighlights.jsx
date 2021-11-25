import React from "react";
import _ from "lodash";
import CompanyHighlight from "./../Common/CompanyHighlight/CompanyHighlight";

function sortData(obj) {
  const arr = Object.values(obj);
  const classificationOrder = ["negative", "positive", "neutral"];
  const sortedData = _(arr)
    .sortBy(["classification", "weight"])
    .sortBy(function (obj) {
      return classificationOrder.indexOf(obj.classification);
    })
    .value();

  return sortedData;
}

const CompanyHighlights = ({ highLights: { data } }) => {
  const companyHighlights = sortData(data);

  return (
    <section>
      <div className="container">
        <h2>Company highlights</h2>

        <div className="classification">
          <span className="classification-label">Classification: </span>
          <span className="badge-pill badge-danger">Negative</span>
          <span className="badge-pill badge-success">Positive</span>
          <span className="badge-pill badge-secondary">Neutral</span>
        </div>

        {companyHighlights.map((highLight, index) => {
          return <CompanyHighlight key={index} data={highLight} />;
        })}
      </div>
    </section>
  );
};

export default CompanyHighlights;
