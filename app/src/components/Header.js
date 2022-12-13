import React from 'react';

function Header() {
  return (
    <div id="home">
      <header >
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am Nagendra Choudhary</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                I am a Full Stack Web Developer and i have knowledge in HTML, CSS, JS, REACT and i make user-friendly websites..
               </h3>
               <hr/>
               <ul className="social">
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
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </div>
  );
}

export default Header;