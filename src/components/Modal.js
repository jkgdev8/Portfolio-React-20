import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        /><a href= {link} >Visit Web Page</a>
        <p>{description}</p>
        {/* <a>{link}</a> */}
        

        <button type="button" onClick={onClose}>
          Close 
        </button>
      </div>
    </div>
  );
};

export default Modal;
