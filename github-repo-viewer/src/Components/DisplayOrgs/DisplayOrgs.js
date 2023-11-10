import React, { useState, useEffect } from "react";
import "./DisplayOrgs.css";
import { fetchData } from "../FetchData/FetchData";
import Loading from "../Loading/Loading";

const DisplayOrgs = ({ searchInput, error }) => {
  const [orgs, setOrgs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOrgs("");

    if (searchInput) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          const getData = await fetchData("orgs", searchInput);
          setOrgs(getData.result);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }, 1000);
    }
  }, [searchInput]);

  return (
    <div className="DisplayOrgsContainer">
      {error ? (
        <h4 className="titlePage">Organizations</h4>
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <h4 className="titlePage">{searchInput} Organizations</h4>
              {orgs &&
                orgs.map((org) => (
                  <div class="card mb-3" style={{ "max-width": "150px;" }}>
                    <div class="row g-0">
                      <div class="col-md-4 col-sm-2 col-2 d-flex align-items-center">
                        <img
                          src={org.avatar_url}
                          class="img-fluid rounded-start"
                          width="65"
                          alt={`${org.login} avatar`}
                        />
                      </div>
                      <div class="col-md-8 col-sm-10 col-10">
                        <div class="card-body">
                          <h5 class="card-title">{org.login}</h5>
                          <p class="card-text">{org.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayOrgs;
