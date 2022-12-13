import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href={'https://www.linkedin.com/in/nagendra-choudhary/'}>
                  <i className={"fa fa-linkedin"} />
                </a>
              </li>
              <li>
                <a href={'https://github.com/nagendrachoudhary'}>
                  <i className={"fa fa-github"} />
                </a>
              </li>
              <li>
                <a href={'https://twitter.com/NarenDangi_'}>
                  <i className={"fa fa-twitter"} />
                </a>
              </li>
              <li>
                <a href={'7230965443'}>
                  <i className={"fa fa-phone"} />
                </a>
              </li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;