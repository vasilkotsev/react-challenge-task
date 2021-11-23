import React from "react";
import _ from "lodash";

function sortData(obj) {
  const arr = Object.values(obj);
  var classificationOrder = ["negative", "positive", "neutral"];
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
    <div>
      <h2>Company highlights</h2>
      {companyHighlights.map((highLight, index) => {
        return (
          <div key={index}>
            <h3>{highLight.title}: </h3>
            <p>{highLight.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyHighlights;
