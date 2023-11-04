import React, { useEffect, useState } from 'react';
import './FindUser.css';
import { fetchData } from '../FetchData/FetchData';

const FindUser = ({ searchInput, setSearchInput }) => {

    const [input, setInput] = useState();
/*     const [data, setData] = useState();
    const [page, setPage] = useState(1); */

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }
    
    const sendInput = (event) => {
        event.preventDefault();
        setSearchInput(input);
    }


/*     useEffect(() => {
        setData('');

        if(searchInput) {
            setTimeout( async () => {
                const getData = await (fetchData('user', searchInput, page));
                setData(getData);
            }, 1000);
        }

        

    }, [searchInput]) */

    /* console.log(data.login); */

  return (
    <div className="FindUserContainer">
        <div class='container'>
            <form onSubmit={sendInput} className='form'>
                <div class="mb-3 top">
                    <h1 for="user" className="titlePage">Find a GitHub user info</h1>
                    <input type="text" onChange={handleInputChange} class="form-control" id="userInput" aria-describedby="user" placeholder="Type a github username" />
                </div>
                <button type="submit" class="btn btn-submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default FindUser;
