import './DisplayOrgs.css';

const DisplayOrgs = ({searchInput}) => {
  return (
    <div className="DisplayOrgsContainer">
        <h4 className="titlePage">{searchInput} Organizations</h4>
    </div>
  );
}

export default DisplayOrgs;
