/* =========================================
   1. PORTFOLIO DATA (Single Source of Truth)
   ========================================= */
const portfolioData = {
    personal: {
        name: "Aamarsh Gupta",
        role: "Sustainability Professional",
        bio: "Sustainability Professional focused on green building design, renewable energy systems, and environmental impact assessment. Passionate about bridging the gap between modern infrastructure and ecological preservation.",
        location: "Prayagraj, India",
        email: "aamarshgupta81@gmail.com",
        phone: "+91 95699 46290",
        linkedin: "https://www.linkedin.com/in/aamarsh-gupta/",
        resume: "resume.pdf"
    },
    experience: [
        {
            role: "Assistant Sustainability Analyst",
            company: "SEED Green Solution LLP",
            date: "Nov 2025 — Present",
            location: "Ahmedabad, India",
            description: "Lead sustainability analysis for commercial and residential green building projects. Manage documentation and certification lifecycle for LEED, IGBC, GRIHA, and EDGE.",
            logo: "https://ui-avatars.com/api/?name=SEED&background=2ecc71&color=fff&size=128" // Placeholder logo
        },
        {
            role: "Technical and Sales Consultant Intern",
            company: "SolarZon Energy",
            date: "May 2025 — Oct 2025",
            location: "Prayagraj, India",
            description: "Primary technical consultant for residential solar projects. Managed full lifecycle from site feasibility to installation oversight.",
            logo: "https://ui-avatars.com/api/?name=SolarZon&background=eebc51&color=000&size=128" // Placeholder logo
        },
        {
            role: "Power and Energy System - Freelance",
            company: "Mahi Enterprises",
            date: "Aug 2024 — Dec 2024",
            location: "Remote",
            description: "Freelance consultant for resilient power systems. Engineered hybrid solar-battery systems and validated electrical safety (LPS/Earthing).",
            logo: "https://ui-avatars.com/api/?name=Mahi&background=3498db&color=fff&size=128" // Placeholder logo
        },
        {
            role: "Energy Analyst Intern",
            company: "UltraTech Cement Ltd.",
            date: "May 2024 — June 2024",
            location: "Solan, India",
            description: "Conducted industrial energy audits and fuel optimization strategies. Achieved 16% reduction in fuel costs via blend re-engineering.",
            logo: "https://ui-avatars.com/api/?name=UltraTech&background=e74c3c&color=fff&size=128" // Placeholder logo
        }
    ],
    projects: [
        {
            title: "High-Performance Building Energy & Daylight Sim.",
            description: "Optimized building envelope performance using iterative simulations. Reduced predicted energy consumption by 32%.",
            tags: ["Energy Modeling", "Daylight Analysis", "Facade Optimization"],
            status: "Completed",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Hybrid Sewage Solar-Hydro Plant",
            description: "Engineered a hybrid system generating 45 kWh/day using vortex microturbines and rooftop PV. Designed custom 3D sludge separation.",
            tags: ["Micro-Hydro", "Hybrid Energy", "3D Product Design"],
            status: "Completed",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Sustainable Plastic-walled Classroom",
            description: "Designed a 25 m² modular classroom using 300+ recycled PVC pipes/bottles. Integrated rainwater harvesting and biogas unit.",
            tags: ["Circular Economy", "Waste-to-Value", "Fusion 360"],
            status: "Completed",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5afa?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Hybrid Solar-Biogas Plant",
            description: "Designed full-scale hybrid energy system generating 1,020 kWh/day. Utilized ArcGIS for site suitability.",
            tags: ["Biogas Energy", "ArcGIS", "Feasibility Analysis"],
            status: "Completed",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Net-Zero Campus Energy Audit",
            description: "Comprehensive energy audit framework for educational campuses targeting net-zero emissions through renewable integration.",
            tags: ["Energy Audit", "Net-Zero", "Campus Planning"],
            status: "Coming Soon",
            image: "https://images.unsplash.com/photo-1516937941348-af594546f138?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Smart Grid Microgrid Design",
            description: "Designing an intelligent microgrid system with real-time load balancing and predictive maintenance capabilities.",
            tags: ["Smart Grid", "IoT", "Load Balancing"],
            status: "Coming Soon",
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Carbon Footprint Tracker Platform",
            description: "Web-based platform for organizations to track, analyze, and offset their carbon emissions with actionable insights.",
            tags: ["Carbon Tracking", "Web Platform", "Data Analytics"],
            status: "Coming Soon",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Green Roof Thermal Performance Study",
            description: "Research study analyzing the thermal insulation benefits of various green roof configurations in tropical climates.",
            tags: ["Green Roof", "Thermal Analysis", "Research"],
            status: "Coming Soon",
            image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
        }
    ],
    skills: {
        technical: [
            "Green Building Standards (LEED, IGBC, GRIHA)",
            "Energy Modeling & Simulation",
            "Environmental Impact Assessment",
            "Solar PV System Design",
            "Hybrid Energy Systems",
            "Building Envelope Optimization",
            "ASHRAE & ISO Compliance",
            "Renewable Energy Feasibility"
        ],
        software: [
            "AutoCAD", "SketchUp", "Fusion 360", "ArcGIS", "DesignBuilder", "PVsyst", "Microsoft Office Suite", "MATLAB"
        ],
        soft: [
            "Project Management", "Technical Writing", "Client Consultation", "Team Collaboration", "Research & Analysis", "Problem Solving"
        ]
    },
    qualifications: {
        certifications: [
            { name: "LEED Green Associate", issuer: "USGBC", status: "Pending" }
        ],
        education: [
            { name: "B.Tech Chemical Engineering", issuer: "Lovely Professional University", year: "2022-2026" }
        ],
        courses: [
            { name: "Sustainable Architecture", issuer: "IIT Roorkee", year: "2024" },
            { name: "Energy Supply Systems", issuer: "TU Delft", year: "2024" },
            { name: "Solar Energy for Engineers", issuer: "Coursera", year: "2023" }
        ],
        other: [
            { name: "Green Building Concepts", issuer: "PMI", year: "2024" },
            { name: "Waste-to-Energy", issuer: "IIT Roorkee", year: "2023" }
        ]
    },
    cocurricular: [
        { title: "Solar Awareness Drive Volunteer", description: "Organized community drives to promote solar energy adoption in rural areas.", icon: "ri-sun-line" },
        { title: "University Eco-Club Member", description: "Active member contributing to campus sustainability initiatives and green events.", icon: "ri-group-line" },
        { title: "Tree Plantation Campaign", description: "Participated in large-scale tree plantation drives for urban reforestation.", icon: "ri-plant-fill" },
        { title: "Sustainability Workshop Speaker", description: "Delivered workshops on sustainable living practices for student communities.", icon: "ri-mic-line" }
    ],
    interests: [
        { title: "Fiction Writing", description: "Drafting a Solarpunk novel exploring themes of renewable utopias and social ecology. Currently working on world-building and character arcs.", icon: "ri-quill-pen-line", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop" },
        { title: "Indie Game Dev", description: "Developing a pixel-art environmental simulation game in Unity. Focus on realistic weather systems and sustainable resource management mechanics.", icon: "ri-gamepad-line", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop" }
    ]
};

/* =========================================
   2. RENDERING LOGIC
   ========================================= */

// Helper to create Elements safely
function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// 2.1 Render Hero Bio
function renderHero() {
    const bioText = document.getElementById('hero-bio');
    if (bioText) bioText.innerText = portfolioData.personal.bio;

    // Resume link update
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) downloadBtn.href = portfolioData.personal.resume;
}

// 2.2 Render Experience (Timeline with Logos)
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    portfolioData.experience.forEach(job => {
        const card = createElement('div', 'experience-card', '');

        // Dot
        const dot = createElement('div', 'timeline-dot', '');
        card.appendChild(dot);

        // Logo Section
        const logoDiv = createElement('div', 'exp-logo-container', `
            <img src="${job.logo}" alt="${job.company} Logo" class="exp-logo">
        `);

        // Content Section
        const contentDiv = createElement('div', 'exp-content', '');

        const header = createElement('div', 'exp-header', `
            <div class="exp-role">${job.role}</div>
            <div class="exp-meta"><i class="ri-calendar-line"></i> ${job.date}</div>
        `);

        const company = createElement('div', 'exp-company', `
            <i class="ri-building-line"></i> ${job.company} <span style="margin: 0 4px">•</span> ${job.location}
        `);

        const desc = createElement('div', 'exp-desc', job.description);

        contentDiv.appendChild(header);
        contentDiv.appendChild(company);
        contentDiv.appendChild(desc);

        card.appendChild(logoDiv);
        card.appendChild(contentDiv);

        container.appendChild(card);
    });
}

// 2.3 Render Projects (With Images, 2 Grid Rows)
function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;

    portfolioData.projects.forEach(project => {
        const isComingSoon = project.status === "Coming Soon";
        const cardClass = isComingSoon ? 'project-card coming-soon' : 'project-card';
        const card = createElement('div', cardClass, '');

        // Arrow Redirect
        const arrow = createElement('i', 'ri-arrow-right-up-line project-arrow', '');
        card.appendChild(arrow);

        // Redirect Logic
        card.addEventListener('click', () => {
            const link = isComingSoon ? '#projects' : portfolioData.personal.linkedin;
            if (!isComingSoon) window.open(link, '_blank');
        });

        // Project Image
        const imgDiv = createElement('div', 'project-img-container', `
            <img src="${project.image}" alt="${project.title}" class="project-img">
        `);
        card.appendChild(imgDiv);

        // Content Container
        const contentDiv = createElement('div', 'project-content', '');

        // Title
        const title = createElement('h3', 'project-title', project.title);

        // Desc
        const desc = createElement('p', 'project-desc', project.description);

        // Tags
        const tagsContainer = createElement('div', 'project-tags', '');
        project.tags.forEach(tag => {
            const span = createElement('span', 'tag', tag);
            tagsContainer.appendChild(span);
        });

        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        contentDiv.appendChild(tagsContainer);

        card.appendChild(contentDiv);
        container.appendChild(card);
    });
}

// 2.4 Render Skills (Text Only, Touch Responsive)
function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;

    const categories = [
        { id: 'technical', title: 'Technical Skills', icon: 'ri-tools-line', theme: 'tech-theme' },
        { id: 'software', title: 'Software & Tools', icon: 'ri-macbook-line', theme: 'soft-theme' },
        { id: 'soft', title: 'Soft Skills', icon: 'ri-user-voice-line', theme: 'tool-theme' }
    ];

    categories.forEach(cat => {
        const catDiv = createElement('div', 'skill-category ' + cat.theme, '');

        const header = createElement('div', 'skill-category-header', `
            <i class="${cat.icon} skill-icon"></i>
            <h3 class="skill-title">${cat.title}</h3>
        `);

        const list = createElement('div', 'skill-list-text', ''); // Changed class

        portfolioData.skills[cat.id].forEach(skill => {
            // Text only, touch responsive (handled in CSS via padding/hover)
            const item = createElement('span', 'skill-text-item', skill);
            list.appendChild(item);
        });

        catDiv.appendChild(header);
        catDiv.appendChild(list);
        container.appendChild(catDiv);
    });
}

// 2.5 Render Qualifications (Auto height)
function renderQualifications() {
    const container = document.getElementById('qualifications-list');
    if (!container) return;

    const sects = [
        { key: 'certifications', title: 'Professional Certifications', icon: 'ri-medal-line' },
        { key: 'education', title: 'Formal Education', icon: 'ri-graduation-cap-line' },
        { key: 'courses', title: 'Courses', icon: 'ri-book-open-line' },
        { key: 'other', title: 'Other Certificates', icon: 'ri-file-paper-line' }
    ];

    sects.forEach(sect => {
        const card = createElement('div', 'qual-card', '');

        const header = createElement('div', 'qual-header', `
            <i class="${sect.icon}"></i>
            <h3>${sect.title}</h3>
        `);

        const ul = createElement('ul', 'qual-list', '');

        portfolioData.qualifications[sect.key].forEach(item => {
            const li = document.createElement('li');
            const pendingBadge = item.status === 'Pending' ? '<span class="qual-status">Pending</span>' : '';
            li.innerHTML = `
                <span class="qual-name">${item.name} ${pendingBadge}</span>
                <span class="qual-issuer">${item.issuer} ${item.year ? '• ' + item.year : ''}</span>
            `;
            ul.appendChild(li);
        });

        card.appendChild(header);
        card.appendChild(ul);
        container.appendChild(card);
    });
}

// 2.6 Render Co-Curricular & Interests
function renderOthers() {
    // Co-Curricular
    const coList = document.getElementById('cocurricular-list');
    if (coList) {
        portfolioData.cocurricular.forEach(item => {
            const card = createElement('div', 'cocurr-card', `
                <div class="cocurr-icon"><i class="${item.icon}"></i></div>
                <h4 class="cocurr-title">${item.title}</h4>
                <p class="cocurr-desc">${item.description}</p>
            `);
            coList.appendChild(card);
        });
    }

    // Interests
    const intList = document.getElementById('interests-list');
    if (intList) {
        portfolioData.interests.forEach(item => {
            const card = createElement('div', 'interest-card', `
                <img src="${item.img}" alt="${item.title}" class="interest-img">
                <div class="interest-content">
                    <div class="interest-header">
                        <i class="${item.icon} interest-icon"></i>
                        <h4>${item.title}</h4>
                    </div>
                    <p class="interest-desc">${item.description}</p>
                </div>
            `);
            intList.appendChild(card);
        });
    }
}


/* =========================================
   3. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Render all sections
    renderHero();
    renderExperience();
    renderProjects();
    renderSkills();
    renderQualifications();
    renderOthers();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});
