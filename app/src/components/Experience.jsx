export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Software Developer",
      company: "Flattrade Broking Pvt ltd.",
      period: "2024 Dec – Present",
      description:
        "Developing and maintaining cross-platform mobile applications using Flutter, focusing on performance, scalability, and user experience across multiple client projects.",
      achievements: [
        "Developed, and deployed 2 production-ready mobile applications",
        "Improved application performance and responsiveness through code optimization",
        "Converted one Company's internal app to SDK and implemented in another app",
        "Developed, and deployed 1 production-ready Comapnies portfolio website as a single developer using HTML, CSS, Javascript and Bootstarp",
        "Collaborated with designers, backend developers, and QA teams to deliver high-quality solutions",
      ],
    },
    {
      type: "work",
      title: "Web Developer - Intern",
      company: "Virtusa",
      period: "2023 July – 2023 November",
      description:
        "Built E-commerce web applications using React, HTML, CSS, and JavaScript as Intern",
      achievements: ["Learned basic of web development and MNC's soft skills "],
    },
  ];

  const education = [
    {
      type: "education",
      degree: "Bachelor of Information Technology",
      institution: "VSb Engineering College - Karur",
      period: "2019 – 2023",
      description:
        "Completed a comprehensive curriculum in computer science with a strong emphasis on software engineering, web development, and mobile application development.",
      achievements: [
        "Graduated with academic distinction with CGPA - 8.8",
        "Consistently recognized for academic excellence",
        "Actively participated in technical workshops and coding initiatives",
      ],
    },
  ];

  const TimelineItem = ({ item, isLast }) => {
    const isWork = item.type === "work";

    return (
      <div className="timeline-item">
        <div className="timeline-icon">
          {isWork ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          )}
        </div>

        {!isLast && <div className="timeline-line"></div>}

        <div className="timeline-content">
          <div className="timeline-header">
            <h4 className="timeline-title">{item.title || item.degree}</h4>
            <div className="timeline-meta">
              <span className="timeline-company">
                {item.company || item.institution}
              </span>
              <span className="timeline-period">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {item.period}
              </span>
            </div>
          </div>

          <p className="timeline-description">{item.description}</p>

          <ul className="timeline-achievements">
            {item.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Professional experience and academic background
        </p>

        <div className="experience-grid">
          <div className="timeline-section">
            <h3>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Professional Experience
            </h3>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  item={exp}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="timeline-section">
            <h3>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Education
            </h3>

            <div className="timeline">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
