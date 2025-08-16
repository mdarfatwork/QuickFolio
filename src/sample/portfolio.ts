export const portfolio = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momin Mohammed Arfat - Full Stack Web Developer</title>
    <meta name="description" content="Momin Mohammed Arfat, a Full Stack web developer passionate about crafting user-friendly experiences using HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Redux, Prisma, MongoDB, PostgreSQL, Tailwind CSS, Firebase, Git and Github.">
    <meta name="keywords" content="Full Stack Developer, Web Developer, JavaScript, TypeScript, ReactJS, NextJS, Node.js, HTML, CSS, MongoDB, PostgreSQL, Firebase, Git, GitHub, Momin Mohammed Arfat, Portfolio, Projects, Software Engineer">
    <style>
        :root {
            --primary-text: #333;
            --secondary-text: #555;
            --accent-color: #007bff; /* A nice, clean blue */
            --background-color: #f8f8f8;
            --card-background: #fff;
            --border-color: #eee;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: var(--primary-text);
            background-color: var(--background-color);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        header {
            background-color: var(--card-background);
            padding: 1rem 1.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        header .name {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary-text);
        }

        .button {
            display: inline-block;
            background-color: var(--accent-color);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.2s ease;
        }

        .button:hover {
            background-color: #0056b3;
        }

        main {
            padding: 1.5rem;
            max-width: 900px;
            margin: 20px auto;
            background-color: var(--card-background);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }

        section {
            margin-bottom: 2rem;
        }

        h1, h2, h3, h4, h5, h6 {
            color: var(--primary-text);
            margin-top: 0;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        h1 { font-size: 2.5rem; color: var(--accent-color); margin-bottom: 0.5rem; }
        h2 { font-size: 1.8rem; color: var(--secondary-text); margin-bottom: 1.5rem; }
        h3 { font-size: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; }
        h4 { font-size: 1.25rem; margin-bottom: 0.5rem; }
        h5 { font-size: 1rem; color: var(--secondary-text); margin-bottom: 0.25rem; }

        p {
            margin-bottom: 1rem;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        ul li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        ul li::before {
            content: '•';
            color: var(--accent-color);
            position: absolute;
            left: 0;
        }

        .meta-info {
            font-size: 0.9rem;
            color: var(--secondary-text);
            margin-bottom: 1rem;
        }

        .project-item, .experience-item {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px dashed var(--border-color);
        }

        .project-item:last-child, .experience-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .project-links a {
            color: var(--accent-color);
            text-decoration: none;
            margin-right: 1rem;
        }

        .project-links a:hover {
            text-decoration: underline;
        }

        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            background-color: var(--accent-color);
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            font-size: 0.9rem;
            white-space: nowrap;
        }

        .social-links {
            display: flex;
            gap: 1.5rem;
            margin-top: 1.5rem;
            justify-content: center;
        }

        .social-links a {
            color: var(--secondary-text);
            text-decoration: none;
            transition: color 0.2s ease;
            font-weight: bold;
        }

        .social-links a:hover {
            color: var(--accent-color);
        }

        /* Basic icon-like representations for LinkedIn and GitHub */
        .icon-linkedin::before { content: "in"; font-size: 1.4em; border: 2px solid; padding: 0 0.2em; border-radius: 3px; vertical-align: middle; }
        .icon-github::before { content: "Git"; font-size: 1.4em; border: 2px solid; padding: 0 0.2em; border-radius: 3px; vertical-align: middle; }


        @media (max-width: 768px) {
            header {
                flex-direction: column;
                align-items: flex-start;
            }
            header .name {
                margin-bottom: 0.5rem;
            }
            main {
                margin: 10px;
                padding: 1rem;
            }
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            h3 { font-size: 1.3rem; }
            h4 { font-size: 1.1rem; }
            .social-links {
                gap: 1rem;
                font-size: 0.9em;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="name">Momin Mohammed Arfat</div>
        <a href="#resume-content" class="button">Download Resume</a>
    </header>

    <main id="resume-content">
        <section id="hero">
            <h1>Momin Mohammed Arfat</h1>
            <h2>Full Stack Web Developer</h2>
            <div class="meta-info">
                <p>Sr. No. 58/2, Plot No.26, Naya Islampura, Malegaon, Dist. Nashik, MH - 423203</p>
                <p><strong>Phone:</strong> <a href="tel:+917020660977">+91 702066 0977</a></p>
                <p><strong>Email:</strong> <a href="mailto:arfat19118@gmail.com">arfat19118@gmail.com</a></p>
            </div>
        </section>

        <section id="about">
            <h3>About Me</h3>
            <p>I'm Arfat, a Full Stack web developer based in Malegaon. My skills include HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Redux, Prisma, MongoDB, PostgreSQL and Tailwind CSS. I'm passionate about web development and continuously learn to craft user-friendly experiences. I've completed projects like a Netflix clone and an e-commerce web app, showcasing my dedication to practical learning and my tech stack is regularly updated. I'm eager to join a dynamic team, contributing creativity and technical expertise to innovate and captivate users through web development.</p>
        </section>

        <section id="skills">
            <h3>Skills & Proficiencies</h3>
            <div class="skills-list">
                <span class="skill-tag">HTML</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">ReactJS</span>
                <span class="skill-tag">NextJS</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Redux</span>
                <span class="skill-tag">Prisma</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">Firebase</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Github</span>
                <span class="skill-tag">Teamwork</span>
                <span class="skill-tag">Multitasking</span>
                <span class="skill-tag">Attention to Detail</span>
                <span class="skill-tag">Front-end Web Development</span>
                <span class="skill-tag">Prompt Engineering</span>
            </div>
        </section>

        <section id="experience">
            <h3>Experience</h3>
            <div class="experience-item">
                <h4>Engineer Inter</h4>
                <h5>Luis - Freelance (Remote)</h5>
                <p>Feb 2025 - Ongoing</p>
                <p>Working with Luis, a freelancer from Mexico, on ongoing projects, learning through hands-on work.</p>
            </div>
            <div class="experience-item">
                <h4>Graphic Designer Inter</h4>
                <h5>FRIZZY FASHIONISTA - Remote</h5>
                <p>Duration: 24 Weeks</p>
            </div>
        </section>

        <section id="projects">
            <h3>Projects</h3>
            <div class="project-item">
                <h4>Data Visualization Dashboard</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/Data-Visualization-Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://data-visualization-dashboard-pi.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            <div class="project-item">
                <h4>Streamix (Movie listing and Streaming)</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/streamix" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://streamix-arfat.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            <div class="project-item">
                <h4>Eshop (E-commerce Web app)</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/eShop" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://eshop-arfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            <div class="project-item">
                <h4>Arfat Chat (Real Time Chatting Web App)</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/chat" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://chat-arfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            <div class="project-item">
                <h4>Notion Clone</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/notion-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://notion-clone-arfat.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
            <div class="project-item">
                <h4>Email Client (Email Client UI)</h4>
                <div class="project-links">
                    <a href="https://github.com/mdarfatwork/EmailClientAppReactJS" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://email-client-arfat.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </section>

        <section id="education">
            <h3>Education</h3>
            <ul>
                <li><strong>BA (Economic)</strong> - Ongoing</li>
                <li><strong>12th (Science)</strong> - 2023</li>
            </ul>
        </section>

        <footer>
            <div class="social-links">
                <a href="https://linkedin.com/in/momin-mohammed-arfat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" class="icon-linkedin"></a>
                <a href="https://github.com/mdarfatwork" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" class="icon-github"></a>
            </div>
        </footer>
    </main>
</body>
</html>`