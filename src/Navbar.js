import ham from './someAssets/more.png';
import logo from './someAssets/logo.svg';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-2 pb-2 py-3 py-sm-5">
        <div className="container">
          <img src={logo} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <img src={ham} alt="" height="30" width="30" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav d-flex justify-content-end mx-auto px-lg-3 py-sm-5 py-lg-0">
              <li className="nav-item py-3 px-sm-0 px-lg-3">
                <a href="/" className="nav-link text-dark">Features</a>
              </li>
              <li className="nav-item py-3 px-sm-0 px-lg-3">
                <a href="/" className="nav-link text-dark">Price</a>
              </li>
              <li className="nav-item py-3 px-sm-0 px-lg-3">
                <a href="/" className="nav-link text-dark">Resources</a>
              </li>
              <li className="nav-item py-3 px-sm-0 px-lg-3">
                <a href="/" className="nav-link text-dark">Login</a>
              </li>
              <li className="nav-item py-3 px-sm-0 px-lg-3">
                <button className="btn text-white bg-success">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
