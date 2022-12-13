import React from 'react';
// import img from '.././../public/images/profilepic.jpg'
function About() {
   return (
      <div id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               My name is Nagendra, I am from jhunjhunu, Rajasthan. Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai school. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Nagendra Choudhary</span>
                     <br></br>
       						   <span>
                    Jhunjhunu(Rajasthan)
                    </span>
                    <br></br>
                    <span>
                    India
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;