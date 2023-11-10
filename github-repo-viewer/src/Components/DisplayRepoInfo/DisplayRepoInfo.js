import React, { useState, useEffect } from "react";
import "./DisplayRepoInfo.css";
import { fetchData } from "../FetchData/FetchData";

const DisplayRepoInfo = ({ repoSelected }) => {
  const [languages, setLanguages] = useState();

  useEffect(() => {
    setLanguages("");

    setTimeout(async () => {
      try {
        const getData = await fetchData(
          "languages",
          repoSelected["owner"].login,
          repoSelected["name"]
        );
        setLanguages(getData.result);
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  }, [repoSelected]);

  return (
    <>
      {repoSelected ? (
        <div className="DisplayInfoContainer">
          <div>
            <h4 className="titlePage">{repoSelected["name"]} Repo Info</h4>
            <div class="row">
              <div class="row">
                <p>{repoSelected["description"]}</p>
              </div>
              <div class="row">
                <div class="col">Main language: {repoSelected["language"]}</div>
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="progress-stacked">
                  {Object.keys(languages).map((key) => (
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={languages[key]}
                      aria-valuemin="0"
                      aria-valuemax="10000">
                      <div
                        class="progress-bar overflow-visible text-dark"
                        style={{ width: "25%" }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="DisplayInfoContainer">
          <h4 className="titlePage">Repo Info</h4>
        </div>
      )}
    </>
  );
};

export default DisplayRepoInfo;
