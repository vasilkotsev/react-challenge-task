import React from "react";
import Link from "next/dist/client/link";

function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <Link href={`/company/${company.local_organization_id.id}`} passHref>
        <a href="replace">
          <h3>{company.company_name}</h3>
          <p className="status">
            <span>Status: </span>
            <span>{company.status}</span>
          </p>
        </a>
      </Link>
    </div>
  );
}

export default CompanyCard;
