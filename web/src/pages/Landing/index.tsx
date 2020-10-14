import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './landing.css';
import '../../styles/global.css';

import LogoImg from '../../assets/Logo.svg';

function Landing () {
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={LogoImg} alt="Happy"/>
  
          <main>
            <h1>Leve felicidade para o mundo</h1>
  
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>
  
          <div className="location">
            <strong>Portão</strong>
            <span>Rio Grande do Sul</span>
          </div>
           
          <Link to="/orphanages" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </div>
      </div>
    );
}

export default Landing;