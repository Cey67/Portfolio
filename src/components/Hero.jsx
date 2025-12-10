import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import photo from '../assets/photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <p className="hero-label">DÉVELOPPEUR JUNIOR</p>
          <h1 className="hero-name">
            Bonjour, Je suis<br />
            <span>Ceyhun</span>
          </h1>
          <p className="hero-description">
            Passionné par les technologies modernes, je développe des<br />
            solutions <span className="highlight-text">innovantes</span> et <span className="highlight-text">robustes</span> pour le web.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              En savoir plus
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Cey67" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ceyhun-sapmaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:ceyhuns2004@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="hero-photo-container">
            <img 
              src={photo} 
              alt="Ceyhun" 
              className="hero-photo"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

