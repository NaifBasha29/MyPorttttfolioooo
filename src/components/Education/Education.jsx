import useScrollAnimation from '../../hooks/useScrollAnimation';
import { education, certifications } from '../../data/portfolioData';
import './Education.css';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>
          Education & Certifications
        </h2>
        <p className={`section-subtitle fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
          My academic background and professional certifications
        </p>

        <div className="education-grid">
          <div className="education-column">
            <h3 className={`column-title fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            
            <div className="education-cards">
              {education.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={`education-card glass-card fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
                >
                  <div className="edu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div className="edu-content">
                    <span className="edu-period">{edu.period}</span>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-college">{edu.college}</p>
                    <p className="edu-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <h3 className={`column-title fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Certifications
            </h3>
            
            <div className="certification-cards">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className={`certification-card glass-card fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
                >
                  <div className="cert-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
