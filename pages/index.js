import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const companies = result.data;

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResult([]);
      return;
    }

    const encodedQuery = encodeURIComponent(searchQuery);

    const filterTimeout = setTimeout(() => {
      (async function () {
        const response = await fetch(`/api/search?query=${encodedQuery}`);
        const data = await response.json();
        setResult(data);
      })();
    }, 600);

    return () => {
      clearTimeout(filterTimeout);
    };
  }, [searchQuery]);

  return (
    <div>
      <h1>Search bar</h1>
      <input type="search" value={searchQuery} onChange={handleInputChange} />
      {companies && companies.length === 0 ? (
        <div>There are no results</div>
      ) : null}

      {companies
        ? companies.map(company => (
            <Link
              key={company.local_organization_id.id}
              href={`/company/${company.local_organization_id.id}`}
              passHref
            >
              <a href="replace">
                <div
                  style={{
                    padding: "20px",
                    border: "1px solid red",
                    marginTop: "10px"
                  }}
                >
                  <h3>{company.company_name}</h3>
                  <p>
                    <span>Status: </span>
                    {company.status}
                  </p>
                </div>
              </a>
            </Link>
          ))
        : null}
    </div>
  );
}
