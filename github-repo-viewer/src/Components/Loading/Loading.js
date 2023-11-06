import './Loading.css';
import logo from '../../static/img/github-user-viewer-logo-3.png'

const Loading = () => {
  return (
    <div className="LoadingContainer">
        <img src={logo} className='loadingImage' alt="GitHub Repo View Logo" width="800" height="auto" />
    </div>
  );
}

export default Loading;
