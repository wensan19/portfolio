const experienceData = [
  {
    title: "Multimedia & Admin Intern @ CKA Design Pte Ltd ",
    label: "Work Experience",
    duration: "(Mar 2025 - Apr 2025)",
    description:
      "This internship gave me hands-on experience in both creative production and administrative support within a professional design environment. I contributed as a video editor, photo editor, photographer, and data entry assistant. A key responsibility was producing a project video for One Shenton, where I handled the process from capturing quality footage to editing a compelling final product. I also refined photographs to suit the project’s branding and supported office operations through careful document organisation and record management. In addition, attending business meetings allowed me to develop a stronger understanding of professional communication, client engagement, and project coordination in real-world practice.",

    highlights: [
      "Produced a complete project video for One Shenton, from filming to final edit.",
      "Edited photos to align with branding and presentation goals.",
      "Handled data entry and document organisation to support daily operations.",
      "Built professional awareness through exposure to meetings, client interaction, and team coordination.",
    ],
    media: [
      {
        type: "image",
        src: "../assets/images/work/intern1.jpeg",
        alt: "Multimedia and admin internship at CKA Design",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/OsfIkdVPlN0",
        alt: "One Shenton Video",
      },
    ],
  },
  {
    title: "Web & Design Intern @ CKA Design Pte Ltd ",
    label: "Project Contribution",
    duration: "(Sep 2025 - Oct 2025)",
    description:
      "This internship allowed me to turn classroom knowledge into real-world practice. In the first half of my internship, I revamped and updated CKA’s website using WordPress, designing it to be clean, user-friendly, and easy for non-technical staff to manage after my internship ended. My background in Front-End Web Development at Singapore Polytechnic helped me apply concepts such as HTML, CSS, responsive design, and user experience in a professional setting. In the second half of my internship, I supported the remodelling of the Kong Meng San Phor Kark See Monastery columbarium, where I learned to read floor plans and use SketchUp to build 3D architectural models. I also contributed creatively by designing wallpaper concepts for the Singapore Recreation Club using Adobe Photoshop. This experience deepened both my technical and design skills, and gave me a stronger appreciation of how technology and creativity work together in professional projects.",

    highlights: [
      "Updated CKA's website on WordPress with accessibility and long-term usability in mind.",
      "Applied school-based front-end development skills to a live professional project.",
      "Built 3D architectural models in SketchUp based on real floor plans.",
      "Created wallpaper design concepts in Adobe Photoshop for the Singapore Recreation Club.",
    ],
    media: [
      {
        type: "image",
        src: "../assets/images/work/model1.jpeg",
        alt: "Architectural model or competition visual 1",
      },
      {
        type: "image",
        src: "../assets/images/work/model2.jpeg",
        alt: "Architectural model or competition visual 2",
      },
    ],
    websitePreview: {
      title: "CKA Design Website",
      description:
        "Visit the studio website to explore the firm's work and design direction.",
      url: "https://www.cka-design.com/",
      image: "../assets/images/work/website.jpeg",
      alt: "Preview card for the CKA Design website",
    },
  },
  {
    title: "Website & NFC Contact Design Support @ CKA Design Pte Ltd",
    label: "Work Experience",
    role: "Web Design, Name Card & Contact Website Support",
    duration: "Apr 2026",
    description:
      "Although this internship lasted only two weeks because of personal constraints, the shorter timeline pushed me to work with more focus and initiative. During this period, I drafted and presented a refreshed website concept for the company, helped edit and create staff name card materials, built personalised contact websites for NFC card use, and generated QR codes with support from Adobe tools. In my final few days, I continued contributing to the Kong Meng San Phor Kark See Monastery columbarium project by refining details and improving the visual preparation work. This experience strengthened my ability to adapt quickly, manage design tasks under time pressure, and produce useful digital materials for a real workplace setting.",
    highlights: [
      "Drafted and presented a refreshed website concept for company review.",
      "Created name card materials and personalised contact websites for NFC use.",
      "Generated QR codes and supported design preparation using Adobe tools.",
      "Continued refining columbarium visual details during the final stage of the internship.",
    ],
    hideMediaControls: true,
    media: [
      {
        type: "image",
        src: "../assets/images/project/ckadraftWEB.png",
        alt: "CKA draft website preview",
        url: "https://wensan19.github.io/cka-website/",
        cta: "Click to Open Website",
      },
    ],
    websitePreviews: [
      {
        title: "NFC Contact Website",
        description: "Open the sample personal contact website created for NFC card use.",
        url: "https://cka-design.github.io/cheryl-contact-card/",
        image: "../assets/images/project/nameCard.jpeg",
        alt: "Name card and NFC contact website preview",
        cta: "Click to Open Contact Site",
      },
    ],
  },
  // {
  //   title: "Learning Through Workplace Exposure",
  //   label: "Professional Growth",
  //   duration: "Ongoing Learning Experience",
  //   description:
  //     "Beyond specific tasks, the experience helped me better appreciate workplace communication, collaboration, and the value of learning through observation.",
  //   highlights: [
  //     "Observed how teams discuss and refine ideas together.",
  //     "Saw how projects move from concept to professional discussion.",
  //     "Gained a clearer sense of responsibility, teamwork, and initiative.",
  //   ],
  //   media: [
  //     {
  //       type: "video",
  //       src: "../assets/videos/experience-workplace-placeholder.mp4",
  //       alt: "Workplace exposure video placeholder",
  //     },
  //     {
  //       type: "image",
  //       src: "../assets/images/experience-workplace-placeholder.jpg",
  //       alt: "Professional workplace learning experience",
  //     },
  //   ],
  // },
];

const experienceDateOrder = {
  "Apr 2026": 0,
  "(Sep 2025 - Oct 2025)": 1,
  "(Mar 2025 - Apr 2025)": 2,
};

experienceData.sort(
  (firstEntry, secondEntry) =>
    (experienceDateOrder[firstEntry.duration] ?? 99) -
    (experienceDateOrder[secondEntry.duration] ?? 99),
);

const experienceLabel = document.getElementById("experience-label");
const experienceTitle = document.getElementById("experience-title");
const experienceRole = document.getElementById("experience-role");
const experienceDuration = document.getElementById("experience-duration");
const experienceDescription = document.getElementById("experience-description");
const experienceHighlights = document.getElementById("experience-highlights");
const experienceSlideCounter = document.getElementById(
  "experience-slide-counter",
);
const experienceMediaFrame = document.getElementById("experience-media-frame");
const experienceMediaCounter = document.getElementById(
  "experience-media-counter",
);
const experienceMediaControls = document.querySelector(
  ".experience-media-controls",
);
const experienceWebsitePreview = document.getElementById(
  "experience-website-preview",
);
const previousExperienceButton = document.getElementById(
  "previous-experience-button",
);
const nextExperienceButton = document.getElementById("next-experience-button");
const previousMediaButton = document.getElementById("previous-media-button");
const nextMediaButton = document.getElementById("next-media-button");
const viewAllButton = document.getElementById("view-all-button");
const viewCarouselButton = document.getElementById("view-carousel-button");
const experienceCarouselShell = document.getElementById(
  "experience-carousel-shell",
);
const galleryShell = document.getElementById("showcase-gallery-shell");
const galleryGrid = document.getElementById("showcase-gallery-grid");
const experienceZoomOverlay = document.getElementById(
  "experience-zoom-overlay",
);
const experienceZoomImage = document.getElementById("experience-zoom-image");
const experienceZoomClose = document.getElementById("experience-zoom-close");
const experienceZoomBackdrop = document.getElementById(
  "experience-zoom-backdrop",
);

let currentExperienceIndex = 0;
let currentMediaIndex = 0;

function getInitialExperienceIndex() {
  const slideValue = new URLSearchParams(window.location.search).get("slide");
  const slideIndex = Number.parseInt(slideValue, 10);

  if (Number.isNaN(slideIndex)) {
    return 0;
  }

  return Math.min(Math.max(slideIndex, 0), experienceData.length - 1);
}

function createMediaElement(mediaItem) {
  if (mediaItem.type === "youtube") {
    const iframe = document.createElement("iframe");
    iframe.className = "experience-video-embed";
    iframe.src = mediaItem.src;
    iframe.title = mediaItem.alt;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    return iframe;
  }

  if (mediaItem.type === "video") {
    const video = document.createElement("video");
    video.src = mediaItem.src;
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", mediaItem.alt);
    return video;
  }

  const image = document.createElement("img");
  image.src = mediaItem.src;
  image.alt = mediaItem.alt;

  if (mediaItem.url) {
    const link = document.createElement("a");
    link.className = "experience-media-link";
    link.href = mediaItem.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const note = document.createElement("p");
    note.className = "experience-website-note";
    note.textContent = mediaItem.cta || "Click to Open Website";

    link.appendChild(image);
    link.appendChild(note);
    return link;
  }

  image.className = "experience-zoomable-image";
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `Open larger view of ${mediaItem.alt}`);
  image.addEventListener("click", () =>
    openZoomedImage(mediaItem.src, mediaItem.alt),
  );
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openZoomedImage(mediaItem.src, mediaItem.alt);
    }
  });
  return image;
}

function renderMedia(entry, mediaIndex) {
  const mediaItem = entry.media[mediaIndex];
  const shouldHideMediaControls = Boolean(entry.hideMediaControls);

  experienceMediaFrame.innerHTML = "";
  experienceMediaFrame.appendChild(createMediaElement(mediaItem));

  experienceMediaCounter.textContent = `${mediaIndex + 1} / ${entry.media.length} media`;
  previousMediaButton.disabled = shouldHideMediaControls || entry.media.length <= 1;
  nextMediaButton.disabled = shouldHideMediaControls || entry.media.length <= 1;

  if (experienceMediaControls) {
    experienceMediaControls.classList.toggle("is-hidden", shouldHideMediaControls);
  }
}

function renderWebsitePreview(entry) {
  const previews = entry.websitePreviews || (entry.websitePreview ? [entry.websitePreview] : []);

  if (previews.length === 0) {
    experienceWebsitePreview.classList.add("is-hidden");
    experienceWebsitePreview.innerHTML = "";
    return;
  }

  experienceWebsitePreview.classList.remove("is-hidden");
  experienceWebsitePreview.innerHTML = previews
    .map((preview) => `
    <a class="experience-website-card" href="${preview.url}" target="_blank" rel="noopener noreferrer">
      <div class="experience-website-image-frame">
        <img src="${preview.image}" alt="${preview.alt}">
      </div>
      <p class="experience-website-note">${preview.cta || "Click on this to open website in a new tab"}</p>
    </a>
  `)
    .join("");
}

function openZoomedImage(src, alt) {
  experienceZoomImage.src = src;
  experienceZoomImage.alt = alt;
  experienceZoomOverlay.classList.remove("is-hidden");
  experienceZoomOverlay.setAttribute("aria-hidden", "false");
}

function closeZoomedImage() {
  experienceZoomOverlay.classList.add("is-hidden");
  experienceZoomOverlay.setAttribute("aria-hidden", "true");
  experienceZoomImage.src = "";
}

function renderExperience(index) {
  const entry = experienceData[index];

  experienceLabel.textContent = entry.label;
  experienceTitle.textContent = entry.title;
  experienceRole.textContent = entry.role;
  experienceDuration.textContent = entry.duration;
  experienceDescription.textContent = entry.description;
  experienceSlideCounter.textContent = `${index + 1} / ${experienceData.length}`;

  experienceHighlights.innerHTML = "";
  entry.highlights.forEach((highlight) => {
    const listItem = document.createElement("li");
    listItem.textContent = highlight;
    experienceHighlights.appendChild(listItem);
  });

  currentMediaIndex = 0;
  renderMedia(entry, currentMediaIndex);
  renderWebsitePreview(entry);
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  experienceData.forEach((entry) => {
    const firstMedia = entry.media[0];
    const card = document.createElement("article");
    card.className = "showcase-gallery-card experience-gallery-card";

    let mediaMarkup = "";

    if (firstMedia.type === "youtube") {
      mediaMarkup = `
        <iframe
          class="experience-video-embed"
          src="${firstMedia.src}"
          title="${firstMedia.alt}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy">
        </iframe>
      `;
    } else if (firstMedia.type === "video") {
      mediaMarkup = `
        <video controls preload="metadata" playsinline aria-label="${firstMedia.alt}">
          <source src="${firstMedia.src}">
        </video>
      `;
    } else if (firstMedia.url) {
      mediaMarkup = `
        <a class="experience-media-link" href="${firstMedia.url}" target="_blank" rel="noopener noreferrer">
          <img src="${firstMedia.src}" alt="${firstMedia.alt}">
        </a>
      `;
    } else {
      mediaMarkup = `<img src="${firstMedia.src}" alt="${firstMedia.alt}">`;
    }

    card.innerHTML = `
      ${mediaMarkup}
      <h3>${entry.title}</h3>
      <p>${entry.role}</p>
      <p>${entry.duration}</p>
    `;

    galleryGrid.appendChild(card);
  });
}

previousExperienceButton.addEventListener("click", () => {
  currentExperienceIndex =
    (currentExperienceIndex - 1 + experienceData.length) %
    experienceData.length;
  renderExperience(currentExperienceIndex);
});

nextExperienceButton.addEventListener("click", () => {
  currentExperienceIndex = (currentExperienceIndex + 1) % experienceData.length;
  renderExperience(currentExperienceIndex);
});

previousMediaButton.addEventListener("click", () => {
  const entry = experienceData[currentExperienceIndex];
  currentMediaIndex =
    (currentMediaIndex - 1 + entry.media.length) % entry.media.length;
  renderMedia(entry, currentMediaIndex);
});

nextMediaButton.addEventListener("click", () => {
  const entry = experienceData[currentExperienceIndex];
  currentMediaIndex = (currentMediaIndex + 1) % entry.media.length;
  renderMedia(entry, currentMediaIndex);
});

viewAllButton.addEventListener("click", () => {
  experienceCarouselShell.classList.add("is-hidden");
  galleryShell.classList.remove("is-hidden");
  viewAllButton.classList.add("is-hidden");
  viewCarouselButton.classList.remove("is-hidden");
});

viewCarouselButton.addEventListener("click", () => {
  galleryShell.classList.add("is-hidden");
  experienceCarouselShell.classList.remove("is-hidden");
  viewCarouselButton.classList.add("is-hidden");
  viewAllButton.classList.remove("is-hidden");
});

experienceZoomClose.addEventListener("click", closeZoomedImage);
experienceZoomBackdrop.addEventListener("click", closeZoomedImage);
experienceZoomOverlay.addEventListener("click", (event) => {
  if (event.target === experienceZoomOverlay) {
    closeZoomedImage();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !experienceZoomOverlay.classList.contains("is-hidden")
  ) {
    closeZoomedImage();
  }
});

currentExperienceIndex = getInitialExperienceIndex();
renderExperience(currentExperienceIndex);
renderGallery();
