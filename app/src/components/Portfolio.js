import { Image, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
function Portfolio() {
  return (
    <div id="portfolio" >
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper">
            <Box id="portfolio-wrapper"display={['block','flex']}>


              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <Image src="images/project1.png" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SWIGGY</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <h1>SWIGGY CLONE</h1>
                <h3>A collaborative project, built in 5 days by a team of 4 developers.</h3>
                Tack stack:- <Text>JS,HTML,CSS</Text>
                <Box >
                  <ul className="social-links">
                    <li>
                      <a href={'https://teal-smakager-17bbf3.netlify.app'}>
                        Live
                      </a>
                    </li>
                    <li>
                      <a href={'https://github.com/nagendrachoudhary/swiggy'}>
                        <i className={"fa fa-github"} />
                      </a>
                    </li>
                  </ul>
                </Box>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <Image src="images/project2.jpg" />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>LARQ</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <h1>LARQ CLONE</h1>
                <h3>A collaborative project, built in 7 days by a team of 4 developers.</h3>
                Tack stack:- <Text>JS,HTML,CSS,json server</Text>
                <Box >
                  <ul className="social-links">
                    <li>
                      <a href={'https://flourishing-maamoul-937bb2.netlify.app/'}>
                        Live
                      </a>
                    </li>
                    <li>
                      <a href={'https://github.com/UttamMehta/LARQ'}>
                        <i className={"fa fa-github"} />
                      </a>
                    </li>
                  </ul>
                </Box>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <Image src="images/project3.jpg" />

                    <div className="overlay">
                      <h5 style={{ color: 'White' }}>Bohemiantraders</h5>
                      <div className="portfolio-item-meta">
                        <h5></h5>
                      </div>
                    </div>
                  </a>
                </div>
                <h1>Bohemiantraders Clone</h1>
                <h3>A collaborative project, built in 5 days by a team of 4 developers.</h3>
                Tack stack:- <Text>JS,HTML,CSS,redux,react,json server</Text>
                <Box >
                  <ul className="social-links">
                    <li>
                      <a href={'https://bohemian-clone-team9.netlify.app/'}>
                        Live
                      </a>
                    </li>
                    <li>
                      <a href={'https://github.com/krishnachaturvedi1901/Bohemiantraders-website-clone'}>
                        <i className={"fa fa-github"} />
                      </a>
                    </li>
                  </ul>
                </Box>
              </div>



            </Box>
            <h1 style={{ fontSize: '48px', color: 'black', height: '50px' }}>DAYS I WORKED</h1>
            
              <img  style={{borderRadius: '55px 0px' }} src="images/github.jpg" />
              <h3>200+ contributions in 2022</h3>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;