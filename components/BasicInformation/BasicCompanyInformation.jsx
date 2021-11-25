import React from "react";
import { useRouter } from "next/router";

const BasicCompanyInformation = ({ basics: { data: company } }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <button
        className="btn back-btn btn-outline-primary"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
      <section>
        <div className="container">
          <h2>
            Basic information for <strong>{company?.company_name}</strong>
          </h2>
          <div className="basic-information">
            <div className="row">
              <div className="col-md-6">
                <div className="basic-info-row">
                  <span className="label">Registered VAT: </span>
                  <span>{company?.vat ? "Yes" : "No"}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Email: </span>
                  <span>
                    {(!company?.email?.hidden && company?.email?.email) ||
                      "The company doesn't have an email"}
                  </span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Phone: </span>
                  <span>
                    {(!company?.phone?.hidden &&
                      company?.phone?.phone_number) ||
                      "The company doesn't have a phone number"}
                  </span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Score: </span>
                  <span>
                    {company?.score ?? "The company doesn't have a score data"}
                  </span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Adress: </span>
                  <span>{company?.address?.country},&nbsp;</span>
                  <span>{company?.address?.city}, &nbsp;</span>
                  <span>{company?.address?.street} &nbsp;</span>
                  <span>&#8470; {company?.address?.number}; </span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Company status: </span>
                  <span>{company?.status}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Company type: </span>
                  <span>{company?.company_type?.long}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Main industry code: </span>
                  <span>{company?.main_industry_code?.code}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Registered capital: </span>
                  <span>
                    {Number.parseFloat(
                      company?.registered_capital?.value
                    ).toFixed(2)}{" "}
                  </span>
                  <span>{company?.registered_capital?.currency}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Date of incorporation: </span>
                  <span>{company?.date_of_incorporation}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="basic-info-row">
                  <span className="label">Local organization id: </span>
                  <span>{company?.local_organization_id?.id},&nbsp;</span>
                  <span>{company?.local_organization_id?.country}</span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Risk assessment: </span>
                  <span>
                    {company?.risk_assessment ??
                      "The company doesn't have a Risk assessment"}
                  </span>
                </div>
                <div className="basic-info-row">
                  <span className="label">Company secondary names: </span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BasicCompanyInformation;
