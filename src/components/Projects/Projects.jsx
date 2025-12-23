import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>
          Featured Projects
        </h2>
        <p className={`section-subtitle fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
          A selection of projects I've worked on, showcasing my skills and expertise
        </p>

        <div className={`project-filter fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
          {allTechnologies.slice(0, 8).map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id}
              className={`project-card fade-in ${isVisible ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => openModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="modal-image"
            />
            
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-tech">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              {selectedProject.codeSnippet && (
                <div className="modal-code">
                  <h3 className="code-title">Code Preview</h3>
                  <div className="code-block">
                    <code>
                      <pre>{selectedProject.codeSnippet}</pre>
                    </code>
                  </div>
                </div>
              )}

              <div className="modal-links">
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Demo
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
