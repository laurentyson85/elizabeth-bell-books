import React from 'react';
import AuthorNote from './AuthorNote';
import PurchaseNote from './PurchaseNote';
import LittleDragons from './LittleDragons';
import Testimonials from './Testimonials';
import Events from './Events';

function Home() {
  return (
    <div >      
      <AuthorNote />
      <PurchaseNote />
      <LittleDragons />
      <Testimonials />
      <Events />
    </div>
  );
}

export default Home;