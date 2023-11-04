import React, { useEffect, useState } from 'react';
import './DisplayRepos.css';
import { fetchData } from '../FetchData/FetchData';

const DisplayRepos = ({ searchInput, setSearchInput }) => {

    const [data, setData] = useState();
    const [page, setPage] = useState(1);


    useEffect(() => {
        setData('');

        if(searchInput) {
            setTimeout( async () => {
                const getData = await (fetchData('repos', searchInput, page));
                setData(getData);
            }, 1000);
        }
    }, [searchInput])

    console.log(data);

  return (
    <div className="DisplayReposContainer">
        <div class='container'>
            <div class="row">
                {data && data.map((repo) => (
                    <div class="col-md-auto">
                        <div class="card border-success mb-3" style={{"min-width": "18rem;"}}>
                            <div class="card-header bg-transparent border-success">Header</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">{repo.name}</h5>
                                <p class="card-text">{repo.description}</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">
                                <a href={repo.html_url} class="btn btn-repo">Visit Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default DisplayRepos;
