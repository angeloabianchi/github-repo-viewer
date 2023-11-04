import React, { useEffect, useState } from 'react';
import './DisplayRepos.css';
import { fetchData } from '../FetchData/FetchData';
import Loading from '../Loading/Loading';

const DisplayRepos = ({ searchInput, setRepoSelected }) => {

    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setData('');

        if(searchInput) {
            setIsLoading(true);
            setTimeout( async () => {
                const getData = await (fetchData('repos', searchInput, page));
                setData(getData);
                setIsLoading(false);
            }, 1000);
        }
    }, [searchInput]);

    const selectRepo = (repo) => {
        setRepoSelected(repo);
    }

    /* console.log(data); */

  return (
    <div className="DisplayReposContainer">
        {isLoading ? (
            <Loading />
        ) : (
            <>
            <div className='reposContainer'>
                <h4 className="titlePage">{searchInput} Repos</h4>
                <div class='container'>
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 repoList">
                        {data && data.map((repo) => (
                            <div class='col'>
                                <button onClick={() => selectRepo(repo)} class='btn btn-repo mb-2'>
                                    <div class="card">
                                        <div class="card-header">
                                            {repo.name}
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{repo.description}</p>
                                                <footer class="blockquote-footer">
                                                    <a href={repo.html_url} target='_blank'>
                                                        <cite title="Source Title">Link </cite>
                                                    </a>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            
        
        
                        ))}
                    </div>
                </div>
            </div>
                
            </>

        )}

    </div>
  );
}

export default DisplayRepos;