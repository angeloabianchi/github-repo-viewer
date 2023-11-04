import './App.css';
import React, {useEffect, useState} from 'react';
import FindUser from './Components/FindUser/FindUser';
import DisplayRepos from './Components/DisplayRepos/DisplayRepos';
import DisplayInfo from './Components/DisplayInfo/DisplayInfo';
import DisplayOrgs from './Components/DisplayOrgs/DisplayOrgs';
import DisplayRepoInfo from './Components/DisplayRepoInfo/DisplayRepoInfo';
import ErrorModal from './Components/ErrorModal/ErrorModal';
import logo from './static/img/github-user-viewer-logo-2.png'

const App = () => {

  const [searchInput, setSearchInput] = useState('');
  const [animationStart, setAnimationStart] = useState(true);
  const [repoSelected, setRepoSelected] = useState();
  const [error, setError] = useState(null); 
  const [showErrorModal, setShowErrorModal] = useState(false);


  

  useEffect(() => {
      setTimeout( () => {
          setAnimationStart(false);
      }, 1500);
}, [])

  
  return (
    <div className="App bg-black">
      <header className="App-header">
        {/* <NavBar /> */}
      </header>
      <div className='bg-black'>
        {animationStart ? (
          <div class="logo"><img src={logo} className='backgroundLogo logoAnimation' alt="GitHub Repo View" width="800" height="auto" /></div>
        ) : (
          <>
            <div class="logo"><img src={logo} className='backgroundLogo' alt="GitHub Repo View" width="500" height="auto" /></div>
            <div class="row App-Content">
              <div class='col-3 p-0'>
                  <div class="col double">
                    <FindUser setSearchInput={setSearchInput} setRepoSelected={setRepoSelected}/>
                  </div>
                  <div class="col double">
                    <DisplayOrgs searchInput={searchInput} error={error} />
                  </div>
              </div>
              <div class='col-5 Components'>
                <DisplayInfo searchInput={searchInput} error={error} />
              </div>
              <div class='col-3 Components'>
                  
              </div>
              <div class='col-7 Components'>
                <DisplayRepos searchInput={searchInput} setRepoSelected={setRepoSelected} error={error} setError={setError} setShowErrorModal={setShowErrorModal}/>
                
              </div>
              <div class='col-4 Components'>
                <DisplayRepoInfo repoSelected={repoSelected} />
              </div>
              <ErrorModal error={error} showErrorModal={showErrorModal} setShowErrorModal={setShowErrorModal}/>
              
            </div>

          </>

        )}

      </div>
      
    </div>
  );
}

export default App;
