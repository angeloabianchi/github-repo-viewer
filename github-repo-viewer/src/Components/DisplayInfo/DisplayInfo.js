import './DisplayInfo.css';

const DisplayInfo = ({searchInput}) => {
  return (
    <div className="DisplayInfoContainer">
        <h4 className="titlePage">{searchInput} Info</h4>
    </div>
  );
}

export default DisplayInfo;
