import React, { useEffect, useState } from 'react';
import './DisplayInfo.css';
import Loading from '../Loading/Loading';
import { fetchData } from '../FetchData/FetchData';

const DisplayInfo = ({searchInput, error}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData('');

    if(searchInput) {
        setIsLoading(true);
        setTimeout( async () => {
            const getData = await (fetchData('user', searchInput));
            setData(getData);
            setIsLoading(false);
        }, 1000);
    }
}, [searchInput]);

console.log(data)


  return (
    <div className="DisplayInfoContainer">
      {isLoading ? (
        <Loading />
      ) : (
        <div className='infoContainer'>
          {error ? (
            <h4 className="titlePage">Info</h4>
          ) : (
            <h4 className="titlePage">{searchInput} Info</h4>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayInfo;
