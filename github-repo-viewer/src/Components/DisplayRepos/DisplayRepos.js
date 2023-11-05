import React, { useEffect, useState } from 'react';
import './DisplayRepos.css';
import { fetchData } from '../FetchData/FetchData';
import Loading from '../Loading/Loading';

const DisplayRepos = ({ searchInput, setRepoSelected, error, setError, setShowErrorModal }) => {

    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    


    const handleShowErrorModal = () => {
        setShowErrorModal(true);
    };


    const selectRepo = (repo) => {
        setRepoSelected(repo);
    }


    useEffect(() => {
        setData('');
        setError(null); 

        if(searchInput) {
            setIsLoading(true);
            setTimeout( async () => {
                try {
                    const getData = await (fetchData('repos', searchInput, page));
                    if (getData.error) {
                        setError(getData.message); // Set the error message
                        handleShowErrorModal(); // Show the error modal
                        
                    } else {
                        setData(getData);
                        
                    }
                    setIsLoading(false);
                } catch (err) {
                    console.error(err);
                }
                
            }, 1000);
        }
    }, [searchInput]);

    /* console.log(data); */

  return (
    <div className="DisplayReposContainer">
        {isLoading ? (
            <Loading />
        ) : (
            <>
            <div className='reposContainer'>
                {error ? (
                    <h4 className="titlePage">Repos</h4>
                ) : (
                    <h4 className="titlePage">{searchInput} Repos</h4>
                )}
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