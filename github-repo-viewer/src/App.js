import './App.css';
import React, {useEffect, useState} from 'react';
import FindUser from './Components/FindUser/FindUser';
import DisplayRepos from './Components/DisplayRepos/DisplayRepos';
import DisplayInfo from './Components/DisplayInfo/DisplayInfo';
import DisplayOrgs from './Components/DisplayOrgs/DisplayOrgs';
import DisplayRepoInfo from './Components/DisplayRepoInfo/DisplayRepoInfo';
import logo from './static/img/github-user-viewer-logo-2.png'

const App = () => {

  const [searchInput, setSearchInput] = useState('');
  const [animationStart, setAnimationStart] = useState(true);
  const [repoSelected, setRepoSelected] = useState();

  useEffect(() => {
      setTimeout( () => {
          setAnimationStart(false);
      }, 1500);
}, [])

console.log(repoSelected);
  
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
                    <FindUser searchInput={searchInput} setSearchInput={setSearchInput}/>
                  </div>
                  <div class="col double">
                    <DisplayOrgs searchInput={searchInput} />
                  </div>
              </div>
              <div class='col-5 Components'>
                <DisplayInfo searchInput={searchInput} />
              </div>
              <div class='col-3 Components'>
                  
              </div>
              <div class='col-7 Components'>
                <DisplayRepos searchInput={searchInput} setRepoSelected={setRepoSelected}/>
                
              </div>
              <div class='col-4 Components'>
                <DisplayRepoInfo repoSelected={repoSelected} />
              </div>
              
            </div>
          </>

        )}

      </div>
      
    </div>
  );
}

export default App;
