import React, { useEffect, useState } from 'react';
import './DisplayRepos.css';
import { fetchData } from '../FetchData/FetchData';
import Loading from '../Loading/Loading';

const DisplayRepos = ({ searchInput, setRepoSelected, error, setError, setShowErrorModal, setInitialState, page, setPage }) => {

    const [data, setData] = useState();
    const [maxPage, setMaxPage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [previousDisabled, setPreviousDisabled] = useState(false);
    

    const handleShowErrorModal = () => {
        setShowErrorModal(true);
    };

    const selectRepo = (repo) => {
        setRepoSelected(repo);
    }

    const nextPage = (page) => {
        if (page < maxPage) {
            setPage(page + 1);
        }
    }

    const previousPage = (page) => {
        if (page > 1) {
            setPage(page - 1);
        }
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
                        setData(getData.result);
                        setInitialState(false);
                        setMaxPage(getData.lastPageNumber);
                    }
                    setIsLoading(false);
                } catch (err) {
                    console.error(err);
                }
                
            }, 1000);
        }

        setNextDisabled(page === maxPage || maxPage === null);
        setPreviousDisabled(page === 1);

    }, [searchInput, page, maxPage]);


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
                    <div class="row-lg-2 repoList">
                        {data && data.map((repo) => (
                            <div class='col'>
                                <div onClick={() => selectRepo(repo)} class='btn-repo mb-2'>
                                    <div class="card">
                                        <div class="card-header">
                                            {repo.name}
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{repo.description}</p>
                                                <footer class="blockquote-footer">
                                                    <a href={repo.html_url} target='_blank' rel="noreferrer">
                                                        <cite title="Source Title">Link </cite>
                                                    </a>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={() => previousPage(page)} disabled={previousDisabled} className="btn m-2">
                                    Previous
                        </button>
                        <button onClick={() => nextPage(page)} disabled={nextDisabled} className="btn m-2">
                                    Next
                        </button>
                    </div>
                </div>
            </div>
            </>
        )}
    </div>
  );
}

export default DisplayRepos;