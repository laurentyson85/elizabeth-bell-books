import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './HeadFoot/Header';
import Home from './Home/Home';
import Footer from './HeadFoot/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Bookstore from './Bookstore/Bookstore';

function App() {
  return (
    <div >
      <Header />
      <Routes basename="/elizabeth-bell-books">      
        <Route 
          path="gallery" 
          element={<Gallery />}
        />
        <Route 
          path="bookstore" 
          element={<Bookstore />}
        />
        <Route 
          path="about" 
          element={<About/>}
        />
        <Route 
          path="contact" 
          element={<Contact />}
        />
        <Route 
          path="/*" 
          element={<Home />}
        />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
