import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { skills } from '../../data/portfolioData';
import { getSkillIcon } from './SkillIcons';
import './Skills.css';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>
          Skills & Technologies
        </h2>
        <p className={`section-subtitle fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
          Here are the technologies I work with to bring ideas to life
        </p>

        <div className={`skills-filter fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`skill-card fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(index % 8) * 0.1}s` }}
            >
              <div className="skill-icon">
                {getSkillIcon(skill.icon)}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-level">
                <div className="level-bar">
                  <div 
                    className="level-fill"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index % 8) * 0.1 + 0.3}s`
                    }}
                  ></div>
                </div>
                <span className="level-text">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
