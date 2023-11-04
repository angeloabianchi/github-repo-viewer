import './App.css';
import React, {useState} from 'react';
import FindUser from './Components/FindUser/FindUser';
import NavBar from './Components/NavBar/NavBar';
import DisplayRepos from './Components/DisplayRepos/DisplayRepos';

const App = () => {

  const [searchInput, setSearchInput] = useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-Content">
        <div className='Components'>
          <FindUser searchInput={searchInput} setSearchInput={setSearchInput}/>
        </div>
        <div className='Components'>
          <DisplayRepos searchInput={searchInput} />
        </div>
        <div className='Components'>
          {/* <DisplayOrgs searchInput={searchInput} /> */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
