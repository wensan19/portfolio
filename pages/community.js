const communityData = [
  {
    category: "community",
    title: "Community Service with Deaf Community @ SP (2025)",
    label: "Community Experience",
    meta: "Service Learning",
    image: "../assets/images/community/plushMaking.jpeg",
    alt: "Community service with Deaf Community at Singapore Polytechnic",
    description:
      "This experience reminded me how meaningful inclusion can be when people are given space to connect, participate, and feel understood.",
    highlights: [
      "Learned to engage more thoughtfully and respectfully with different communities.",
      "Deepened my appreciation for communication beyond spoken words.",
      "Strengthened my sense of empathy, patience, and social awareness.",
    ],
  },
  {
    category: "community",
    title: "SP CARES Tree Planing (2025)",
    label: "Community Activity",
    meta: "Creative Service Session",
    image: "../assets/images/community/treePlanting.jpeg",
    alt: "SP CARES Tree Planting",
    description:
      "Participating in this community service activity taught me that giving back can be both practical and meaningful. Through tree planting, I experienced the importance of collective effort, environmental responsibility, and working together with others to create a positive impact.",
    highlights: [
      "Took part in tree planting as a meaningful community contribution.",
      "Learned the value of teamwork through a shared environmental activity.",
      "Built greater awareness of responsibility and giving back to the community.",
    ],
  },
  {
    category: "community",
    title: "Food From the Heart (FFTH) Community Project @SP (2025)",
    label: "Community Activity",
    meta: "Credits to ICAP Charity Day for the image",
    image: "../assets/images/community/FFTH.jpg",
    alt: "Food From the Heart (FFTH) Community Project credits to ICAP Charity Day for the image",
    description:
      "Taking part in this community service activity showed me that giving back can be simple yet meaningful. By donating food to the Food from the Heart community, I learned the importance of compassion, shared responsibility, and supporting others through practical acts of kindness.",
    highlights: [
      "Contributed to the community through food donation.",
      "Learned the value of compassion and shared responsibility.",
      "Supported a meaningful cause through a practical act of kindness.",
    ],
  },
  {
    category: "enrichment",
    title: "Hangzhou Overseas Learning Trip (2026)",
    label: "Overseas Enrichment",
    meta: "Learning Journey",
    image: "../assets/images/enrichment/hangzhou.jpeg",
    alt: "Hangzhou overseas learning trip",
    description:
      "This trip broadened my perspective by combining learning, cultural exposure, and industry insight, while reminding me how much growth can come from stepping into new environments.",
    highlights: [
      "Gained exposure to real-world applications and new ideas.",
      "Learned from people, places, and perspectives outside the classroom.",
      "Made the experience both reflective and motivating for my future growth.",
    ],
  },
  {
    category: "enrichment",
    title:
      "Service Learning with Deaf Community for Terrarium and Painting Workshop @ SP (2025) ",
    label: "Creative Enrichment",
    meta: "Hands-On Community Session",
    image: "../assets/images/enrichment/terrarium.jpeg",
    alt: "Terrarium and painting workshop",
    description:
      "The workshop created a gentle space for creativity, conversation, and shared enjoyment, showing how art can bring people together in a natural way.",
    highlights: [
      "Encouraged creativity and calm collaboration.",
      "Made the experience feel warm, welcoming, and personal.",
      "Showed how small shared activities can create meaningful connection.",
    ],
  },
  // {
  //   category: "enrichment",
  //   title: "Basic Peer Support Skills Training @ SP (2025)",
  //   label: "Overseas Enrichment",
  //   meta: "Learning Journey",
  //   image: "../assets/images/enrichment/placeholder.jpeg",
  //   alt: "Basic Peer Support Skills Training",
  //   description:
  //     "This trip broadened my perspective by combining learning, cultural exposure, and industry insight, while reminding me how much growth can come from stepping into new environments.",
  //   highlights: [
  //     "Gained exposure to real-world applications and new ideas.",
  //     "Learned from people, places, and perspectives outside the classroom.",
  //     "Made the experience both reflective and motivating for my future growth.",
  //   ],
  // },
];

const communityMainImage = document.getElementById("community-main-image");
const communityLabel = document.getElementById("community-label");
const communityTitle = document.getElementById("community-title");
const communityMeta = document.getElementById("community-meta");
const communityDescription = document.getElementById("community-description");
const communityHighlights = document.getElementById("community-highlights");
const communitySlideCounter = document.getElementById(
  "community-slide-counter",
);
const previousCommunityButton = document.getElementById(
  "previous-community-button",
);
const nextCommunityButton = document.getElementById("next-community-button");
const communityViewAllButton = document.getElementById(
  "community-view-all-button",
);
const communityViewCarouselButton = document.getElementById(
  "community-view-carousel-button",
);
const communityCarouselShell = document.getElementById(
  "community-carousel-shell",
);
const communityGalleryShell = document.getElementById(
  "community-gallery-shell",
);
const communityGalleryGrid = document.getElementById("community-gallery-grid");
const communityFilterBothButton = document.getElementById(
  "community-filter-both",
);
const communityFilterCommunityButton = document.getElementById(
  "community-filter-community",
);
const communityFilterEnrichmentButton = document.getElementById(
  "community-filter-enrichment",
);

let currentCommunityIndex = 0;
let currentCommunityCategory = "community";

function getInitialCommunityState() {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  const category = ["both", "community", "enrichment"].includes(
    requestedCategory,
  )
    ? requestedCategory
    : "community";
  const slideIndex = Number.parseInt(params.get("slide"), 10);

  return {
    category,
    slideIndex: Number.isNaN(slideIndex) ? 0 : slideIndex,
  };
}

function getFilteredCommunityData() {
  if (currentCommunityCategory === "both") {
    return communityData;
  }

  return communityData.filter(
    (entry) => entry.category === currentCommunityCategory,
  );
}

function renderCommunity(index) {
  const filteredCommunityData = getFilteredCommunityData();
  const entry = filteredCommunityData[index];

  if (!entry) {
    return;
  }

  communityMainImage.src = entry.image;
  communityMainImage.alt = entry.alt;
  communityLabel.textContent = entry.label;
  communityTitle.textContent = entry.title;
  communityMeta.textContent = entry.meta;
  communityDescription.textContent = entry.description;
  communitySlideCounter.textContent = `${index + 1} / ${filteredCommunityData.length}`;

  communityHighlights.innerHTML = "";

  entry.highlights.forEach((highlight) => {
    const listItem = document.createElement("li");
    listItem.textContent = highlight;
    communityHighlights.appendChild(listItem);
  });
}

function renderCommunityGallery() {
  const filteredCommunityData = getFilteredCommunityData();
  communityGalleryGrid.innerHTML = "";

  filteredCommunityData.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "community-gallery-card";
    card.innerHTML = `
      <img src="${entry.image}" alt="${entry.alt}">
      <h3>${entry.title}</h3>
      <p>${entry.meta}</p>
    `;
    communityGalleryGrid.appendChild(card);
  });
}

previousCommunityButton.addEventListener("click", () => {
  const filteredCommunityData = getFilteredCommunityData();
  currentCommunityIndex =
    (currentCommunityIndex - 1 + filteredCommunityData.length) %
    filteredCommunityData.length;
  renderCommunity(currentCommunityIndex);
});

nextCommunityButton.addEventListener("click", () => {
  const filteredCommunityData = getFilteredCommunityData();
  currentCommunityIndex =
    (currentCommunityIndex + 1) % filteredCommunityData.length;
  renderCommunity(currentCommunityIndex);
});

communityViewAllButton.addEventListener("click", () => {
  communityCarouselShell.classList.add("is-hidden");
  communityGalleryShell.classList.remove("is-hidden");
  communityViewAllButton.classList.add("is-hidden");
  communityViewCarouselButton.classList.remove("is-hidden");
});

communityViewCarouselButton.addEventListener("click", () => {
  communityGalleryShell.classList.add("is-hidden");
  communityCarouselShell.classList.remove("is-hidden");
  communityViewCarouselButton.classList.add("is-hidden");
  communityViewAllButton.classList.remove("is-hidden");
});

communityFilterBothButton.addEventListener("click", () => {
  setCommunityCategory("both");
});

communityFilterCommunityButton.addEventListener("click", () => {
  setCommunityCategory("community");
});

communityFilterEnrichmentButton.addEventListener("click", () => {
  setCommunityCategory("enrichment");
});

function setCommunityCategory(category) {
  currentCommunityCategory = category;
  currentCommunityIndex = 0;

  communityFilterBothButton.classList.toggle("is-active", category === "both");
  communityFilterCommunityButton.classList.toggle(
    "is-active",
    category === "community",
  );
  communityFilterEnrichmentButton.classList.toggle(
    "is-active",
    category === "enrichment",
  );

  renderCommunity(currentCommunityIndex);
  renderCommunityGallery();
}

const initialCommunityState = getInitialCommunityState();
currentCommunityCategory = initialCommunityState.category;
currentCommunityIndex = Math.min(
  Math.max(initialCommunityState.slideIndex, 0),
  getFilteredCommunityData().length - 1,
);
setCommunityCategory(currentCommunityCategory);
currentCommunityIndex = Math.min(
  Math.max(initialCommunityState.slideIndex, 0),
  getFilteredCommunityData().length - 1,
);
renderCommunity(currentCommunityIndex);
renderCommunityGallery();
