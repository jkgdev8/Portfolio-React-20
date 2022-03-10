import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [categories] = useState([
    {
      name: 'work',
      description: 'A list of projects i stirred up!',
    }
   
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
     
      <main>
      
        {!contactSelected ? (
          <>
          <About></About>
          
          <Gallery currentCategory={currentCategory}></Gallery>
           
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
      
    </div>
    
  );
}

export default App;
