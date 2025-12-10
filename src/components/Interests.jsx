import { FaFutbol, FaPlane, FaCar, FaGamepad } from 'react-icons/fa';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      id: 1,
      title: 'Football',
      icon: <FaFutbol />,
      description: 'Fan de Galatasaray, j\'adore l\'atmosphère du football et regarder les matchs. Le football représente pour moi la passion, le partage et l\'émotion collective.',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Voyages',
      icon: <FaPlane />,
      description: 'J\'aime découvrir de nouveaux paysages et pays. Chaque voyage est une opportunité d\'élargir mes horizons et de m\'enrichir culturellement.',
      color: 'teal'
    },
    {
      id: 3,
      title: 'L\'automobile',
      icon: <FaCar />,
      description: 'Je suis passionné par les voitures de sport et particulièrement par la marque BMW. J\'apprécie l\'ingénierie automobile, le design et la performance de ces véhicules.',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Jeux vidéo',
      icon: <FaGamepad />,
      description: 'Un excellent moyen de passer du bon moment avec ses amis. Les jeux vidéo me permettent de me détendre tout en développant ma réflexion stratégique.',
      color: 'purple'
    }
  ];

  return (
    <section id="interests" className="interests">
      <div className="container">
        <div className="interests-header">
          <p className="section-subtitle">CENTRES D'INTÉRÊT</p>
          <h2 className="interests-title">
            <span className="title-start">Centres d'</span>
            <span className="title-end">Intérêt</span>
          </h2>
          <p className="section-description">
            Quelques activités qui me passionnent en dehors du développement informatique.
          </p>
        </div>

        <div className="interests-grid">
          {interests.map((interest) => (
            <div key={interest.id} className={`interest-card interest-card-${interest.color}`}>
              <div className="interest-icon">
                {interest.icon}
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
              <a href="#" className="interest-link" onClick={(e) => e.preventDefault()}>
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

