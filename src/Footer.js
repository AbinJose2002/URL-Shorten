function Footer(){
    return (
        <>
        <footer className="row text-white ml-0 mr-0 py-3">
    <div className="footer-sec footer-sec1 col-lg-4 col-sm-12 px-lg-5 py-lg-5 px-sm-0 py-sm-0">
      <h1 className="text-center py-sm-5 py-lg-0">Shortly</h1>
    </div>
    <div className="footer-sec footer-sec2 col-lg-4 col-sm-12 py-4">
      <div className="footer-link-sec row py-3">
        <div className="feature-list col-sm-12 col-lg-4 text-sm-center text-lg-left">
          <ul className="list-type-none">
            <li className="font-weight-bold pb-3">Features</li>
            <li><a href="/">Link Shortening</a></li>
            <li><a href="/">Branded Links</a></li>
            <li><a href="/">Analytics</a></li>
          </ul>
        </div>
        <div className="resources  col-sm-12 col-lg-4 text-sm-center text-lg-left">
          <ul>
            <li className="font-weight-bold pb-3">Resources</li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Developers</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
        <div className="company-list  col-sm-12 col-lg-4 text-sm-center text-lg-left">
          <ul>
            <li className="font-weight-bold pb-3">Comapny</li>
            <li><a href="/">About</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-sec footer-sec3 col-lg-4 col-sm-12 text-center py-5">
      <img src="assets/icon-facebook.svg" alt="/"/>
      <img src="assets/icon-instagram.svg" alt="/"/>
      <img src="assets/icon-pinterest.svg" alt="/"/>
      <img src="assets/icon-twitter.svg" alt="/"/>
    </div>
  </footer>
        </>
    );
}

export default Footer;