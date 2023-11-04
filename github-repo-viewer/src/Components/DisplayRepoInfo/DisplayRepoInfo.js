import './DisplayRepoInfo.css';

const DisplayRepoInfo = ({ repoSelected }) => {
    
  return (
    <>
        {repoSelected ? (
            <div className="DisplayInfoContainer">
                <h4 className="titlePage">{repoSelected['name']} Repo Info</h4>
            </div>
        ) : (
            <div className="DisplayInfoContainer">
                <h4 className="titlePage">Repo Info</h4>
            </div>
        )}
    </>


  );
}

export default DisplayRepoInfo;
