import { useEffect, useRef, useState } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React", level: 60 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Dart", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "SDK", level: 70 },
      ],
    },
    {
      title: "Backend and Database",
      skills: [
        { name: "Core Java", level: 70 },
        { name: "Node.js", level: 70 },
        { name: "Sql", level: 80 },
        { name: "Maria DB", level: 60 },
        { name: "Go lang", level: 50 },
      ],
    },
  ];

  const additionalSkills = [
    "Provider",
    "Riverpod",
    "Hive",
    "Sql Lite",
    "Redux",
    "Material-UI",
    "Postman",
    "Figma",
    "Git",
    "GitHub",
    "Chrome DevTools",
    "Cross-Platform Development",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section section-dark" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          A comprehensive set of technical skills and tools I use to bring
          projects to life
        </p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="skill-header">{category.title}</div>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h3>Other Technologies & Tools</h3>
          <div className="tech-tags">
            {additionalSkills.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
