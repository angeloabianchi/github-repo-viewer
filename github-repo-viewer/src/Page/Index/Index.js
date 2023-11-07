import React, {useState} from "react";
import './Index.css'
import FindUser from '../../Components/FindUser/FindUser';
import DisplayRepos from '../../Components/DisplayRepos/DisplayRepos';
import DisplayInfo from '../../Components/DisplayInfo/DisplayInfo';
import DisplayOrgs from '../../Components/DisplayOrgs/DisplayOrgs';
import DisplayRepoInfo from '../../Components/DisplayRepoInfo/DisplayRepoInfo';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import logo from '../../static/img/github-user-viewer-logo-2.png'

const Index = () => {

    const [searchInput, setSearchInput] = useState('');
    const [animationStart, setAnimationStart] = useState(true);
    const [repoSelected, setRepoSelected] = useState();
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null); 
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [initialState, setInitialState] = useState(true);



    setTimeout( () => {
        setAnimationStart(false);
      }, 1500);
    

    return(
        <div class="IndexContainer bg-black">
            {animationStart ? (
          <div class="logo"><img src={logo} className='backgroundLogo logoAnimation' alt="GitHub Repo View" /></div>
            ) : (
            <>

                <div className="index bg-black">
                    <div class="logo"><img src={logo} className='backgroundLogo' alt="GitHub Repo View" /></div>
                    <div class="row layout">
                        <div class={initialState ? 'col-lg-3 col-md-5 Components displayInfo hide' : 'col-lg-3 col-md-5 Components displayInfo show'}>
                            <DisplayInfo searchInput={searchInput} error={error} />
                        </div>

                        <div class='col-lg-5 col-md-12 d-flex findUser'>
                            <div class='col search show'>
                                <FindUser setSearchInput={setSearchInput} setRepoSelected={setRepoSelected} setPage={setPage}/>
                            </div>
                        </div>

                        <div class={initialState ? 'col-lg-3 col-md-5 Components displayRight hide' : 'col-lg-3 col-md-5 Components displayRight show'}>
                            <DisplayOrgs searchInput={searchInput} error={error} />
                        </div>

                        <div class={initialState ? 'col-lg-11 col-md-9 Components displayRepos hide' : 'col-lg-11 col-md-11 Components displayRepos show'}>
                            <DisplayRepos searchInput={searchInput} setRepoSelected={setRepoSelected} error={error} setError={setError} setShowErrorModal={setShowErrorModal} setInitialState={setInitialState} page={page} setPage={setPage}/>
                            
                        </div>

                        {/* <div class={initialState ? 'col-lg-4 col-md-3 Components displayRight hide' : 'col-lg-4 col-md-3 Components displayRight show'}>
                            <DisplayRepoInfo repoSelected={repoSelected} />
                        </div> */}

                        <ErrorModal error={error} showErrorModal={showErrorModal} setShowErrorModal={setShowErrorModal}/>
                
                    </div>
                </div>
                
            </>
            )}
        </div>
    );
}

export default Index;