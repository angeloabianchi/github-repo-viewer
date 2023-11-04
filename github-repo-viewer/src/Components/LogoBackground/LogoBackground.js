import './LogoBackground.css';
import logo from '../../static/img/github-user-viewer-logo-2.png'

const LogoBackground = ({start, setStart}) => {

    const showContentButton = () => {
        if(start) {
            setStart(false);
        } else {
            setStart(true);
        }
    }

  return (
    <div className="LogoBackgroundContainer">
        <div class="bg-transparent">
            <div class="container justify-content-center">
                <div className="logoWrapper">
                    <button onClick={showContentButton}><img src={logo} alt="GitHub Repo View" width="150" height="auto" /></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LogoBackground;
