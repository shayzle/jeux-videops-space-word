
import { Link } from 'react-router-dom';
import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
import star_wars_white_small from "../assets/star_wars_white_small.jpg"

function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline mt-6">JeuxVideOPS by R&S</h1>
        <p>Bienvenue sur notre site de jeu</p>
        <br></br>
        <nav>
          <Link to="/twoships">Two Ships Passing In The Night</Link>
        </nav>
        <nav>
          <Link to="/spacewords">Spacewords</Link>
        </nav>
      </div>
      <div className="w-100 h-100 mt-52">
        <img src={star_wars_white_small}></img>
      </div>
    </div>
  );
}

export default Home;