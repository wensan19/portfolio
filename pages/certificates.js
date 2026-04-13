const certificatesData = [
  {
    title: "CPR + AED Certification",
    label: "Certificate",
    meta: "Singapore Polytechnic - 2025",
    image: "../assets/images/certificates/CPR_cert.jpeg",
    alt: "CPR and AED certification",
    description:
      "This certification reflects my readiness to respond calmly and responsibly in emergency situations.",
    highlights: [
      "Learned the fundamentals of CPR response and AED usage.",
      "Built confidence in handling urgent real-life situations.",
      "Strengthened my sense of responsibility and care for others.",
    ],
  },
  {
    title: "Introduction to Python",
    label: "Online Learning",
    meta: "DataCamp",
    image: "../assets/images/certificates/datacamp1.jpeg",
    alt: "DataCamp certificate 1",
    description:
      "One of the certifications that supported my interest in data, analytics, and continuous learning.",
  },
  {
    title: "Intermediate Python",
    label: "Online Learning",
    meta: "DataCamp",
    image: "../assets/images/certificates/datacamp2.jpeg",
    alt: "DataCamp certificate 2",
    description:
      "This certificate represents another step in improving my technical understanding through guided online learning.",
  },
  {
    title: "Introduction to Data Science in Python",
    label: "Online Learning",
    meta: "DataCamp",
    image: "../assets/images/certificates/datacamp3.jpeg",
    alt: "DataCamp certificate 3",
    description:
      "A further certification that reflects consistency, curiosity, and a willingness to keep learning new tools and concepts.",
  },
];

const mainImage = document.getElementById("certificate-main-image");
const certificateLabel = document.getElementById("certificate-label");
const certificateTitle = document.getElementById("certificate-title");
const certificateMeta = document.getElementById("certificate-meta");
const certificateDescription = document.getElementById(
  "certificate-description",
);
const certificateHighlights = document.getElementById("certificate-highlights");
const slideCounter = document.getElementById("certificate-slide-counter");
const previousButton = document.getElementById("previous-certificate-button");
const nextButton = document.getElementById("next-certificate-button");
const viewAllButton = document.getElementById("view-all-button");
const viewCarouselButton = document.getElementById("view-carousel-button");
const carouselShell = document.getElementById("certificates-carousel-shell");
const galleryShell = document.getElementById("certificates-gallery-shell");
const galleryGrid = document.getElementById("certificates-gallery-grid");

let currentCertificateIndex = 0;

function getInitialCertificateIndex() {
  const slideValue = new URLSearchParams(window.location.search).get("slide");
  const slideIndex = Number.parseInt(slideValue, 10);

  if (Number.isNaN(slideIndex)) {
    return 0;
  }

  return Math.min(Math.max(slideIndex, 0), certificatesData.length - 1);
}

function renderCertificate(index) {
  const certificate = certificatesData[index];

  mainImage.src = certificate.image;
  mainImage.alt = certificate.alt;
  certificateLabel.textContent = certificate.label;
  certificateTitle.textContent = certificate.title;
  certificateMeta.textContent = certificate.meta;
  certificateDescription.textContent = certificate.description;
  slideCounter.textContent = `${index + 1} / ${certificatesData.length}`;

  certificateHighlights.innerHTML = "";

  certificate.highlights.forEach((highlight) => {
    const listItem = document.createElement("li");
    listItem.textContent = highlight;
    certificateHighlights.appendChild(listItem);
  });
}

function renderGallery() {
  galleryGrid.innerHTML = "";

  certificatesData.forEach((certificate) => {
    const card = document.createElement("article");
    card.className = "certificate-gallery-card";
    card.innerHTML = `
            <img src="${certificate.image}" alt="${certificate.alt}">
            <h3>${certificate.title}</h3>
            <p>${certificate.meta}</p>
        `;
    galleryGrid.appendChild(card);
  });
}

previousButton.addEventListener("click", () => {
  currentCertificateIndex =
    (currentCertificateIndex - 1 + certificatesData.length) %
    certificatesData.length;
  renderCertificate(currentCertificateIndex);
});

nextButton.addEventListener("click", () => {
  currentCertificateIndex =
    (currentCertificateIndex + 1) % certificatesData.length;
  renderCertificate(currentCertificateIndex);
});

viewAllButton.addEventListener("click", () => {
  carouselShell.classList.add("is-hidden");
  galleryShell.classList.remove("is-hidden");
  viewAllButton.classList.add("is-hidden");
  viewCarouselButton.classList.remove("is-hidden");
});

viewCarouselButton.addEventListener("click", () => {
  galleryShell.classList.add("is-hidden");
  carouselShell.classList.remove("is-hidden");
  viewCarouselButton.classList.add("is-hidden");
  viewAllButton.classList.remove("is-hidden");
});

currentCertificateIndex = getInitialCertificateIndex();
renderCertificate(currentCertificateIndex);
renderGallery();
