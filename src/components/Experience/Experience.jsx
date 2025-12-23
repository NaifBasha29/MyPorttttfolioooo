import useScrollAnimation from '../../hooks/useScrollAnimation';
import { experiences } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>
          Professional Experience
        </h2>
        <p className={`section-subtitle fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
          My journey through the tech industry
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`timeline-item fade-in ${isVisible ? 'visible' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                
                <p className="timeline-description">{exp.description}</p>
                
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
