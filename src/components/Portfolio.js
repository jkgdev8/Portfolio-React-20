//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: 'Budget Tracker',
    image: "/img/0.jpg",
    alt:"/img/00.jpg",
    description: "Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the Add/Subtract Funds buttons. They are able to add a transaction with or without a connection. ",
    repo: "https://github.com/jkgdev8/Progressive-Web-Applications-Budget-Tracker-19",
    live: "https://pwa-budgettrack-19.herokuapp.com/",
  },
  {
    id: 1,
    title: 'Subtrakd',
    image: "/img/1.jpg",
    alt:"/img/11.jpg",
    description: "A simple Calendar app that will help you keep track of your recurring subscriptions when you input your info!",
    repo: "https://github.com/jkgdev8/SUBTRAKD-Group-Project-2",
    live: "https://subtrakd.herokuapp.com/",
  },
  {
    id: 2,
    title: 'Tech Blogged',
    image: "/img/2.jpg",
    alt:"/img/22.jpg",
    description: "A CMS-style blog site so that you can publish articles, blog posts, with thoughts and opinions",
    repo: "https://github.com/jkgdev8/Tech-Blog-UCLA-Challenge-14",
    live: "https://tech-blog-ucla1.herokuapp.com/",
  },
  {
    id: 3,
    title: 'Employee Tracker',
    image: "/img/3.jpg",
    alt:"/img/33.jpg",
    description: "A CMS-style blog site so that you can publish articles, blog posts, with thoughts and opinions",
    repo: "https://github.com/jkgdev8/Employee-Tracker-UCLA-Challenge-12",
    live: "https://github.com/jkgdev8/Employee-Tracker-UCLA-Challenge-12",
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
