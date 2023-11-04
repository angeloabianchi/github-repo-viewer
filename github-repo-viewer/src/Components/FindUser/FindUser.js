import React, { useState } from 'react';
import './FindUser.css';

const FindUser = ({ setSearchInput, setRepoSelected }) => {

    const [input, setInput] = useState();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }
    
    const sendInput = (event) => {
        event.preventDefault();
        setRepoSelected();
        setSearchInput(input);
    }

  return (
    <div className="FindUserContainer">
        <h4 for="user" className="titlePage">Search Users on Github</h4>
        <div class='container h-100'>
            <form onSubmit={sendInput} className='form'>
                <input type="text" onChange={handleInputChange} class="form-control" id="userInput" aria-describedby="user" placeholder="Type a github username" />
                <button type="submit" class="btn btn-submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default FindUser;
