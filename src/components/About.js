import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import photome from '../assets/photome/profile.jpg';

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + photome} alt="Julienne Garcia"/>
      <p className="content is-italic mt-4">
        Im Julienne, an entry full stack developer that cant wait to dominate the tech game. 
      </p>
      <p className="content">
        I love to work and collaborate with talented people that brings that best ideas and thoughts out of you to create a new game
        something magnificent and unforgettable. 
      </p>
    </div>
  );
}

export default About;
