import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import photome from './profile.jpg';

function About() {
  console.log(photome)
  return (
    
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={photome} alt="Julienne Garcia" />
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
