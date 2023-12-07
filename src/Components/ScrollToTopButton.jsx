// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './CSS/ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Gérer l'affichage du bouton en fonction de la position de défilement
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un écouteur d'événements pour le défilement
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Up
    </button>
  );
}

export default ScrollToTopButton;
