import { useState } from 'react';
import './Skills.css';

// Import des logos sans background
import HtmlCssLogo from '../assets/Logo dev/sans_bg/Html-Css_Logo-removebg-preview.png';
import JavaScriptLogo from '../assets/Logo dev/sans_bg/JavaScript_Logo.png';
import ReactLogo from '../assets/Logo dev/sans_bg/React_Logo-removebg-preview.png';
import NodeLogo from '../assets/Logo dev/sans_bg/Node_Logo-removebg-preview.png';
import PythonLogo from '../assets/Logo dev/sans_bg/Python_Logo-removebg-preview.png';
import GitLogo from '../assets/Logo dev/sans_bg/Git_Logo-removebg-preview.png';
import PhpLogo from '../assets/Logo dev/sans_bg/Php_Logo-removebg-preview.png';
import JavaLogo from '../assets/Logo dev/sans_bg/Java_Logo-removebg-preview.png';
import CsharpLogo from '../assets/Logo dev/sans_bg/Csharp_Logo-removebg-preview.png';
import MySqlLogo from '../assets/Logo dev/sans_bg/MySql_Logo-removebg-preview.png';
import PostgreSqlLogo from '../assets/Logo dev/sans_bg/PostgreSql_Logo-removebg-preview.png';
import ViteLogo from '../assets/Logo dev/sans_bg/Vite_Logo-removebg-preview.png';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills = [
    { 
      name: 'HTML/CSS', 
      category: 'Développement Web', 
      level: 90,
      logo: HtmlCssLogo
    },
    { 
      name: 'JavaScript', 
      category: 'Langages de Programmation', 
      level: 85,
      logo: JavaScriptLogo
    },
    { 
      name: 'React', 
      category: 'Développement Web', 
      level: 80,
      logo: ReactLogo
    },
    { 
      name: 'Node.js', 
      category: 'Développement Web', 
      level: 75,
      logo: NodeLogo
    },
    { 
      name: 'Python', 
      category: 'Langages de Programmation', 
      level: 70,
      logo: PythonLogo
    },
    { 
      name: 'PHP', 
      category: 'Langages de Programmation', 
      level: 75,
      logo: PhpLogo
    },
    { 
      name: 'Java', 
      category: 'Langages de Programmation', 
      level: 70,
      logo: JavaLogo
    },
    { 
      name: 'C#', 
      category: 'Langages de Programmation', 
      level: 65,
      logo: CsharpLogo
    },
    { 
      name: 'Git', 
      category: 'Outils', 
      level: 85,
      logo: GitLogo
    },
    { 
      name: 'MySQL', 
      category: 'Bases de Données', 
      level: 80,
      logo: MySqlLogo
    },
    { 
      name: 'PostgreSQL', 
      category: 'Bases de Données', 
      level: 75,
      logo: PostgreSqlLogo
    },
    { 
      name: 'Vite', 
      category: 'Outils', 
      level: 70,
      logo: ViteLogo
    },
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <p className="section-subtitle">COMPÉTENCES</p>
          <h2 className="section-title">Compétences Techniques</h2>
          <p className="section-description">
            Mon parcours à travers divers langages de programmation, outils et technologies m'a fourni un ensemble de compétences polyvalentes.
          </p>
        </div>

        <div className="skills-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category !== 'All' && <span className="filter-icon">&lt;/&gt;</span>}
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-icon">
                <img src={skill.logo} alt={skill.name} />
              </div>
              <div className="skill-card-content">
                <h3 className="skill-card-name">{skill.name}</h3>
                <p className="skill-card-category">{skill.category}</p>
                <div className="skill-card-mastery">
                  <span className="mastery-label">Maîtrise</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
