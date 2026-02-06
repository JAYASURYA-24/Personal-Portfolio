import billingImg from "../assets/mobile-1.jpeg";
import chatImg from "../assets/mobile-3.jpg";
import calculatorImg from "../assets/mobile-2.jpg";

export function Projects() {
  const projects = [
    {
      title: "Flutter Billing App",
      description:
        "Developed a Flutter-based billing application to support real-world vegetable supply shop billing workflows. Implemented bill generation, paid/unpaid status tracking and customer balance management. Generated daily bill reports in PDF format, including paid and unpaid summaries. And also generate bill with purchased items and total.",
      image: billingImg,
      techStack: ["Flutter", "Firebase", "Dart", "Riverpod", "Cloud Firestore"],
      github: "https://github.com/JAYASURYA-24/billing-",
      category: "Mobile",
    },
    {
      title: "Flutter Chat App",
      description:
        "Built a sample chat application. Implemented push notifications using Firebase Cloud Messaging (FCM) and local notification handling.",
      image: chatImg,
      techStack: [
        "Flutter",
        "Firebase",
        "Dart",
        "Cloud Firestore",
        "Firebase Auth",
        "FCM",
      ],
      github: "https://github.com/JAYASURYA-24/Chat_app",
      category: "Mobile",
    },
    {
      title: "Financial Calculator App",
      description:
        "Developed Financial calculator App which is uploaded in the playstore under testing .",
      image: calculatorImg,
      techStack: ["Flutter", "Cubit"],
      github: "https://github.com/JAYASURYA-24/Calcvio",

      category: "Mobile",
    },
  ];

  return (
    <section id="projects" className="section section-light">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Showcasing my best work in mobile and web development
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-badge">{project.category}</span>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="view-more">
          <a
            href="https://github.com/jayasurya-24"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view-more"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
