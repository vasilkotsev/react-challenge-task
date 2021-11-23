import * as React from "react";
import { useRouter } from "next/router";
import Management from "@/components/Management";
import { companyRelations } from "@/requests";
import BasicCompanyInformation from "@/components/BasicInformation/BasicCompanyInformation";
import CompanyHighlights from "@/components/HighLights/CompanyHighlights";

export default function Company() {
  const router = useRouter();
  const { id } = router.query;

  const [basics, setBasics] = React.useState(null);
  const [highLights, setHighLights] = React.useState(null);
  const [relations, setRelations] = React.useState(null);

  React.useEffect(() => {
    if (id != null) {
      companyRelations({ id }).then(res => {
        setRelations(res);
      });

      (async function () {
        const response = await fetch(`/api/company/basics/${id}`);
        const data = await response.json();
        setBasics(data);
      })();

      (async function () {
        const response = await fetch(`/api/company/highlights/${id}`);
        const data = await response.json();
        setHighLights(data);
      })();
    }
  }, [id]);

  return (
    <React.Fragment>
      {basics ? <BasicCompanyInformation basics={basics} /> : null}
      {highLights ? <CompanyHighlights highLights={highLights} /> : null}
      {relations ? <Management relations={relations} /> : null}
    </React.Fragment>
  );
}
