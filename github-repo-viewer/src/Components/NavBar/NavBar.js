import './NavBar.css';
import logo from '../../static/img/github-user-viewer-logo-2.png'

const NavBar = () => {
  return (
    <div className="NavBarContainer">
        <div class=''>
            <nav class="navbar bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div className="logoWrapper">
                            <img src={logo} alt="GitHub Repo View" width="150" height="auto" />
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default NavBar;
