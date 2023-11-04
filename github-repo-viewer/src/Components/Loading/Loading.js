import './Loading.css';
import logo from '../../static/img/github-user-viewer-logo-3.png'

const Loading = ({searchInput}) => {
  return (
    <div className="LoadingContainer">
        <img src={logo} className='loadingImage' alt="GitHub Repo View" width="800" height="auto" />
    </div>
  );
}

export default Loading;
