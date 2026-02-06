export function About() {
  const highlights = [
    {
      title: "Web Development",
      description:
        "Designing and developing scalable, responsive web applications using React, JavaScript, and modern web standards with a focus on performance and usability.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Mobile Development",
      description:
        "Building high-quality cross-platform mobile applications using Flutter, delivering consistent user experiences across Android and iOS platforms.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Performance Optimization",
      description:
        "Focused on improving application performance, maintainability, and scalability through clean architecture, optimized code, and best practices.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>

        <div className="about-grid">
          {/* Left Column - Professional Summary */}
          <div className="about-content">
            <h3>Frontend Developer Specialized in Web & Mobile Applications</h3>

            <p>
              I am a motivated Flutter and React Developer with hands-on
              experience in building responsive web and cross-platform mobile
              applications. I specialize in translating business requirements
              into reliable, user-focused digital solutions.
            </p>

            <p>
              With a strong foundation in modern JavaScript frameworks and UI
              development, I focus on writing clean, maintainable code while
              following industry best practices. I continuously enhance my
              skills to stay aligned with evolving technologies and development
              standards.
            </p>

            <p>
              I value collaboration, problem-solving, and continuous learning,
              and I am committed to contributing effectively to development
              teams and delivering high-quality software products.
            </p>

            {/* Professional Stats */}
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Core Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Highlights */}
          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{highlight.icon}</div>
                <div className="highlight-content">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
