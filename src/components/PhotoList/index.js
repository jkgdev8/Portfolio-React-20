import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'work',
      description:
        'Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the "Add/Subtract Funds" buttons. They are able to add a transaction with or without a connection. ',
      link:"https://pwa-budgettrack-19.herokuapp.com/"  
    },
    {
      name: 'Subtrakd',
      category: 'work',
      description:
        'A simple Calendar app that will help you keep track of your recurring subscriptions when you input your info!',
      link:"https://subtrakd.herokuapp.com/"  
    },
    {
      name: 'Tech Blogged',
      category: 'work',
      description:
        'A CMS-style blog site so that you can publish articles, blog posts, with thoughts and opinions',
      link:"https://tech-blog-ucla1.herokuapp.com/"  
    },
    {
      name: 'Tech Blogged',
      category: 'work',
      description:
        'A CMS-style blog site so that you can publish articles, blog posts, with thoughts and opinions',
      link:"https://tech-blog-ucla1.herokuapp.com/"  
    },
    {
      name: 'Tech Blogged',
      category: 'work',
      description:
        'A CMS-style blog site so that you can publish articles, blog posts, with thoughts and opinions',
      link:"https://tech-blog-ucla1.herokuapp.com/"  
    }
    
    
    
  
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
