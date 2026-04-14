# Wen San Portfolio Website

This project is a personal portfolio website built using plain HTML, CSS, and JavaScript. It presents my academic work, projects, work experience, certificates, leadership, community involvement, and interests through two viewing styles: an interactive airport check-in experience and a simpler portfolio layout.

The portfolio was designed to be both creative and professional. The airport concept turns each section into a check-in item, while the simple version provides a cleaner and more traditional browsing experience.

---

# Purpose of this Portfolio Website Purpose of the Project

This portfolio was created to present my work in a way that is both memorable and reflective of my personality. Instead of using only a conventional portfolio design, I built an airport check-in themed experience to make the site more interactive and visually engaging. At the same time, I included a simple portfolio version so visitors can also browse my work in a more familiar and straightforward way.

---

## Features

- Interactive Airport Check-In Mode
  - Drag 3D portfolio items into the airport scanner to unlock sections
  - Includes 7 main sections: About Me, Interests, Certificates, Work Experience, Leadership, Community Service & Enrichments, and Projects
  - Progress is saved using localStorage
  - Final boarding pass celebration appears after all sections are checked in

- Simple Portfolio Mode
  - Cleaner and easier browsing layout
  - Includes quick access to all major portfolio sections
  - Provides direct links to individual simple detail pages

- Portfolio Section Pages
  - About Me
  - Projects
  - Work Experience
  - Certificates
  - Community & Enrichment
  - Leadership
  - Interests
  - Recommendation

- Interactive and Media-Rich Content
  - 3D model previews on the interactive homepage
  - Image galleries and carousels
  - Embedded videos
  - PDF/document viewers
  - Recommendation letter preview
  - Resume access

- UI and Experience Features
  - Light and dark theme toggle
  - Responsive design for desktop and mobile
  - Mobile hold-and-drag support
  - Saved theme and progress state
  - Segment navigation menu for simple detail pages

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google `model-viewer` for 3D model rendering

---

## Main Pages

- `index.html` -> interactive airport check-in homepage
- `simple.html` -> simplified portfolio homepage
- `resume.html` -> resume page

---

## Pages Folder Structure

### Interactive / Main Section Pages

- `pages/about.html`
- `pages/projects.html`
- `pages/experience.html`
- `pages/certificates.html`
- `pages/community.html`
- `pages/leadership.html`
- `pages/interests.html`
- `pages/recommendation.html`

### Simple Portfolio Detail Pages

- `pages/simple-about.html`
- `pages/simple-projects.html`
- `pages/simple-experience.html`
- `pages/simple-certificates.html`
- `pages/simple-community.html`
- `pages/simple-leadership.html`
- `pages/simple-interests.html`

### Page Scripts

- `pages/certificates.js`
- `pages/community.js`
- `pages/experience.js`
- `pages/interests.js`
- `pages/leadership.js`
- `pages/projects.js`
- `pages/recommendation.js`
- `pages/showcase-page.js`

---

## Main Content Areas

### About Me

Introduces my background as a Singapore Polytechnic student in Applied AI & Data Analytics and shares more about my interests, values, and journey.

### Projects

Highlights selected projects including:

- **Pawfect Wellness** – a full-stack wellness web application
- **Job Views Factor Analysis** – a data analysis project on factors affecting job posting views
- **Customer Segmentation & Energy Consumption Forecasting** – an AI/ML notebook project covering clustering and forecasting

### Work Experience

Showcases internship work such as:

- WordPress website support
- digital and multimedia work
- 3D modelling and draft support
- website-related contributions

### Certificates

Displays certifications and learning achievements such as CPR + AED and DataCamp learning.

### Community & Enrichment

Includes activities such as:

- Hangzhou overseas learning trip
- terrarium and painting workshop
- community-based service experiences

### Leadership

Highlights leadership experiences such as:

- LEAP Camp
- Class Representative
- Group Leader in Swift UI Nano Bootcamp

### Interests

Showcases personal interests including volleyball, golf, vlogging, and other activities.

### Recommendation

Provides access to a recommendation letter.

---

## Interactive Homepage Experience

The interactive homepage uses an airport check-in concept where users drag portfolio objects into a scanner to unlock pages. Each object is linked to a section page, and the checked items are tracked in localStorage so progress remains saved after refresh.

Once all seven items are checked in, a final boarding pass overlay appears with contact links such as GitHub, LinkedIn, Email, and Resume.

---

## Simple Portfolio Experience

The simple portfolio homepage presents the same content in a more direct format. It includes:

- an introduction section
- project previews
- work experience previews
- certificate highlights
- community and enrichment highlights
- leadership highlights
- interests previews

The simple pages also support a segment navigation menu generated by JavaScript for easier movement between detail pages.

---

## Assets

The project uses an `assets/` folder for supporting materials such as:

- images
- project previews
- recommendation files
- videos
- 3D models
- resume files

### Models Folder

The interactive mode references the following 3D model files:

- `assets/models/me_in_3d.glb`
- `assets/models/interests_3D.glb`
- `assets/models/certificates_3D.glb`
- `assets/models/workEXP_3D.glb`
- `assets/models/leadership_3D.glb`
- `assets/models/community_3D.glb`
- `assets/models/projects_3D.glb`

Make sure the `assets/models/` folder is included when deploying, or the interactive draggable models will not appear.

---

## Styling and Responsiveness

The site includes:

- custom pastel-themed styling
- dark mode support
- responsive layouts for smaller screens
- image, gallery, and media frames that scale across devices
- dedicated styling for showcases, recommendation previews, embedded video, experience media, and PDF/document viewing

---

## Setup (Local)

1. Download or clone the project files.

2. Keep the file structure unchanged.

3. Open `index.html` in a browser to view the interactive version.

4. Open `simple.html` in a browser to view the simplified version.

No package installation is needed because this is a static HTML, CSS, and JavaScript website.

---

## Deployment

This project can be deployed on static hosting platforms such as:

- GitHub Pages
- Netlify
- Vercel

Make sure all folders, especially `assets/` and `pages/`, are uploaded together.

---

## Project Structure

```text
.
├── index.html
├── simple.html
├── resume.html
├── script.js
├── style.css
├── README.md
├── .nojekyll
├── assets
│   ├── images
│   ├── projects
│   ├── video
│   ├── letters
│   ├── models
│   └── ...
└── pages
    ├── about.html
    ├── certificates.html
    ├── certificates.js
    ├── community.html
    ├── community.js
    ├── experience.html
    ├── experience.js
    ├── interests.html
    ├── interests.js
    ├── leadership.html
    ├── leadership.js
    ├── projects.html
    ├── projects.js
    ├── recommendation.html
    ├── recommendation.js
    ├── showcase-page.js
    ├── simple-about.html
    ├── simple-certificates.html
    ├── simple-community.html
    ├── simple-experience.html
    ├── simple-interests.html
    ├── simple-leadership.html
    └── simple-projects.html
```

# Author

Goh Wen San

GitHub: https://github.com/wensan19
LinkedIn: https://www.linkedin.com/in/wen-san-goh-477641361/
Email: wensan.25@ichat.sp.edu.sg

---
