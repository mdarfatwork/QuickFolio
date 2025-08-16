export const portfolio = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mohammed Arfat - Full Stack Developer portfolio. Showcasing projects, skills in HTML, CSS, JavaScript, ReactJS, NextJS, MongoDB, and more.">
    <meta name="keywords" content="Mohammed Arfat, Full Stack Developer, web development, ReactJS, NextJS, JavaScript, HTML, CSS, MongoDB, PostgreSQL, web portfolio">
    <meta property="og:title" content="Mohammed Arfat | Full Stack Developer">
    <meta property="og:description" content="Mohammed Arfat - Full Stack Developer portfolio. Showcasing projects, skills in HTML, CSS, JavaScript, ReactJS, NextJS, MongoDB, and more.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mdarfat.vercel.app"> <!-- Replace with your actual portfolio URL -->
    <title>Mohammed Arfat | Full Stack Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #FDFBF8; /* Very light beige */
            --text-color: #3F2E3E; /* Dark brown/charcoal */
            --card-bg: #FFFFFF; /* Pure white for contrast on cards */
            --accent-color: #A67B5B; /* Warm beige/brown accent */
            --link-color: #A67B5B;
            --shadow-color: rgba(0, 0, 0, 0.08);
            --border-radius: 12px;
            --font-family: 'Poppins', sans-serif;
        }

        /* Basic Reset & Body Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-family);
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            scroll-behavior: smooth;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }

        a {
            color: var(--link-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            filter: brightness(0.85); /* Darken on hover */
        }

        h1, h2, h3 {
            color: var(--text-color);
            margin-bottom: 15px;
            font-weight: 600;
        }

        h1 {
            font-size: 2.8em;
            font-weight: 700;
            margin-bottom: 5px;
        }

        h2 {
            font-size: 2em;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 5px;
            display: inline-block;
            margin-bottom: 30px;
        }

        h3 {
            font-size: 1.4em;
            margin-bottom: 10px;
        }

        /* Header */
        header {
            background-color: var(--card-bg);
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 4px 10px var(--shadow-color);
            margin-bottom: 40px;
        }

        header .role {
            font-size: 1.3em;
            color: var(--accent-color);
            margin-bottom: 20px;
        }

        .social-links {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--accent-color);
            color: var(--card-bg);
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
            background-color: var(--text-color);
        }

        .social-links svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        /* Sections */
        .section {
            background-color: var(--card-bg);
            padding: 30px;
            margin-bottom: 40px;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 10px var(--shadow-color);
        }

        /* Skills Grid */
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .skill-card {
            background-color: var(--bg-color);
            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: 0 2px 5px var(--shadow-color);
        }

        .skill-card ul {
            list-style: none;
        }

        .skill-card li {
            margin-bottom: 8px;
            padding-left: 15px;
            position: relative;
        }

        .skill-card li::before {
            content: '•';
            color: var(--accent-color);
            font-size: 1.2em;
            position: absolute;
            left: 0;
            top: -2px;
        }

        /* Projects Grid */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .project-card {
            background-color: var(--bg-color);
            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: 0 2px 5px var(--shadow-color);
            transition: transform 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        .project-card h3 {
            margin-bottom: 10px;
        }
        .project-card p {
            font-size: 0.9em;
        }

        /* Experience & Education */
        .experience-item, .education-item {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #eee;
        }
        .experience-item:last-child, .education-item:last-child {
            border-bottom: none;
        }

        .experience-item h3, .education-item h3 {
            margin-bottom: 5px;
            color: var(--accent-color);
        }
        .experience-item .company, .education-item .institution {
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 0.95em;
        }
        .experience-item .dates {
            font-size: 0.85em;
            color: #777;
            margin-bottom: 10px;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 30px 20px;
            color: #777;
            font-size: 0.9em;
            margin-top: 40px;
            background-color: var(--card-bg);
            box-shadow: 0 -4px 10px var(--shadow-color);
        }
        footer p {
            margin-bottom: 5px;
        }

        /* Responsive */
        @media (min-width: 768px) {
            .skills-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Scroll Animations */
        .fade-in {
            opacity: 0;
            transition: opacity 0.8s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
        }

        .slide-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .slide-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <header id="home" class="fade-in">
        <div class="container">
            <h1>Mohammed Arfat</h1>
            <p class="role">Full Stack Developer</p>
            <div class="social-links">
                <a href="https://github.com/mdarfatwork" target="_blank" aria-label="GitHub Profile" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.2 3.633 17.2 3.633 17.2c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.013 24 17.514 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/momin-mohammed-arfat/" target="_blank" aria-label="LinkedIn Profile" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.596V9.609h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.609h3.564v10.843zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.208 0 22.225 0z"/></svg>
                </a>
            </div>
        </div>
    </header>

    <main class="container">
        <section id="about" class="section slide-up">
            <h2>About Me</h2>
            <p>I'm Arfat, a Full Stack web developer based in Malegaon. My skills include HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Redux, Prisma, MongoDB, PostgreSQL and Tailwind CSS. I'm passionate about web development and continuously learn to craft user-friendly experiences. Check my github for new projects. I've completed projects like a Netflix clone and an e-commerce web app, showcasing my dedication to practical learning and my tech stack is regularly updated. I'm eager to join a dynamic team, contributing creativity and technical expertise to innovate and captivate users through web development.</p>
        </section>

        <section id="skills" class="section slide-up">
            <h2>Skills & Proficiencies</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>Technologies</h3>
                    <ul>
                        <li>HTML, CSS, JavaScript, TypeScript</li>
                        <li>ReactJS, NextJS, Tailwind CSS, Redux</li>
                        <li>Prisma, MongoDB, PostgreSQL, Firebase</li>
                        <li>Git and Github</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Teamwork, multitasking, attention to detail</li>
                        <li>Front end web development</li>
                        <li>Good Knowledge of Prompt Engineering to increase efficiency</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="projects" class="section slide-up">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Data Visualization Dashboard</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/Data-Visualization-Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://data-visualization-dashboard-pi.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
                <div class="project-card">
                    <h3>Streamix (Movie listing and Streaming)</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/streamix" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://streamix-arfat.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
                <div class="project-card">
                    <h3>Eshop (E-commerce Web app)</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/eShop" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://eshoparfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
                <div class="project-card">
                    <h3>Arfat Chat (Real Time Chatting Web App)</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/chat" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://chat-arfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
                <div class="project-card">
                    <h3>Notion Clone</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/notion-clone" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://notion-clone-arfat.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
                <div class="project-card">
                    <h3>Email Client (Email Client UI)</h3>
                    <p>
                        <a href="https://github.com/mdarfatwork/EmailClientAppReactJS" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://email-client-arfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </p>
                </div>
            </div>
        </section>

        <section id="experience" class="section slide-up">
            <h2>Experience</h2>
            <div class="experience-item">
                <h3>Engineer Intern</h3>
                <p class="company">Luis - Remote</p>
                <p class="dates">Feb 2025 - Ongoing</p>
                <p>Collaborating with a freelancer from Mexico on ongoing projects, gaining hands-on experience in web development.</p>
            </div>
            <div class="experience-item">
                <h3>Graphic Designer Intern</h3>
                <p class="company">FRIZZY FASHIONISTA - Remote</p>
                <p class="dates">24 Weeks</p>
                <p>Contributed to graphic design projects for FRIZZY FASHIONISTA.</p>
            </div>
        </section>

        <section id="education" class="section slide-up">
            <h2>Education</h2>
            <div class="education-item">
                <h3>BA (Economic)</h3>
                <p class="institution">Ongoing</p>
            </div>
            <div class="education-item">
                <h3>12th (Science)</h3>
                <p class="institution">2023</p>
            </div>
        </section>
    </main>

    <footer class="fade-in">
        <div class="container">
            <p>&copy; 2024 Mohammed Arfat. All rights reserved.</p>
            <p>Built with QuickFolio.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.fade-in, .slide-up');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });
    </script>
</body>
</html>`;
