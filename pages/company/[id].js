import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Management from "@/components/Management";
import { companyRelations } from "@/requests";
import BasicCompanyInformation from "@/components/BasicInformation/BasicCompanyInformation";
import CompanyHighlights from "@/components/Highlights/CompanyHighlights";

export default function Company() {
  const router = useRouter();
  const { id } = router.query;

  const [basics, setBasics] = useState(null);
  const [highLights, setHighLights] = useState(null);
  const [relations, setRelations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    companyRelations({ id }).then(res => {
      setRelations(res);
    });

    (async function () {
      const basicsResponse = await fetch(`/api/company/basics/${id}`);
      setBasics(await basicsResponse.json());

      const highlightsResponse = await fetch(`/api/company/highlights/${id}`);
      setHighLights(await highlightsResponse.json());

      setIsLoading(false);
    })();
  }, [id]);

  return (
    <div className="detailed-page page">
      {isLoading ? (
        <div className="d-flex mt-5 justify-content-center ">
          <strong className="">LOADING...</strong>
          <div className="spinner-border ml-2"></div>
        </div>
      ) : (
        <React.Fragment>
          {basics ? <BasicCompanyInformation basics={basics} /> : null}
          {highLights ? <CompanyHighlights highLights={highLights} /> : null}
          {relations ? <Management relations={relations} /> : null}
        </React.Fragment>
      )}
    </div>
  );
}
