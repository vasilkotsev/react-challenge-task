import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import SearchBar from "@/components/Common/SearchBar/SearchBar";
import CompanyCard from "@/components/Common/CompanyCard/CompanyCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const companies = result.data;

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResult([]);
      return;
    }

    setIsLoading(true);

    const encodedQuery = encodeURIComponent(searchQuery);
    const filterTimeout = setTimeout(() => {
      (async function () {
        const response = await fetch(`/api/search?query=${encodedQuery}`);
        setResult(await response.json());

        setIsLoading(false);
      })();
    }, 600);

    return () => {
      clearTimeout(filterTimeout);
      setIsLoading(false);
    };
  }, [searchQuery]);

  return (
    <React.Fragment>
      <div className="homepage page">
        <div className="container">
          <div className="homepage-logo">
            <Image src="/logo.png" layout="fill" />
          </div>
          <SearchBar
            placeholder="Search for companies by name, CVR, phone number or email"
            value={searchQuery}
            onChange={handleInputChange}
          />

          {isLoading ? (
            <div className="d-flex mt-5 justify-content-center">
              <div className="spinner-border text-primary">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : companies && companies.length === 0 ? (
            <p className="no-result-message">Sorry, no results were found</p>
          ) : null}

          {companies && companies.length !== 0 ? (
            <div>
              <h1 className="homepage-title">Companies:</h1>
              {companies.map(company => (
                <CompanyCard
                  key={company.local_organization_id.id}
                  company={company}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
