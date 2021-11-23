const BasicCompanyInformation = ({ basics: { data: company } }) => {
  return (
    <div>
      <h2>
        Basic company information for: <span>{company?.company_name}</span>
      </h2>

      <div>Registered VAT: {company?.vat ? "Yes" : "No"}</div>
      <div>
        Email:{" "}
        {(!company?.email?.hidden && company?.email?.email) ||
          "The company doesn't have an email"}
      </div>
      <div>
        Phone:{" "}
        {(!company?.phone?.hidden && company?.phone?.phone_number) ||
          "The company doesn't have a phone number"}
      </div>
      <div>
        Score: {company?.score ?? "The company doesn't have a score data"}
      </div>
      <div>
        Address:
        <p>Country: {company?.address?.country}</p>
        <p>City: {company?.address?.city}</p>
        <p>
          Street: <span>{company?.address?.street}</span>
          <span> {company?.address?.number}</span>
        </p>
        <p>Zipcode: {company?.address?.zipcode}</p>
      </div>
      <div>Company status: {company?.status}</div>
      <div>Company type: {company?.company_type?.long}</div>
      <div>Main industry code: {company?.main_industry_code?.code}</div>
      <div>
        Registered capital:{" "}
        {Number.parseFloat(company?.registered_capital?.value).toFixed(2)}{" "}
        {company?.registered_capital?.currency}
      </div>
      <div>Date of incorporation: {company?.date_of_incorporation}</div>
      <div>
        Local organization id: {company?.local_organization_id?.id}{" "}
        {company?.local_organization_id?.country}
      </div>
      <div>
        Company secondary names:{" "}
        {company?.company_secondary_names != null ? (
          <ul>
            {company.company_secondary_names.map((company, index) => (
              <li key={index}>{company.name}</li>
            ))}
          </ul>
        ) : (
          <span>This company doesn't have a secondary names</span>
        )}
      </div>
      <div>
        Risk assessment:{" "}
        {company?.risk_assessment ??
          "The company doesn't have a Risk assessment"}
      </div>
    </div>
  );
};

export default BasicCompanyInformation;
