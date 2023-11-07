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
            setData(getData.result);
            setIsLoading(false);
        }, 1000);
    }
}, [searchInput]);

  return (
    <div className="DisplayInfoContainer">
      {isLoading ? (
        <Loading />
      ) : (
        <div className='infoContainer'>
          {error || !data ? (
            <h4 className="titlePage">Info</h4>
          ) : (
              <div class='d-flex flex-column h-100'>
                <h4 className="titlePage">{searchInput}'s Github ID</h4>
                <div class='row h-100 idContainer'>
                  <div class='row align-items-center mt-3'>
                    <div className='col-6 d-flex flex-column align-items-center'>
                      <p class='row-lg-3 justify-content-end name'>{data.name}</p>
                      <p class='row-lg-9'>{data.location}</p>
                      <a href={data.html_url} target='_blank' class='btn text-uppercase row-2'>Profile</a>
                    </div>
                    <div className='col-lg-6 col-sm-4 col'>
                      <div class='row'><img src={data.avatar_url} width='130px' alt='avatar' /></div>
                      <div class='row mt-1'>
                        <div class='col'>{data.public_repos} repos</div>
                        <div class='col'>{data.followers} followers</div>
                      </div>
                    </div>
                  </div>
                  <div class='row bio'>
                    <p>{data.bio}</p>
                  </div>
                  <div class='row'>
                    <p class='col dates'>Last seen: {data.updated_at}</p>
                    <p class='col dates created'>Member since {data.created_at}</p>
                  </div>
                </div>



              </div>

          )}
        </div>
      )}
    </div>
  );
}

export default DisplayInfo;


/* 

name                         avatar_url
location                public_repos followers
html_url
email

bio


updated_at                created_at

*/