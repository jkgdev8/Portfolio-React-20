//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: 'Budget Tracker',
    image: "/img/budgettracker.jpg",
    alt:"/img/budgettracker2.jpg",
    description: "Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the Add/Subtract Funds buttons. They are able to add a transaction with or without a connection. ",
    repo: "https://github.com/jkgdev8/Progressive-Web-Applications-Budget-Tracker-19",
    live: "https://pwa-budgettrack-19.herokuapp.com/",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
