import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Développeur",
      company: "Steelcase",
      period: "Stage",
      date: "Février - Avril 2025",
      location: "Strasbourg, France",
      description:
        "Création d'une application en C# pour mettre à jour des données Access. Automatisation du transfert et de la synchronisation des données entre deux bases Access pour optimiser la gestion des informations. Application des bonnes pratiques en développement logiciel dans un environnement professionnel.",
      icon: <FaBriefcase />,
    },
    {
      id: 2,
      role: "Développeur",
      company: "Steelcase",
      period: "Stage",
      date: "Juin - Juillet 2024",
      location: "Strasbourg, France",
      description:
        "Création d'une API en C# pour gérer et exploiter les données produits. Extraction et traitement d'une liste de produits à partir d'un fichier Excel. Expérience pratique en entreprise sur un projet concret de développement.",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <p className="section-subtitle">PARCOURS</p>
          <h2 className="experience-title">
            <span className="title-start">Expérience</span>
            <span className="title-end">Professionnelle</span>
          </h2>
          <p className="section-description">
            Mon expérience professionnelle dans le domaine du développement
            informatique.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <div className="experience-details">
                  <span className="experience-detail">
                    <FaCalendarAlt /> {exp.date}
                  </span>
                  <span className="experience-detail">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
