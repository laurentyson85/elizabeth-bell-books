import React from 'react';
import Header from './HeadFoot/Header';
import AuthorNote from './Home/AuthorNote';
import PurchaseNote from './Home/PurchaseNote';
import LittleDragons from './Home/LittleDragons';
import Testimonials from './Home/Testimonials';
import Events from './Home/Events';

function App() {
  return (
    <div >
      <Header />
      <AuthorNote />
      <PurchaseNote />
      <LittleDragons />
      <Testimonials />
      <Events />
    </div>
  );
}

export default App;
