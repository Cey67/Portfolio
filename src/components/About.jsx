import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import photo from '../assets/photo.jpg';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('profil');
  const [showInfo, setShowInfo] = useState(false);

  const skills = {
    'Langages de programmation': ['JavaScript', 'Python', 'PHP', 'Java', 'C#', 'HTML/CSS'],
    'Frameworks & Librairies': ['React', 'Node.js', 'Vite'],
    'Bases de Données': ['MySQL', 'PostgreSQL'],
    'Autres compétences': ['Git', 'Agile/Scrum']
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <p className="section-subtitle">À PROPOS</p>
          <h2 className="section-title">Qui suis-je?</h2>
          <p className="section-description">
            Découvrez mon parcours, mes compétences et ce qui me passionne dans le monde du développement.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-main-layout">
            {/* Photo avec effet hover */}
            <div 
              className="about-photo-container"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <img 
                src={photo} 
                alt="Ceyhun SAPMAZ" 
                className="about-photo"
                loading="lazy"
                decoding="async"
              />
              {showInfo && (
                <div className="photo-overlay">
                  <div className="photo-info">
                    <div className="photo-name-role">
                      <h3 className="photo-name">Ceyhun SAPMAZ</h3>
                      <p className="photo-role">Développeur Junior</p>
                    </div>
                    <div className="photo-details-grid">
                      <div className="photo-detail-card">
                        <span className="photo-detail-label">Âge</span>
                        <span className="photo-detail-value">21 ans</span>
                      </div>
                      <div className="photo-detail-card">
                        <span className="photo-detail-label">Localisation</span>
                        <span className="photo-detail-value">Strasbourg</span>
                      </div>
                      <div className="photo-detail-card">
                        <span className="photo-detail-label">Disponibilité</span>
                        <span className="photo-detail-value">Recherche alternance</span>
                      </div>
                      <div className="photo-detail-card">
                        <span className="photo-detail-label">Langues</span>
                        <span className="photo-detail-value">FR / TR</span>
                      </div>
                    </div>
                    <div className="photo-social-icons">
                      <a href="https://github.com/Cey67" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                      </a>
                      <a href="https://www.linkedin.com/in/ceyhun-sapmaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section avec onglets */}
            <div className="about-tabs-container">
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeTab === 'profil' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profil')}
                >
                  Mon Profil
                </button>
                <button
                  className={`tab-btn ${activeTab === 'competences' ? 'active' : ''}`}
                  onClick={() => setActiveTab('competences')}
                >
                  Compétences Clés
                </button>
              </div>

              <div className="tabs-content">
                {activeTab === 'profil' && (
                  <div className="tab-panel">
                    <h3 className="panel-title">Ceyhun SAPMAZ</h3>
                    <p className="panel-subtitle">Développeur Junior</p>
                    
                    <p className="panel-description">
                      Je maîtrise un éventail de technologies et d'outils pour le développement 
                      et l'opération de solutions logicielles modernes. Passionné par la création 
                      d'applications web performantes, je combine créativité et rigueur technique 
                      pour développer des projets innovants.
                    </p>
                    <p className="panel-description">
                      Curieux et toujours à l'affût des dernières tendances technologiques, 
                      j'apprécie particulièrement le développement front-end avec React et 
                      l'optimisation des performances. Mon objectif est de créer des expériences 
                      utilisateur fluides et intuitives tout en respectant les bonnes pratiques 
                      de développement et les standards de qualité.
                    </p>
                  </div>
                )}

                {activeTab === 'competences' && (
                  <div className="tab-panel">
                    <div className="skills-categories">
                      {Object.entries(skills).map(([category, items]) => {
                        const categoryClass = category.toLowerCase()
                          .replace(/é/g, 'e')
                          .replace(/è/g, 'e')
                          .replace(/ê/g, 'e')
                          .replace(/à/g, 'a')
                          .replace(/[^a-z0-9]/g, '-')
                          .replace(/-+/g, '-')
                          .replace(/^-|-$/g, '');
                        
                        return (
                          <div key={category} className="skill-category">
                            <h4 className="category-title">{category}</h4>
                            <div className="skills-tags">
                              {items.map((skill, index) => (
                                <span 
                                  key={index}
                                  className={`skill-tag skill-tag-${categoryClass}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
