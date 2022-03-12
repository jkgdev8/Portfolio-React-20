//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Check out my socials!</strong> 
          
          <hr />
          <a href="https://github.com/jkgdev8" target="_blank" rel="noreferrer">
            Github
          </a>
          {" "}
          |{" "}{" "}
          
          <a
            href="https://www.linkedin.com/in/juliennegarcia/"
            target="_blank" rel="noreferrer"
          >
            LinkdIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
