const portfolioSections = [
  {
    id: "about",
    title: "About Me",
    pagePath: "pages/about.html",
    usesModel: true,
    modelPath: "assets/models/me_in_3d.glb",
    modelAlt: "3D model of Wen San",
    placement: "main",
  },
  {
    id: "interests",
    title: "Interests",
    pagePath: "pages/interests.html",
    usesModel: true,
    modelPath: "assets/models/interests_3D.glb",
    modelAlt: "3D interests model",
    placement: "main",
  },
  {
    id: "certificates",
    title: "Certificates",
    pagePath: "pages/certificates.html",
    usesModel: true,
    modelPath: "assets/models/certificates_3D.glb",
    modelAlt: "3D certificates model",
    placement: "main",
  },
  {
    id: "experience",
    title: "Work Experience",
    pagePath: "pages/experience.html",
    usesModel: true,
    modelPath: "assets/models/workEXP_3D.glb",
    modelAlt: "3D work experience model",
    placement: "main",
  },
  {
    id: "leadership",
    title: "Leadership",
    pagePath: "pages/leadership.html",
    usesModel: true,
    modelPath: "assets/models/leadership_3D.glb",
    modelAlt: "3D leadership model",
    placement: "main",
  },
  {
    id: "community",
    title: "Community service & Enrichments",
    pagePath: "pages/community.html",
    usesModel: true,
    modelPath: "assets/models/community_3D.glb",
    modelAlt: "3D community service and enrichments model",
    placement: "main",
  },
  {
    id: "projects",
    title: "Projects",
    pagePath: "pages/projects.html",
    usesModel: true,
    modelPath: "assets/models/projects_3D.glb",
    modelAlt: "3D projects model",
    placement: "scanner-side",
  },
];

const storageKeys = {
  checkedItems: "airportPortfolioCheckedItems",
  selectedMode: "airportPortfolioSelectedMode",
  theme: "airportPortfolioTheme",
};

const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");

const itemContainer = document.getElementById("item-container");
const projectSlot = document.getElementById("project-slot");
const completionList = document.getElementById("completion-list");
const progressCount = document.getElementById("progress-count");
const scannerDropZone = document.getElementById("scanner-drop-zone");
const scannerStatus = document.getElementById("scanner-status");
const emptyState = document.getElementById("empty-state");
const interactiveMode = document.getElementById("interactive-mode");
const simpleMode = document.getElementById("simple-mode");
const interactiveModeButton = document.getElementById(
  "interactive-mode-button",
);
const simpleModeButton = document.getElementById("simple-mode-button");
const celebrationOverlay = document.getElementById("celebration-overlay");
const celebrationCloseButton = document.getElementById(
  "celebration-close-button",
);
const celebrationBackdrop = document.getElementById("celebration-backdrop");
const celebrationHomeButton = document.getElementById(
  "celebration-home-button",
);
const confettiLayer = document.getElementById("confetti-layer");
const resetProgressButton = document.getElementById("reset-progress-button");
const modeButtons = document.querySelectorAll("[data-mode]");
const fadeItems = document.querySelectorAll(".fade-up");

const state = {
  checkedItems: new Set(loadCheckedItems()),
  currentMode: loadSelectedMode(),
  theme: loadTheme(),
};

initializeTheme();

if (itemContainer && scannerDropZone && interactiveMode) {
  initializePrototype();
} else {
  setupFadeInAnimation();
}

function initializePrototype() {
  renderAll();
  attachEventListeners();
  setupFadeInAnimation();

  if (state.checkedItems.size === portfolioSections.length && celebrationOverlay) {
    openCelebrationOverlay();
  }
}

function initializeTheme() {
  applyTheme(state.theme);

  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
}

function loadTheme() {
  const savedTheme = localStorage.getItem(storageKeys.theme);
  return savedTheme === "dark" ? "dark" : "light";
}

function saveTheme() {
  localStorage.setItem(storageKeys.theme, state.theme);
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveTheme();
  applyTheme(state.theme);
}

function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");

  themeToggleButtons.forEach((button) => {
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
    button.setAttribute("title", theme === "dark" ? "Light mode" : "Dark mode");
  });
}

function loadCheckedItems() {
  const savedValue = localStorage.getItem(storageKeys.checkedItems);

  if (!savedValue) {
    return [];
  }

  try {
    const parsedItems = JSON.parse(savedValue);
    const validIds = portfolioSections.map((section) => section.id);
    return parsedItems.filter((itemId) => validIds.includes(itemId));
  } catch (error) {
    return [];
  }
}

function saveCheckedItems() {
  localStorage.setItem(
    storageKeys.checkedItems,
    JSON.stringify(Array.from(state.checkedItems)),
  );
}

function loadSelectedMode() {
  const savedMode = localStorage.getItem(storageKeys.selectedMode);
  return savedMode === "simple" ? "simple" : "interactive";
}

function saveSelectedMode() {
  localStorage.setItem(storageKeys.selectedMode, state.currentMode);
}

function attachEventListeners() {
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMode(button.dataset.mode);
    });
  });

  if (scannerDropZone) {
    scannerDropZone.addEventListener("dragover", handleScannerDragOver);
    scannerDropZone.addEventListener("dragleave", handleScannerDragLeave);
    scannerDropZone.addEventListener("drop", handleScannerDrop);
  }

  if (celebrationCloseButton) {
    celebrationCloseButton.addEventListener("click", closeCelebrationOverlay);
  }
  if (celebrationBackdrop) {
    celebrationBackdrop.addEventListener("click", closeCelebrationOverlay);
  }
  if (celebrationHomeButton) {
    celebrationHomeButton.addEventListener("click", closeCelebrationOverlay);
  }
  if (resetProgressButton) {
    resetProgressButton.addEventListener("click", resetProgress);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCelebrationOverlay();
    }
  });
}

function renderAll() {
  renderInteractiveItems();
  renderCompletionList();
  updateModeView();
  updateProgressText();
}

function createModelItem(section) {
  const itemCard = document.createElement("article");
  itemCard.className = "draggable-item model-object-item";
  itemCard.draggable = true;
  itemCard.dataset.itemId = section.id;

  itemCard.innerHTML = `
        <div class="model-object-wrap">
            <model-viewer
                class="portfolio-model-viewer"
                src="${section.modelPath}"
                alt="${section.modelAlt}"
                camera-controls
                interaction-prompt="auto"
                shadow-intensity="1">
            </model-viewer>
        </div>
        <h3 class="model-object-title">${section.title}</h3>
    `;

  itemCard.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", section.id);
    event.dataTransfer.effectAllowed = "move";
    itemCard.classList.add("dragging");
    if (scannerStatus) {
      scannerStatus.textContent = `Checking in ${section.title}...`;
    }
  });

  itemCard.addEventListener("dragend", () => {
    itemCard.classList.remove("dragging");
    resetScannerMessage();
  });

  return itemCard;
}

function renderInteractiveItems() {
  if (!itemContainer || !emptyState) {
    return;
  }

  itemContainer.innerHTML = "";

  if (projectSlot) {
    projectSlot.innerHTML = "";
  }

  const remainingItems = portfolioSections.filter(
    (section) => !state.checkedItems.has(section.id),
  );

  remainingItems.forEach((section) => {
    const itemCard = createModelItem(section);

    if (section.placement === "scanner-side" && projectSlot) {
      projectSlot.appendChild(itemCard);
    } else {
      itemContainer.appendChild(itemCard);
    }
  });

  emptyState.classList.toggle("is-hidden", remainingItems.length !== 0);

  if (projectSlot) {
    projectSlot.classList.toggle(
      "is-hidden",
      !remainingItems.some((section) => section.placement === "scanner-side"),
    );
  }
}

function renderCompletionList() {
  if (!completionList) {
    return;
  }

  completionList.innerHTML = "";

  portfolioSections.forEach((section) => {
    const pill = document.createElement("div");
    const isCompleted = state.checkedItems.has(section.id);
    const statusText = isCompleted ? "Checked in" : "Waiting";

    pill.className = `completion-pill${isCompleted ? " completed" : ""}`;
    pill.innerHTML = `
            <span>${section.title}</span>
            <span class="completion-status">${statusText}</span>
        `;

    completionList.appendChild(pill);
  });
}

function updateProgressText() {
  if (progressCount) {
    progressCount.textContent = `${state.checkedItems.size} / ${portfolioSections.length} items checked in`;
  }
}

function updateModeView() {
  if (!interactiveMode) {
    return;
  }

  if (!simpleMode || !interactiveModeButton || !simpleModeButton) {
    state.currentMode = "interactive";
    interactiveMode.classList.remove("is-hidden");
    if (interactiveModeButton) {
      interactiveModeButton.classList.add("active");
    }
    revealVisibleModeItems(interactiveMode);
    return;
  }

  const isInteractiveMode = state.currentMode === "interactive";

  interactiveMode.classList.toggle("is-hidden", !isInteractiveMode);
  simpleMode.classList.toggle("is-hidden", isInteractiveMode);
  interactiveModeButton.classList.toggle("active", isInteractiveMode);
  simpleModeButton.classList.toggle("active", !isInteractiveMode);
  revealVisibleModeItems(isInteractiveMode ? interactiveMode : simpleMode);
}

function setMode(selectedMode) {
  state.currentMode = selectedMode === "simple" ? "simple" : "interactive";
  saveSelectedMode();
  updateModeView();
}

function handleScannerDragOver(event) {
  event.preventDefault();
  scannerDropZone.classList.add("drag-over");
  if (scannerStatus) {
    scannerStatus.textContent = "Release to scan this portfolio item.";
  }
}

function handleScannerDragLeave() {
  scannerDropZone.classList.remove("drag-over");
  resetScannerMessage();
}

function handleScannerDrop(event) {
  event.preventDefault();
  scannerDropZone.classList.remove("drag-over");

  const itemId = event.dataTransfer.getData("text/plain");
  checkInItem(itemId);
}

function checkInItem(itemId) {
  const selectedSection = getSectionById(itemId);

  if (!selectedSection || state.checkedItems.has(itemId)) {
    resetScannerMessage();
    return;
  }

  state.checkedItems.add(itemId);
  saveCheckedItems();
  flashScanner(selectedSection);
  renderAll();
}

function flashScanner(section) {
  if (!scannerDropZone) {
    window.location.href = section.pagePath;
    return;
  }

  scannerDropZone.classList.add("scanner-success");
  if (scannerStatus) {
    scannerStatus.textContent = "Item cleared. Boarding to section page...";
  }

  window.setTimeout(() => {
    window.location.href = section.pagePath;
  }, 450);
}

function resetScannerMessage() {
  if (scannerStatus) {
    scannerStatus.textContent = "Ready for the next check-in.";
  }
}

function openCelebrationOverlay() {
  if (!celebrationOverlay || !confettiLayer) {
    return;
  }

  buildConfetti();
  celebrationOverlay.classList.remove("is-hidden");
  celebrationOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
}

function closeCelebrationOverlay() {
  if (!celebrationOverlay || celebrationOverlay.classList.contains("is-hidden")) {
    return;
  }

  celebrationOverlay.classList.add("is-hidden");
  celebrationOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overlay-open");
}

function buildConfetti() {
  if (!confettiLayer) {
    return;
  }

  const colors = ["#a8d8ff", "#ffd9ec", "#e6dcff", "#ffe9b8", "#bfead7"];
  confettiLayer.innerHTML = "";

  for (let pieceNumber = 0; pieceNumber < 28; pieceNumber += 1) {
    const confettiPiece = document.createElement("span");
    const left = `${Math.random() * 100}%`;
    const duration = `${3 + Math.random() * 2.5}s`;
    const delay = `${Math.random() * 0.8}s`;
    const rotate = `${Math.random() * 360}deg`;
    const color = colors[pieceNumber % colors.length];

    confettiPiece.className = "confetti-piece";
    confettiPiece.style.setProperty("--confetti-left", left);
    confettiPiece.style.setProperty("--confetti-duration", duration);
    confettiPiece.style.setProperty("--confetti-delay", delay);
    confettiPiece.style.setProperty("--confetti-rotate", rotate);
    confettiPiece.style.setProperty("--confetti-color", color);

    confettiLayer.appendChild(confettiPiece);
  }
}

function resetProgress() {
  const userConfirmedReset = window.confirm(
    "Reset all checked-in items and start the prototype again?",
  );

  if (!userConfirmedReset) {
    return;
  }

  state.checkedItems.clear();
  saveCheckedItems();
  setMode("interactive");
  closeCelebrationOverlay();
  renderAll();
  resetScannerMessage();
}

function getSectionById(sectionId) {
  return portfolioSections.find((section) => section.id === sectionId);
}

function setupFadeInAnimation() {
  if (fadeItems.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    fadeItems.forEach((item) => {
      item.classList.add("show");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  fadeItems.forEach((item) => {
    observer.observe(item);
  });
}

function revealVisibleModeItems(activeModeElement) {
  if (!activeModeElement) {
    return;
  }

  const visibleItems = activeModeElement.querySelectorAll(".fade-up");

  visibleItems.forEach((item) => {
    item.classList.add("show");
  });
}
