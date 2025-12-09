import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import LogoCS from '../assets/Logo_CS.svg';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img src={LogoCS} alt="Ceyhun Logo" className="logo-cs" />
          <span>Ceyhun</span>
        </div>

        {/* Menu Desktop */}
        <div className="nav-right">
            <ul className="nav-menu">
              <li><button onClick={() => scrollToSection('hero')}>Accueil</button></li>
              <li><button onClick={() => scrollToSection('about')}>À propos</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Expériences</button></li>
              <li><button onClick={() => scrollToSection('formation')}>Formation</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Compétences</button></li>
              <li><button onClick={() => scrollToSection('interests')}>Centres d'intérêt</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          
          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Menu Mobile Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

          {/* Menu Mobile */}
          {isMobileMenuOpen && (
            <ul className="nav-menu-mobile">
              <li><button onClick={() => scrollToSection('hero')}>Accueil</button></li>
              <li><button onClick={() => scrollToSection('about')}>À propos</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Expériences</button></li>
              <li><button onClick={() => scrollToSection('formation')}>Formation</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Compétences</button></li>
              <li><button onClick={() => scrollToSection('interests')}>Centres d'intérêt</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li>
            <button className="theme-toggle-mobile" onClick={toggleTheme}>
              {theme === 'dark' ? <><FaSun /> Mode clair</> : <><FaMoon /> Mode sombre</>}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;

