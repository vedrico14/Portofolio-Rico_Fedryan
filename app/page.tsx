const projects = [
  {
    number: "01",
    title: "CyberArk PAM",
    category: "Privileged Access Management",
    clients: "BAF · IDX · MTI",
    description:
      "Supporting enterprise privileged access environments, secure account lifecycle, platform policies, session management, and technical troubleshooting.",
    tags: ["CyberArk", "PAM", "Security Operations"],
  },
  {
    number: "02",
    title: "HCL BigFix",
    category: "Endpoint & Patch Management",
    clients: "Allianz Life · SMI · CIMB Niaga Auto Finance",
    description:
      "Delivering technical support for endpoint visibility, patch deployment, reporting health, and platform configuration across enterprise estates.",
    tags: ["BigFix", "Endpoint", "Patch Management"],
  },
  {
    number: "03",
    title: "SolarWinds SCM",
    category: "Monitoring & Configuration",
    clients: "Bank CTBC Indonesia",
    description:
      "Supporting platform monitoring, configuration visibility, system performance review, and operational reporting for critical infrastructure.",
    tags: ["SolarWinds", "Monitoring", "Infrastructure"],
  },
  {
    number: "04",
    title: "Tenable SC & Nessus",
    category: "Vulnerability Management",
    clients: "Bank CTBC Indonesia",
    description:
      "Enabling vulnerability scanning, findings review, and reporting workflows to improve risk visibility and remediation coordination.",
    tags: ["Tenable", "Nessus", "Vulnerability"],
  },
  {
    number: "05",
    title: "Semgrep SAST",
    category: "Application Security",
    clients: "KB Bank",
    description:
      "Supporting static application security testing implementation to help identify code-level security findings earlier in the development lifecycle.",
    tags: ["Semgrep", "SAST", "AppSec"],
  },
];

const experience = [
  {
    period: "Jul 2025 — Present",
    role: "Security Engineer / Support Engineer",
    company: "Q2 Technologies",
    summary:
      "Technical support and system integration across security and infrastructure platforms for enterprise customers.",
    details: [
      "Provide ticket-based support for questions, incidents, problems, and requests.",
      "Handle system integration requests, feature enhancements, and preventive maintenance.",
      "Troubleshoot performance, configuration, and connectivity issues.",
      "Coordinate with clients and internal teams to maintain delivery and SLA compliance.",
    ],
  },
  {
    period: "Oct 2023 — Jul 2025",
    role: "Data Center Operations",
    company: "PT. Bringin Inti Teknologi (bit) · BRI Placement",
    summary:
      "Data center operations for Cloudera infrastructure and HPE enterprise servers.",
    details: [
      "Installed Red Hat Linux and implemented Cloudera big data platform components.",
      "Monitored server health through HPE OneView and performed on-site hardware checks.",
      "Managed servers remotely through HPE iLO and reported operational status.",
    ],
  },
  {
    period: "Jul 2020 — Sep 2023",
    role: "Security Operations",
    company: "PT. Bringin Inti Teknologi (bit) · BRI Placement",
    summary:
      "CyberArk privileged access operations, account administration, and session monitoring.",
    details: [
      "Configured Safes and Platforms within CyberArk Privileged Access Management.",
      "Managed the privileged user lifecycle in PrivateArk and provisioned server accounts.",
      "Monitored privileged sessions, investigated risky commands, and resolved access issues.",
    ],
  },
  {
    period: "Jul 2019 — Jan 2020",
    role: "System Administrator",
    company: "WIR Group",
    summary:
      "Network, Linux server, monitoring, and early-stage DevOps administration.",
    details: [
      "Managed network infrastructure using Mikrotik routers and Ubiquiti access points.",
      "Installed and configured LEMP/LAMP stacks and performed network troubleshooting.",
      "Explored Ansible, Docker, and Git for automation and deployment workflows.",
    ],
  },
];

const certifications = [
  { name: "CyberArk Certified Trustee", issuer: "CyberArk", mark: "CA" },
  {
    name: "HCLSoftware Certified Sales Foundation · BigFix Platform",
    issuer: "HCLSoftware",
    mark: "BF",
  },
  { name: "Linux System Administration", issuer: "Btech Academy", mark: "LX" },
  { name: "GitLab Fundamental", issuer: "Btech Academy", mark: "GL" },
  { name: "Docker Fundamental", issuer: "Btech Academy", mark: "DK" },
  {
    name: "DevOps Fundamental Monitoring and Logging",
    issuer: "Btech Academy",
    mark: "DO",
  },
  { name: "Pre Security", issuer: "TryHackMe", mark: "TH" },
];

const skills = [
  "Security Operations",
  "Privileged Access Management",
  "Patch Management",
  "Vulnerability Scanning & Reporting",
  "Static Application Security Testing",
  "Linux & Windows Server",
  "Bash Scripting",
  "Cloud Computing",
  "Network Administration",
  "Monitoring & Logging",
];

const tools = [
  "CyberArk PAM",
  "HCL BigFix",
  "Tenable Nessus & SC",
  "HPE iLO & OneView",
  "Docker",
  "Semgrep SAST",
  "Grafana",
  "Prometheus",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">MR</span>
          <span className="brand-copy">
            <strong>MUHAMMAD RICO FEDRYAN</strong>
            <small>Security Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#Profile">Profile</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Certifications">Certifications</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s connect <ArrowIcon />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#Profile">Profile</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
            <a href="#Certifications">Certifications</a>
            <a href="#Contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="section-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span className="status-dot" /> STATUS: AVAILABLE · READY FOR SECURITY ENGINEER OPPORTUNITIES
            </div>
            <h1>
              Securing access.
              <span>Keeping systems reliable.</span>
            </h1>
            <p className="hero-lead">
              I&apos;m <strong>Muhammad Rico Fedryan</strong>, a Security 
              Engineer focused on privileged access, endpoint security, patch management,
              vulnerability management, and infrastructure operations.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-ghost" href="mailto:ricofedryan14@gmail.com">
                Email me
              </a>
            </div>
            <div className="hero-socials" aria-label="Professional links">
              <a
                href="https://linkedin.com/in/ricofedryan14"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowIcon />
              </a>
              <a
                href="https://credly.com/users/ricofedryan14"
                target="_blank"
                rel="noreferrer"
              >
                Credly <ArrowIcon />
              </a>
              <a
                href="https://tryhackme.com/p/Vedric"
                target="_blank"
                rel="noreferrer"
              >
                TryHackMe <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Professional profile summary">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
              <p>security_profile.yml</p>
            </div>
            <div className="terminal-body">
              <p>
                <span className="code-key">name:</span>
                <span className="code-value"> &quot;Muhammad Rico Fedryan&quot;</span>
              </p>
              <p>
                <span className="code-key">role:</span>
                <span className="code-value"> &quot;Security Engineer&quot;</span>
              </p>
              <p>
                <span className="code-key">focus:</span>
              </p>
              <ul>
                <li>&quot;privileged_access&quot;</li>
                <li>&quot;patch management&quot;</li>
                <li>&quot;endpoint_security&quot;</li>
                <li>&quot;vulnerability_management&quot;</li>
                <li>&quot;infrastructure_operations&quot;</li>
              </ul>
              <p>
                <span className="code-key">approach:</span>
                <span className="code-value"> &quot;analyze. solve. improve.&quot;</span>
              </p>
            </div>
            
            <div className="panel-badge">
              <span className="shield">✓</span>

            <div>
              <strong>CyberArk Certified</strong>
              <small>Certified Trustee</small>
            </div>
          </div>

          </div>
          </div>

           
        <div className="section-shell stats-bar">
          <div>
            <strong>6+</strong>
            <span>Years in IT operations &amp; security</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Enterprise solution portfolios</span>
          </div>
          <div>
            <strong>7</strong>
            <span>Professional certifications</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Progressive technical roles</span>
          </div>
        </div>
      </section>

      <section className="section section-intro" id="Profile">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow">01 / Profile</div>
              <h2>Technical depth with a service mindset.</h2>
            </div>
            <p>
              My background spans security operations, data center operations,
              and system administration. I combine hands-on troubleshooting with
              disciplined communication to resolve complex issues clearly and
              efficiently.
            </p>
          </div>

          <div className="expertise-grid">
            <article className="expertise-card featured-card">
              <span className="card-index">A</span>
              <div className="card-symbol">{"//"}</div>
              <h3>Privileged Access &amp; Security Operations</h3>
              <p>
                CyberArk PAM administration, secure account lifecycle, Safe and
                Platform configuration, privileged session monitoring, and
                access troubleshooting.
              </p>
              <div className="card-tags">
                <span>CyberArk</span>
                <span>PrivateArk</span>
                <span>PAM</span>
              </div>
            </article>

            <article className="expertise-card">
              <span className="card-index">B</span>
              <div className="card-symbol">◎</div>
              <h3>Endpoint &amp; Vulnerability Management</h3>
              <p>
                Enterprise patching, endpoint health, vulnerability scanning,
                finding analysis, and remediation reporting across large
                environments.
              </p>
              <div className="card-tags">
                <span>BigFix</span>
                <span>Tenable</span>
                <span>Nessus</span>
              </div>
            </article>

            <article className="expertise-card">
              <span className="card-index">C</span>
              <div className="card-symbol">⌘</div>
              <h3>Infrastructure &amp; Observability</h3>
              <p>
                Linux and Windows Server administration, hardware operations,
                network troubleshooting, platform monitoring, and foundational
                automation.
              </p>
              <div className="card-tags">
                <span>RHEL</span>
                <span>HPE</span>
                <span>Docker</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="Projects">
        <div className="section-shell">
          <div className="section-heading">
            <div className="eyebrow light">02 / Projects</div>
            <h2>Enterprise platforms.<br />Real operational impact.</h2>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-title">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-clients">{project.clients}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-shell experience-layout">
          <div className="experience-sticky">
            <div className="eyebrow">03 / Experience</div>
            <h2>Built from the infrastructure up.</h2>
            <p>
              A career path shaped by hands-on operations, security ownership,
              and customer-facing technical support.
            </p>
            <a className="text-link" href="#contact">
              Discuss my experience <ArrowIcon />
            </a>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-content">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="Skills">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow light">03 / Skills & Expertise</div>
              <h2>Skills that connect security and operations.</h2>
            </div>
            <p>
              A practical toolkit developed through production operations,
              customer delivery, platform implementation, and continuous
              technical learning.
            </p>
          </div>
          <div className="skills-layout">
            <div className="skills-block">
              <div className="block-title">
                <span>01</span>
                <h3>Hard skills</h3>
              </div>
              <div className="skill-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-block">
              <div className="block-title">
                <span>02</span>
                <h3>Tools &amp; technologies</h3>
              </div>
              <div className="tool-list">
                {tools.map((tool) => (
                  <div key={tool}>
                    <span className="tool-dot" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-block soft-skills-block">
              <div className="block-title">
                <span>03</span>
                <h3>How I work</h3>
              </div>
              <div className="soft-skill-list">
                <p><strong>Analytical</strong><span>Break down complex issues into clear actions.</span></p>
                <p><strong>Collaborative</strong><span>Work effectively with clients and internal teams.</span></p>
                <p><strong>Disciplined</strong><span>Stay consistent with process, quality, and follow-through.</span></p>
                <p><strong>Fast learner</strong><span>Adapt quickly to unfamiliar technology and challenges.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section credentials-section" id="Certifications">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow">04 / Certifications & Achievements</div>
              <h2>Validated learning.<br />Continuous growth.</h2>
            </div>
            <a
              className="text-link"
              href="https://credly.com/users/ricofedryan14"
              target="_blank"
              rel="noreferrer"
            >
              View Credly profile <ArrowIcon />
            </a>
          </div>

          <div className="credentials-grid">
            <div className="certifications-list">
              {certifications.map((certification) => (
                <article className="certificate" key={certification.name}>
                  <div className="certificate-mark">{certification.mark}</div>
                  <div>
                    <h3>{certification.name}</h3>
                    <p>{certification.issuer}</p>
                  </div>
                  <span className="certificate-check" aria-label="Completed">✓</span>
                </article>
              ))}
            </div>

            <div className="education-panel">
              <div className="eyebrow light">Education</div>
              <article>
                <span>2021 — 2025</span>
                <h3>Bachelor of Science</h3>
                <p>Information System</p>
                <strong>Universitas Terbuka</strong>
              </article>
              <article>
                <span>2017 — 2020</span>
                <h3>Vocational High School</h3>
                <p>Computer &amp; Network Engineering</p>
                <strong>SMK Wikrama Bogor</strong>
              </article>
              <div className="education-quote">
                <span>“</span>
                <p>
                  Always learning something new, especially when technology
                  presents a problem worth solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="section-shell contact-layout">
          <div>
            <div className="eyebrow light">05 / Contact</div>
            <h2>Have a security or infrastructure challenge?</h2>
            <p>
              Let&apos;s connect and talk about how I can help your team keep
              critical systems secure, visible, and reliable.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-primary" href="mailto:ricofedryan14@gmail.com">
              <span>Email</span>
              <strong>ricofedryan14@gmail.com</strong>
              <ArrowIcon />
            </a>
            <div className="contact-secondary">
              <a href="tel:+6285156349459">
                <span>Phone</span>
                <strong>085156349459</strong>
              </a>
              <a
                href="https://linkedin.com/in/ricofedryan14"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>/in/ricofedryan14</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-layout">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">MR</span>
            <span className="brand-copy">
              <strong>Muhammad Rico Fedryan</strong>
              <small>Security Engineer</small>
            </span>
          </a>
          <p>Built with a passion for technology and security.</p>
          <div>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
