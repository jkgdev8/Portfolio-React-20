// titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import React from "react";


function Project(props) {
  return (
    <div>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <p>
                  <img src={process.env.PUBLIC_URL + project.image} alt={"Placeholder image"} onMouseOver={e => e.currentTarget.src = project.alt} onMouseOut={e => e.currentTarget.src = project.image} />
                  </p>
                  
                  
                </figure>
                
                <div className="card-content">
                <div className="media">
                </div>

                
            </div>
            <div className="buttonme">{project.description} </div>
                  <a href={project.repo}> <button className="btn-gradient cyan mini" target="_blank" rel="noreferrer"> Repo</button> </a>
                  <a href={project.live}> <button className="btn-gradient orange mini"target="_blank" rel="noreferrer"> Site </button> </a> 
              </div>
                  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
