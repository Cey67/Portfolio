import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <p className="section-subtitle">CONTACTEZ-MOI</p>
          <h2 className="section-title">Me Contacter</h2>
          <p className="section-description">
            Vous avez un projet en tête ou souhaitez discuter d'opportunités potentielles ? 
            N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Informations de Contact</h3>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:ceyhuns2004@gmail.com">ceyhuns2004@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Téléphone</h4>
                  <a href="tel:+33769060900">07 69 06 09 00</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Localisation</h4>
                  <p>Strasbourg, France</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Cey67" target="_blank" rel="noopener noreferrer">github.com/Cey67</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ceyhun-sapmaz/" target="_blank" rel="noopener noreferrer">ceyhun-sapmaz</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-text">
                  <h4>Réponse rapide</h4>
                  <p>Sous 24-48h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
