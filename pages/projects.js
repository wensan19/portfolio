const allProjectsData = [
  {
    title: "Pawfect Wellness",
    label: "Project 1 - BED CA2",
    category: "academic",
    meta: "Full-Stack Web Development",
    embedUrl: "https://www.youtube.com/embed/a32uwPxuJTE",
    alt: "Pawfect Wellness demo video",
    description:
      "Pawfect Wellness is a full-stack wellness web application that gamifies healthy habits through a virtual pet system. Users can buy a dog from a blind box using points, raise and care for their dog by completing exercises and wellness challenges, and stay motivated through an interactive reward-based experience. The platform includes user authentication, database-backed dynamic content, and engaging features that encourage users to build healthier routines in a fun and meaningful way.",
    highlights: [
      "Built a full-stack web application with authentication and database integration.",
      "Created a virtual pet wellness system where users buy dogs from blind boxes and raise them through exercise.",
      "Designed interactive and reward-based features to make wellness tracking more engaging and motivating.",
    ],
    links: [
      {
        label: "Click to Open Website",
        url: "https://pawfect-wellness-bed.onrender.com",
        isWebsiteCta: true,
      },
    ],
    websiteUrl: "https://pawfect-wellness-bed.onrender.com",
  },
  {
    title: "Job Views Factor Analysis",
    label: "Project 2 - PDAS CA1",
    category: "academic",
    meta: "Data Analysis & Presentation",
    alt: "Job views factor analysis notebook preview",
    mediaType: "notebook",
    documents: [
      {
        label: "PDAS",
        title: "Job Views Factor Analysis",
        fileName: "DAAAFT1B07-2518367-GohWenSan.ipynb",
        url: "../assets/projects/pdas/DAAAFT1B07-2518367-GohWenSan.ipynb",
      },
    ],
    additionalPdf: {
      title: "Interactive PDF Viewer",
      fileName: "PDAS CA1 PPT.pdf",
      url: "../assets/projects/pdas/PDAS CA1 PPT.pdf",
      description:
        "PDF presentation summary for the job views analysis, including the research question, key factors, and findings.",
    },
    description:
      "Data analysis project exploring which factors, including salary, job title, work type, and geographical location, have the greatest impact on the number of job views. Research question: Which factors, including salary, job title, work type, and geographical location, have the greatest impact on the number of job views?",
    highlights: [
      "Explored key variables linked to job posting visibility and audience engagement.",
      "Compared factors such as salary, job title, work type, and location.",
      "Presented findings in a concise, portfolio-ready data analysis format.",
    ],
  },
  {
    title: "Customer Segmentation & Energy Consumption Forecasting",
    label: "Project 3 - AI/ML CA2",
    category: "academic",
    meta: "Python, Machine Learning & Time-Series Forecasting",
    alt: "AI and machine learning notebook preview",
    mediaType: "notebook",
    documents: [
      {
        label: "Part A",
        title: "Customer Segmentation",
        fileName: "p2518367_CA2_PartA_GOHWENSAN.ipynb",
        url: "../assets/projects/aiml/p2518367_CA2_PartA_GOHWENSAN.ipynb",
      },
      {
        label: "Part B",
        title: "Energy Consumption Forecasting",
        fileName: "p2518367_CA2_PartB_GOHWENSAN.ipynb",
        url: "../assets/projects/aiml/p2518367_CA2_PartB_GOHWENSAN.ipynb",
      },
    ],
    additionalPdf: {
      title: "Interactive PDF Viewer",
      fileName: "job-views-factor-analysis.pdf",
      url: "../assets/projects/aiml/job-views-factor-analysis.pdf",
      description:
        "PDF report supporting the AI/ML notebook work, with visual explanations, modelling results, and project findings.",
    },
    description:
      "Python-based AI/ML project that combines unsupervised learning and time-series forecasting in Jupyter notebooks. The first part uses unsupervised learning to perform customer segmentation, describe the characteristics of each cluster, and identify which cluster needs the most attention and why. The second part applies a full machine learning workflow to the Energy Consumption dataset by building and tuning Statsmodels forecasting models for gas, electricity, and water, evaluating performance using proper train, validation, and test splits, and producing 60-month forecasts with clear analysis, charts, and reporting.",
    highlights: [
      "Applied unsupervised learning to perform customer segmentation and cluster interpretation.",
      "Built and tuned Statsmodels forecasting models for gas, electricity, and water usage.",
      "Produced clear evaluation, visual analysis, and 60-month forecasts in notebook reports.",
    ],
  },
  {
    title: "Thryve",
    label: "Independent Project",
    category: "independent",
    meta: "AI-Assisted Wellness Tracking Web App",
    image: "../assets/images/project/thryve.png",
    embedUrl: "https://www.youtube.com/embed/-m7Xa6_BaBE",
    alt: "Thryve wellness tracking app preview",
    websiteUrl: "https://thryve-kohl.vercel.app/",
    description:
      "Thryve is a mobile-first wellness web app designed to help users track meals, calories, workouts, and daily progress in a calmer, more motivating way. The current version uses the Gemini API to support AI-assisted meal analysis, ingredient-based calorie estimation, food detection, exercise recognition, and workout calorie estimates, while keeping results editable so users can refine their logs. The app also includes social sharing features for connecting with friends, and my future goal is to replace the current AI integration with self-trained language models.",
    highlights: [
      "Designed a mobile-first wellness tracking experience for meals, workouts, calories, and daily progress.",
      "Connected the Gemini API for AI-assisted food detection and calorie estimation.",
      "Built editable meal analysis results so users can adjust AI-generated suggestions.",
      "Supported exercise recognition and workout calorie estimation through AI-assisted inputs.",
      "Included social sharing and friends features to make progress feel more connected.",
      "Planned a future AI layer using self-trained LLMs to replace the current Gemini API integration.",
    ],
    links: [
      {
        label: "Click to Open Website",
        url: "https://thryve-kohl.vercel.app/",
        isWebsiteCta: true,
      },
    ],
  },
  {
    title: "CKA Website Draft",
    label: "Professional Work",
    category: "professional",
    meta: "Website Drafting in VS Code",
    image: "../assets/images/project/ckadraftWEB.png",
    alt: "CKA website draft preview",
    websiteUrl: "https://wensan19.github.io/cka-website/",
    websiteButtonLabel: "Click to Open Website",
    description:
      "A replacement website draft created in VS Code and presented to the company as a possible update to the current site. The draft was designed as a cleaner and more modern direction, and it is still under company review.",
    highlights: [
      "Drafted a replacement website concept for company review.",
      "Presented a cleaner web direction as an alternative to the current website.",
      "Used front-end development skills to build and refine the draft.",
    ],
    links: [
      {
        label: "Click to Open Website",
        url: "https://wensan19.github.io/cka-website/",
        isWebsiteCta: true,
      },
    ],
  },
  {
    title: "NFC Name Card & Contact Website",
    label: "Professional Work",
    category: "professional",
    meta: "Adobe Design & Personal Contact Site",
    image: "../assets/images/project/nameCard.jpeg",
    alt: "Name card and NFC contact website project preview",
    websiteUrl: "https://cka-design.github.io/cheryl-contact-card/",
    websiteButtonLabel: "View Sample Contact Site",
    description:
      "A branding and contact-sharing project where I designed staff name cards in Adobe and created personalised contact websites for NFC card use. The work focused on making contact details easier to share while supporting a more consistent and accessible staff identity.",
    highlights: [
      "Created personalised contact websites for NFC card usage.",
      "Improved accessibility and convenience for sharing professional contact details.",
    ],
    links: [
      {
        label: "View Sample Contact Site",
        url: "https://cka-design.github.io/cheryl-contact-card/",
        isWebsiteCta: true,
      },
    ],
  },
  {
    title: "SketchUp 3D Modelling Support",
    label: "Professional Work",
    category: "professional",
    meta: "3D Modelling & Floor Plan Interpretation",
    image: "../assets/images/work/model1.jpeg",
    alt: "SketchUp architectural modelling work",
    imageCarousel: [
      {
        src: "../assets/images/work/model1.jpeg",
        alt: "SketchUp architectural modelling work preview 1",
      },
      {
        src: "../assets/images/work/model2.jpeg",
        alt: "SketchUp architectural modelling work preview 2",
      },
    ],
    description:
      "A workplace modelling project where I supported architectural visualisation by interpreting floor plans and translating spatial information into SketchUp models. The work helped me understand how accurate 3D models can support design communication and project discussions.",
    highlights: [
      "Created SketchUp models based on architectural floor plans.",
      "Practised interpreting layout drawings, measurements, and spatial details.",
      "Supported visual preparation for clearer architectural communication.",
    ],
  },
  {
    title: "WordPress Website Revamp",
    label: "Professional Work",
    category: "professional",
    meta: "WordPress Website Support",
    image: "../assets/images/work/website.jpeg",
    alt: "WordPress website revamp preview",
    websiteUrl: "https://www.cka-design.com/",
    websiteButtonLabel: "Click to Open Website",
    description:
      "A company website update completed in WordPress with a focus on making the site cleaner, easier to navigate, and more manageable for non-technical staff. The project allowed me to apply web design judgement while considering long-term usability for the team.",
    highlights: [
      "Updated and refined website content using WordPress.",
      "Improved clarity, navigation, and ease of maintenance.",
      "Designed with non-technical staff manageability in mind.",
    ],
    links: [
      {
        label: "Click to Open Website",
        url: "https://www.cka-design.com/",
        isWebsiteCta: true,
      },
    ],
  },
  {
    title: "Project Video Production",
    label: "Professional Work",
    category: "professional",
    meta: "Video Editing & Multimedia Support",
    embedUrl: "https://www.youtube.com/embed/OsfIkdVPlN0",
    alt: "One Shenton project video",
    description:
      "A professional video production piece created to present project visuals in a clear and polished format. This work focused on organising visual content, refining pacing, and supporting workplace communication through multimedia presentation.",
    highlights: [
      "Produced a focused project video for professional presentation.",
      "Practised video editing, sequencing, and visual organisation.",
      "Used multimedia production to support clearer project communication.",
    ],
  },
];

const projectsData = [...allProjectsData];

createShowcasePage(projectsData);

const projectFilterButtons = document.querySelectorAll("[data-project-filter]");
const projectEmptyState = document.getElementById("project-empty-state");
const showcaseCarouselShell = document.getElementById(
  "showcase-carousel-shell",
);
const showcaseGalleryShell = document.getElementById("showcase-gallery-shell");
const showcaseGalleryGrid = document.getElementById("showcase-gallery-grid");
const viewAllButton = document.getElementById("view-all-button");
const viewCarouselButton = document.getElementById("view-carousel-button");
const previousShowcaseButton = document.getElementById(
  "previous-showcase-button",
);
const nextShowcaseButton = document.getElementById("next-showcase-button");
const showcaseTitle = document.getElementById("showcase-title");
const showcaseMeta = document.getElementById("showcase-meta");
const projectMobileTitle = document.getElementById("project-mobile-title");
const projectMobileMeta = document.getElementById("project-mobile-meta");
const projectJumpToggle = document.getElementById("project-jump-toggle");
const projectJumpPanel = document.getElementById("project-jump-panel");
const projectJumpList = document.getElementById("project-jump-list");
let currentProjectCategory = "academic";

function getProjectsByCategory(category) {
  return allProjectsData.filter((project) => project.category === category);
}

function getCategoryLabel(category) {
  if (category === "academic") {
    return "Academic Projects";
  }

  if (category === "independent") {
    return "Independent Projects";
  }

  return "Professional Work";
}

function closeProjectJumpMenu() {
  if (!projectJumpPanel || !projectJumpToggle) {
    return;
  }

  projectJumpPanel.classList.add("is-hidden");
  projectJumpToggle.setAttribute("aria-expanded", "false");
}

function toggleProjectJumpMenu() {
  if (!projectJumpPanel || !projectJumpToggle) {
    return;
  }

  const isOpen = !projectJumpPanel.classList.contains("is-hidden");

  projectJumpPanel.classList.toggle("is-hidden", isOpen);
  projectJumpToggle.setAttribute("aria-expanded", String(!isOpen));
}

function renderProjectJumpMenu() {
  if (!projectJumpList) {
    return;
  }

  const categories = ["academic", "independent", "professional"];

  projectJumpList.innerHTML = "";

  categories.forEach((category) => {
    const categoryProjects = getProjectsByCategory(category);

    if (categoryProjects.length === 0) {
      return;
    }

    const group = document.createElement("div");
    group.className = "project-jump-group";

    const heading = document.createElement("p");
    heading.className = "project-jump-category";
    heading.textContent = getCategoryLabel(category);
    group.appendChild(heading);

    categoryProjects.forEach((project, index) => {
      const button = document.createElement("button");
      button.className = "project-jump-item";
      button.type = "button";
      button.textContent = project.title;
      button.addEventListener("click", () => {
        setProjectFilter(category, index);
        closeProjectJumpMenu();
      });

      group.appendChild(button);
    });

    projectJumpList.appendChild(group);
  });
}

function tagGalleryCards() {
  const galleryCards = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card",
  );

  galleryCards.forEach((card, index) => {
    const project = allProjectsData[index];

    if (project) {
      card.dataset.projectCategory = project.category;
      card.dataset.projectIndex = String(index);
      card.classList.toggle("project-website-card", Boolean(project.websiteUrl));
    }
  });
}

function removeNotebookPreviewsFromGallery() {
  const notebookViewers = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card--document > .document-viewer",
  );

  notebookViewers.forEach((viewer) => {
    viewer.remove();
  });
}

function movePdfPreviewsToTop() {
  const documentCards = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card--document",
  );

  documentCards.forEach((card) => {
    const pdfViewer = card.querySelector(".project-pdf-viewer-widget");

    if (pdfViewer) {
      card.prepend(pdfViewer);
    }
  });
}

function bindGalleryCardClicks() {
  const galleryCards = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card",
  );

  galleryCards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Open this project in slideshow view");

    function openProjectFromCard(event) {
      if (event.target.closest("a, button")) {
        return;
      }

      const project =
        allProjectsData[Number.parseInt(card.dataset.projectIndex, 10)];

      if (!project) {
        return;
      }

      const filteredProjects = getProjectsByCategory(project.category);
      const projectIndex = filteredProjects.indexOf(project);

      setProjectFilter(project.category, projectIndex);
    }

    card.addEventListener("click", openProjectFromCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectFromCard(event);
      }
    });
  });
}

function getActiveProject() {
  return allProjectsData.find((project) => project.title === showcaseTitle.textContent);
}

function syncMobileProjectTitle() {
  if (projectMobileTitle) {
    projectMobileTitle.textContent = showcaseTitle.textContent;
  }

  if (projectMobileMeta) {
    projectMobileMeta.textContent = showcaseMeta.textContent;
  }
}

function clearWebsiteProjectAction(showcaseImageFrame) {
  if (showcaseImageFrame) {
    showcaseImageFrame.classList.remove("project-website-media");
    showcaseImageFrame.removeAttribute("role");
    showcaseImageFrame.removeAttribute("tabindex");
    showcaseImageFrame.removeAttribute("aria-label");
    showcaseImageFrame.onclick = null;
    showcaseImageFrame.onkeydown = null;
  }
}

function renderWebsiteProjectAction(project, showcaseImageFrame) {
  clearWebsiteProjectAction(showcaseImageFrame);

  if (!project || !project.websiteUrl || !showcaseImageFrame) {
    return;
  }

  const zoomableImage = showcaseImageFrame.querySelector("#showcase-main-image");
  if (zoomableImage) {
    const cleanImage = zoomableImage.cloneNode(true);
    cleanImage.removeAttribute("role");
    cleanImage.removeAttribute("tabindex");
    cleanImage.removeAttribute("aria-label");
    cleanImage.removeAttribute("data-zoom-bound");
    zoomableImage.replaceWith(cleanImage);
  }

  showcaseImageFrame.classList.add("project-website-media");
  showcaseImageFrame.setAttribute("role", "link");
  showcaseImageFrame.tabIndex = 0;
  showcaseImageFrame.setAttribute(
    "aria-label",
    `Open ${project.title} website in a new tab`,
  );
  showcaseImageFrame.onclick = (event) => {
    if (event.target.closest("a, button, video, iframe")) {
      return;
    }

    window.open(project.websiteUrl, "_blank", "noopener,noreferrer");
  };
  showcaseImageFrame.onkeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(project.websiteUrl, "_blank", "noopener,noreferrer");
    }
  };
}

function createProjectImageCarousel(project) {
  let activeImageIndex = 0;
  const carousel = document.createElement("div");
  carousel.className = "project-media-carousel";

  const image = document.createElement("img");
  image.id = "showcase-main-image";
  image.className = "project-media-carousel-image";

  const controls = document.createElement("div");
  controls.className = "project-media-carousel-controls";

  const previousButton = document.createElement("button");
  previousButton.className = "showcase-nav-button";
  previousButton.type = "button";
  previousButton.textContent = "Previous Image";

  const counter = document.createElement("p");
  counter.className = "showcase-slide-counter";

  const nextButton = document.createElement("button");
  nextButton.className = "showcase-nav-button";
  nextButton.type = "button";
  nextButton.textContent = "Next Image";

  function renderCarouselImage() {
    const imageItem = project.imageCarousel[activeImageIndex];

    image.src = imageItem.src;
    image.alt = imageItem.alt;
    counter.textContent = `${activeImageIndex + 1} / ${project.imageCarousel.length}`;
  }

  previousButton.addEventListener("click", (event) => {
    event.stopPropagation();
    activeImageIndex =
      (activeImageIndex - 1 + project.imageCarousel.length) %
      project.imageCarousel.length;
    renderCarouselImage();
  });

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    activeImageIndex = (activeImageIndex + 1) % project.imageCarousel.length;
    renderCarouselImage();
  });

  controls.appendChild(previousButton);
  controls.appendChild(counter);
  controls.appendChild(nextButton);
  carousel.appendChild(image);
  carousel.appendChild(controls);
  renderCarouselImage();

  return carousel;
}

function syncActiveProjectMedia() {
  const activeProject = getActiveProject();
  const showcaseImageFrame = document.querySelector(".showcase-image-frame");

  syncMobileProjectTitle();

  if (!activeProject || !showcaseImageFrame) {
    return;
  }

  if (
    Array.isArray(activeProject.imageCarousel) &&
    activeProject.imageCarousel.length > 1
  ) {
    showcaseImageFrame.innerHTML = "";
    showcaseImageFrame.appendChild(createProjectImageCarousel(activeProject));
    renderWebsiteProjectAction(activeProject, showcaseImageFrame);
    return;
  }

  if (!activeProject.videoUrl) {
    renderWebsiteProjectAction(activeProject, showcaseImageFrame);
    return;
  }

  const video = document.createElement("video");
  video.className = "showcase-video-embed";
  video.src = activeProject.videoUrl;
  if (activeProject.image && !activeProject.videoOnly) {
    video.poster = activeProject.image;
  }
  video.controls = true;
  video.preload = "metadata";
  video.setAttribute("playsinline", "");
  video.setAttribute("aria-label", activeProject.alt || activeProject.title);

  showcaseImageFrame.innerHTML = "";
  showcaseImageFrame.appendChild(video);
  renderWebsiteProjectAction(activeProject, showcaseImageFrame);
}

function syncGalleryVideos() {
  const galleryCards = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card",
  );

  galleryCards.forEach((card) => {
    const project =
      allProjectsData[Number.parseInt(card.dataset.projectIndex, 10)];

    if (
      !project ||
      !project.videoUrl ||
      project.galleryMedia === "image" ||
      card.dataset.videoSynced === "true"
    ) {
      return;
    }

    const video = document.createElement("video");
    video.className = "showcase-video-embed";
    video.src = project.videoUrl;
    if (project.image && !project.videoOnly) {
      video.poster = project.image;
    }
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", project.alt || project.title);

    const firstMedia = card.firstElementChild;
    if (firstMedia) {
      card.replaceChild(video, firstMedia);
      card.dataset.videoSynced = "true";
    }
  });
}

function updateGalleryFilter(category) {
  const galleryCards = showcaseGalleryGrid.querySelectorAll(
    ".showcase-gallery-card",
  );

  galleryCards.forEach((card) => {
    const shouldShow =
      category === "all" || card.dataset.projectCategory === category;

    card.classList.toggle("is-filtered-out", !shouldShow);
  });
}

function renderProjectAtIndex(filteredProjects, targetIndex = 0) {
  const safeIndex = Math.min(
    Math.max(targetIndex, 0),
    filteredProjects.length - 1,
  );

  projectsData.splice(0, projectsData.length, filteredProjects[0]);
  nextShowcaseButton.click();
  projectsData.splice(0, projectsData.length, ...filteredProjects);

  if (safeIndex === 0 && filteredProjects.length > 1) {
    nextShowcaseButton.click();
    previousShowcaseButton.click();
    return;
  }

  for (let index = 0; index < safeIndex; index += 1) {
    nextShowcaseButton.click();
  }
}

function setProjectFilter(category, targetIndex = 0) {
  currentProjectCategory = category;
  const filteredProjects = getProjectsByCategory(category);
  const hasProjects = filteredProjects.length > 0;

  projectFilterButtons.forEach((button) => {
    const isActive = button.dataset.projectFilter === category;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  projectEmptyState.classList.toggle("is-hidden", hasProjects);
  showcaseCarouselShell.classList.toggle("is-hidden", !hasProjects);
  showcaseGalleryShell.classList.add("is-hidden");
  viewAllButton.classList.remove("is-hidden");
  viewCarouselButton.classList.add("is-hidden");

  updateGalleryFilter(category);

  if (hasProjects) {
    renderProjectAtIndex(filteredProjects, targetIndex);
    syncActiveProjectMedia();
  }
}

function getInitialProjectState() {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  const category = ["academic", "independent", "professional"].includes(
    requestedCategory,
  )
    ? requestedCategory
    : "academic";
  const requestedSlide = Number.parseInt(params.get("slide"), 10);
  const slide = Number.isNaN(requestedSlide) ? 0 : requestedSlide;

  return { category, slide };
}

tagGalleryCards();
removeNotebookPreviewsFromGallery();
movePdfPreviewsToTop();
syncGalleryVideos();
bindGalleryCardClicks();
renderProjectJumpMenu();
const initialProjectState = getInitialProjectState();
setProjectFilter(initialProjectState.category, initialProjectState.slide);

if (projectJumpToggle) {
  projectJumpToggle.addEventListener("click", toggleProjectJumpMenu);
}

document.addEventListener("click", (event) => {
  if (projectJumpPanel && !event.target.closest("#project-jump-menu")) {
    closeProjectJumpMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectJumpMenu();
  }
});

projectFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setProjectFilter(button.dataset.projectFilter);
  });
});

previousShowcaseButton.addEventListener("click", () => {
  window.setTimeout(syncActiveProjectMedia, 0);
});

nextShowcaseButton.addEventListener("click", () => {
  window.setTimeout(syncActiveProjectMedia, 0);
});

viewAllButton.addEventListener("click", () => {
  const hasProjects = allProjectsData.length > 0;

  projectEmptyState.classList.toggle("is-hidden", hasProjects);
  updateGalleryFilter("all");

  if (!hasProjects) {
    showcaseGalleryShell.classList.add("is-hidden");
    viewAllButton.classList.remove("is-hidden");
    viewCarouselButton.classList.add("is-hidden");
  }
});

viewCarouselButton.addEventListener("click", () => {
  const hasProjects = getProjectsByCategory(currentProjectCategory).length > 0;

  showcaseCarouselShell.classList.toggle("is-hidden", !hasProjects);
  projectEmptyState.classList.toggle("is-hidden", hasProjects);
  viewAllButton.classList.remove("is-hidden");
  viewCarouselButton.classList.add("is-hidden");
});
