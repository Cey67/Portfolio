import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";
import "./Formation.css";

const Formation = () => {
  const formations = [
    {
      id: 1,
      title: "BACHELOR CONCEPTEUR DÉVELOPPEUR D'APPLICATIONS (CDA)",
      institution: "CCI Campus",
      location: "Strasbourg, France",
      date: "2024 - Actuellement",
      document: "",
      description:
        "Formation de niveau Bac+3 spécialisée dans la conception et le développement d'applications. Actuellement en cours.",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      title: "BTS SIO OPTION DÉVELOPPEMENT (SLAM)",
      institution: "Lycée Camille Sée",
      location: "Colmar, France",
      date: "2023 - 2025",
      document: "",
      description:
        "BTS obtenu. Formation spécialisée en développement informatique et maintenance d'applications.",
      icon: <FaGraduationCap />,
    },
    {
      id: 3,
      title: "BACCALAURÉAT GÉNÉRAL OPTION MATHS/PHYSIQUE",
      institution: "Lycée Jean Rostand",
      location: "Strasbourg, France",
      date: "2019 - 2023",
      document: "",
      description:
        "Baccalauréat obtenu. Spécialités : Mathématiques et Physique-Chimie.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="formation" className="formation">
      <div className="container">
        <div className="formation-header">
          <p className="section-subtitle">FORMATIONS</p>
          <h2 className="section-title">Formation</h2>
          <p className="section-description">
            Mon parcours académique et mes qualifications dans le domaine du
            développement informatique.
          </p>
        </div>

        <div className="formation-list">
          {formations.map((formation) => (
            <div key={formation.id} className="formation-card">
              <div className="formation-icon">{formation.icon}</div>
              <div className="formation-content">
                <h3 className="formation-title">{formation.title}</h3>
                <p className="formation-institution">{formation.institution}</p>
                <div className="formation-details">
                  <span className="formation-detail">
                    <FaMapMarkerAlt /> {formation.location.split(",")[0]}
                  </span>
                  <span className="formation-detail">
                    <FaCalendarAlt /> {formation.date}
                  </span>
                  {formation.document && (
                    <span className="formation-detail">
                      <FaFileAlt /> {formation.document}
                    </span>
                  )}
                </div>
                <p className="formation-description">{formation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;
