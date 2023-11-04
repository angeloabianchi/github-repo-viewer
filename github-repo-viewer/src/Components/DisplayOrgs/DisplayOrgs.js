import './DisplayOrgs.css';

const DisplayOrgs = ({searchInput, error}) => {
  return (
    <div className="DisplayOrgsContainer">
      {error ? (
            <h4 className="titlePage">Organizations</h4>
          ) : (
            <h4 className="titlePage">{searchInput} Organizations</h4>
          )}
        
    </div>
  );
}

export default DisplayOrgs;
