function createShowcasePage(showcaseData) {
  const showcaseImageFrame = document.querySelector(".showcase-image-frame");
  const showcaseImagePanel = document.querySelector(".showcase-image-panel");
  let showcaseMainImage = document.getElementById("showcase-main-image");
  const showcaseLabel = document.getElementById("showcase-label");
  const showcaseTitle = document.getElementById("showcase-title");
  const showcaseMeta = document.getElementById("showcase-meta");
  const showcaseDescription = document.getElementById("showcase-description");
  const showcaseHighlights = document.getElementById("showcase-highlights");
  const showcaseSlideCounter = document.getElementById("showcase-slide-counter");
  const previousShowcaseButton = document.getElementById("previous-showcase-button");
  const nextShowcaseButton = document.getElementById("next-showcase-button");
  const viewAllButton = document.getElementById("view-all-button");
  const viewCarouselButton = document.getElementById("view-carousel-button");
  const showcaseCarouselShell = document.getElementById("showcase-carousel-shell");
  const showcaseGalleryShell = document.getElementById("showcase-gallery-shell");
  const showcaseGalleryGrid = document.getElementById("showcase-gallery-grid");
  const showcaseZoomOverlay = document.getElementById("showcase-zoom-overlay");
  const showcaseZoomImage = document.getElementById("showcase-zoom-image");
  const showcaseZoomClose = document.getElementById("showcase-zoom-close");
  const showcaseZoomBackdrop = document.getElementById("showcase-zoom-backdrop");
  const showcaseCarouselCard = document.querySelector(".showcase-carousel-card");
  const showcaseCarouselControls = document.querySelector(".showcase-carousel-controls");

  let currentShowcaseIndex = 0;
  let zoomOverlayListenersBound = false;

  function getInitialShowcaseIndex() {
    const slideValue = new URLSearchParams(window.location.search).get("slide");
    const slideIndex = Number.parseInt(slideValue, 10);

    if (Number.isNaN(slideIndex)) {
      return 0;
    }

    return Math.min(Math.max(slideIndex, 0), showcaseData.length - 1);
  }

  function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
  }

  function getOutputText(output) {
    if (typeof output.text === "string") {
      return output.text;
    }

    if (Array.isArray(output.text)) {
      return output.text.join("");
    }

    if (output.data) {
      const textOutput =
        output.data["text/plain"] || output.data["text/markdown"] || output.data["text/html"];

      if (Array.isArray(textOutput)) {
        return textOutput.join("");
      }

      if (typeof textOutput === "string") {
        return textOutput;
      }
    }

    return "";
  }

  function createNotebookCell(cell, index) {
    const cellElement = document.createElement("article");
    cellElement.className = `notebook-cell notebook-cell--${cell.cell_type || "raw"}`;

    const source = Array.isArray(cell.source) ? cell.source.join("") : cell.source || "";
    const cellLabel =
      cell.cell_type === "code" ? `Code Cell ${index + 1}` : `Notebook Note ${index + 1}`;

    cellElement.appendChild(createTextElement("p", "notebook-cell-label", cellLabel));

    const sourceElement = document.createElement(cell.cell_type === "code" ? "pre" : "div");
    sourceElement.className = "notebook-cell-source";
    sourceElement.textContent = source.trim() || "This notebook cell has no visible source.";
    cellElement.appendChild(sourceElement);

    if (Array.isArray(cell.outputs) && cell.outputs.length > 0) {
      const outputWrap = document.createElement("div");
      outputWrap.className = "notebook-cell-outputs";

      cell.outputs.forEach((output) => {
        const pngOutput = output.data && output.data["image/png"];

        if (pngOutput) {
          const image = document.createElement("img");
          image.className = "notebook-output-image";
          image.src = `data:image/png;base64,${Array.isArray(pngOutput) ? pngOutput.join("") : pngOutput}`;
          image.alt = "Notebook chart output";
          outputWrap.appendChild(image);
          return;
        }

        const outputText = getOutputText(output).trim();

        if (outputText) {
          const outputElement = document.createElement("pre");
          outputElement.className = "notebook-output-text";
          outputElement.textContent = outputText;
          outputWrap.appendChild(outputElement);
        }
      });

      if (outputWrap.childElementCount > 0) {
        cellElement.appendChild(outputWrap);
      }
    }

    return cellElement;
  }

  function renderNotebookPreview(previewPane, documentEntry) {
    previewPane.innerHTML = "";
    previewPane.appendChild(createTextElement("p", "document-viewer-status", "Loading notebook preview..."));

    fetch(documentEntry.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Notebook file could not be loaded.");
        }

        return response.json();
      })
      .then((notebook) => {
        previewPane.innerHTML = "";

        const notebookHeading = document.createElement("div");
        notebookHeading.className = "notebook-preview-heading";
        notebookHeading.appendChild(createTextElement("p", "notebook-preview-kicker", documentEntry.fileName));
        notebookHeading.appendChild(createTextElement("h3", "notebook-preview-title", documentEntry.title));
        previewPane.appendChild(notebookHeading);

        const cells = Array.isArray(notebook.cells) ? notebook.cells : [];
        const visibleCells = cells.filter((cell) => {
          const source = Array.isArray(cell.source) ? cell.source.join("") : cell.source || "";
          return source.trim() || (Array.isArray(cell.outputs) && cell.outputs.length > 0);
        });

        if (visibleCells.length === 0) {
          previewPane.appendChild(
            createTextElement("p", "document-viewer-status", "Open the notebook to view the full analysis.")
          );
          return;
        }

        visibleCells.forEach((cell, index) => {
          previewPane.appendChild(createNotebookCell(cell, index));
        });
      })
      .catch(() => {
        previewPane.innerHTML = "";
        previewPane.appendChild(
          createTextElement(
            "p",
            "document-viewer-status",
            "This browser could not render the notebook inline. Use the open-notebook button below to view the file."
          )
        );
      });
  }

  function createNotebookViewer(entry) {
    const viewer = document.createElement("div");
    viewer.className = "document-viewer document-viewer--notebook";
    viewer.setAttribute("aria-label", entry.alt || entry.title);

    const header = document.createElement("div");
    header.className = "document-viewer-header";
    header.appendChild(createTextElement("p", "document-viewer-kicker", "Notebook Viewer"));
    header.appendChild(createTextElement("h3", "document-viewer-title", entry.title));

    const switcher = document.createElement("div");
    switcher.className = "document-viewer-switcher";

    const previewPane = document.createElement("div");
    previewPane.className = "notebook-preview-pane";
    previewPane.tabIndex = 0;

    const footer = document.createElement("div");
    footer.className = "document-viewer-footer";

    entry.documents.forEach((documentEntry, index) => {
      const tabButton = document.createElement("button");
      tabButton.className = "document-switch-button";
      tabButton.type = "button";
      tabButton.textContent = documentEntry.label;
      tabButton.setAttribute("aria-pressed", index === 0 ? "true" : "false");

      tabButton.addEventListener("click", () => {
        switcher.querySelectorAll(".document-switch-button").forEach((button) => {
          button.classList.remove("is-active");
          button.setAttribute("aria-pressed", "false");
        });

        tabButton.classList.add("is-active");
        tabButton.setAttribute("aria-pressed", "true");
        footer.querySelector(".document-viewer-open-link").href = documentEntry.url;
        footer.querySelector(".document-viewer-open-link").download = documentEntry.fileName;
        footer.querySelector(".document-viewer-open-link").textContent = `Download ${documentEntry.label} Notebook`;
        renderNotebookPreview(previewPane, documentEntry);
      });

      if (index === 0) {
        tabButton.classList.add("is-active");
      }

      switcher.appendChild(tabButton);
    });

    const openLink = document.createElement("a");
    openLink.className = "document-viewer-open-link";
    openLink.href = entry.documents[0].url;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    openLink.download = entry.documents[0].fileName;
    openLink.textContent = `Download ${entry.documents[0].label} Notebook`;
    footer.appendChild(openLink);

    viewer.appendChild(header);
    viewer.appendChild(switcher);
    viewer.appendChild(previewPane);
    viewer.appendChild(footer);

    renderNotebookPreview(previewPane, entry.documents[0]);

    return viewer;
  }

  function createPdfViewer(entry) {
    const viewer = document.createElement("div");
    viewer.className = "document-viewer document-viewer--pdf";
    viewer.setAttribute("aria-label", entry.alt || entry.title);

    const header = document.createElement("div");
    header.className = "document-viewer-header";
    header.appendChild(createTextElement("p", "document-viewer-kicker", "Presentation Viewer"));
    header.appendChild(createTextElement("h3", "document-viewer-title", entry.documentTitle));

    const frame = document.createElement("iframe");
    frame.className = "pdf-preview-frame";
    frame.src = entry.documentUrl;
    frame.title = entry.alt || entry.documentTitle;
    frame.loading = "lazy";

    const footer = document.createElement("div");
    footer.className = "document-viewer-footer";

    const openLink = document.createElement("a");
    openLink.className = "document-viewer-open-link";
    openLink.href = entry.documentUrl;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    openLink.textContent = "Open Presentation";
    footer.appendChild(openLink);

    viewer.appendChild(header);
    viewer.appendChild(frame);
    viewer.appendChild(footer);

    return viewer;
  }

  function createAdditionalPdfViewer(pdfEntry, projectTitle) {
    const viewer = document.createElement("section");
    viewer.className = "project-pdf-viewer-widget";
    viewer.setAttribute("aria-label", `${projectTitle} PDF viewer`);

    const header = document.createElement("div");
    header.className = "project-pdf-viewer-header";
    header.appendChild(createTextElement("p", "document-viewer-kicker", pdfEntry.title || "Interactive PDF Viewer"));
    header.appendChild(createTextElement("h3", "project-pdf-viewer-title", pdfEntry.fileName));

    const frame = document.createElement("iframe");
    frame.className = "project-pdf-viewer-frame";
    frame.src = pdfEntry.url;
    frame.title = `${projectTitle} PDF`;
    frame.loading = "lazy";

    const description = pdfEntry.description
      ? createTextElement("p", "project-pdf-viewer-description", pdfEntry.description)
      : null;

    const footer = document.createElement("div");
    footer.className = "document-viewer-footer";

    const openLink = document.createElement("a");
    openLink.className = "document-viewer-open-link";
    openLink.href = pdfEntry.url;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";
    openLink.textContent = "Open PDF";
    footer.appendChild(openLink);

    viewer.appendChild(header);
    viewer.appendChild(frame);
    if (description) {
      viewer.appendChild(description);
    }
    viewer.appendChild(footer);

    return viewer;
  }

  function createShowcaseMedia(entry) {
    if (entry.mediaType === "notebook" && Array.isArray(entry.documents)) {
      return createNotebookViewer(entry);
    }

    if (entry.mediaType === "pdf" && entry.documentUrl) {
      return createPdfViewer(entry);
    }

    if (entry.embedUrl) {
      const iframe = document.createElement("iframe");
      iframe.className = "showcase-video-embed";
      iframe.src = entry.embedUrl;
      iframe.title = entry.alt || entry.title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      return iframe;
    }

    const image = document.createElement("img");
    image.id = "showcase-main-image";
    image.src = entry.image;
    image.alt = entry.alt;
    return image;
  }

  function openZoomedImage() {
    if (!showcaseMainImage || !showcaseZoomOverlay || !showcaseZoomImage) {
      return;
    }

    showcaseZoomImage.src = showcaseMainImage.src;
    showcaseZoomImage.alt = showcaseMainImage.alt;
    showcaseZoomOverlay.classList.remove("is-hidden");
    showcaseZoomOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("overlay-open");
  }

  function closeZoomedImage() {
    if (!showcaseZoomOverlay || !showcaseZoomImage) {
      return;
    }

    showcaseZoomOverlay.classList.add("is-hidden");
    showcaseZoomOverlay.setAttribute("aria-hidden", "true");
    showcaseZoomImage.src = "";
    document.body.classList.remove("overlay-open");
  }

  function bindZoomToMainImage() {
    if (
      !showcaseMainImage ||
      !showcaseZoomOverlay ||
      !showcaseZoomImage ||
      !showcaseZoomClose ||
      !showcaseZoomBackdrop
    ) {
      return;
    }

    if (!showcaseMainImage.dataset.zoomBound) {
      showcaseMainImage.dataset.zoomBound = "true";
      showcaseMainImage.tabIndex = 0;
      showcaseMainImage.setAttribute("role", "button");
      showcaseMainImage.setAttribute("aria-label", "Open a larger view of this image");

      showcaseMainImage.addEventListener("click", openZoomedImage);
      showcaseMainImage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openZoomedImage();
        }
      });
    }

    if (zoomOverlayListenersBound) {
      return;
    }

    zoomOverlayListenersBound = true;

    showcaseZoomClose.addEventListener("click", closeZoomedImage);
    showcaseZoomBackdrop.addEventListener("click", closeZoomedImage);
    showcaseZoomOverlay.addEventListener("click", (event) => {
      if (event.target === showcaseZoomOverlay) {
        closeZoomedImage();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        !showcaseZoomOverlay.classList.contains("is-hidden")
      ) {
        closeZoomedImage();
      }
    });
  }

  function renderShowcase(index) {
    const entry = showcaseData[index];
    const existingPdfViewer = showcaseCarouselShell.querySelector(".project-pdf-viewer-widget");
    const existingMobileDescription = showcaseImagePanel
      ? showcaseImagePanel.querySelector(".project-mobile-showcase-description")
      : null;
    const existingMobileActions = showcaseImagePanel
      ? showcaseImagePanel.querySelector(".showcase-action-links--mobile")
      : null;

    if (existingPdfViewer) {
      existingPdfViewer.remove();
    }

    if (existingMobileDescription) {
      existingMobileDescription.remove();
    }

    if (existingMobileActions) {
      existingMobileActions.remove();
    }

    if (showcaseCarouselCard) {
      showcaseCarouselCard.classList.toggle(
        "showcase-carousel-card--document",
        entry.mediaType === "notebook" || entry.mediaType === "pdf"
      );
    }

    if (showcaseImageFrame) {
      showcaseImageFrame.innerHTML = "";
      showcaseImageFrame.appendChild(createShowcaseMedia(entry));
      showcaseMainImage = document.getElementById("showcase-main-image");
      bindZoomToMainImage();
    }

    showcaseLabel.textContent = entry.label;
    showcaseTitle.textContent = entry.title;
    showcaseMeta.textContent = entry.meta;
    showcaseDescription.textContent = entry.description;
    showcaseSlideCounter.textContent = `${index + 1} / ${showcaseData.length}`;

    showcaseHighlights.innerHTML = "";

    entry.highlights.forEach((highlight) => {
      const listItem = document.createElement("li");
      listItem.textContent = highlight;
      showcaseHighlights.appendChild(listItem);
    });

    const existingActions = document.getElementById("showcase-action-links");

    if (existingActions) {
      existingActions.remove();
    }

    if (entry.additionalPdf) {
      const pdfViewer = createAdditionalPdfViewer(entry.additionalPdf, entry.title);

      if (showcaseImagePanel && showcaseCarouselControls) {
        showcaseImagePanel.insertBefore(pdfViewer, showcaseCarouselControls);
      } else {
        showcaseCarouselShell.appendChild(pdfViewer);
      }
    }

    if (entry.description && showcaseImagePanel && showcaseCarouselControls) {
      const mobileDescription = createTextElement(
        "p",
        "project-mobile-showcase-description",
        entry.description
      );
      showcaseImagePanel.insertBefore(mobileDescription, showcaseCarouselControls);
    }

    if (entry.links && entry.links.length > 0) {
      const actionLinks = document.createElement("div");
      actionLinks.className = "showcase-action-links showcase-action-links--desktop";
      actionLinks.id = "showcase-action-links";
      const hasWebsiteCta = entry.links.some((link) => link.isWebsiteCta);
      if (hasWebsiteCta) {
        actionLinks.classList.add("showcase-action-links--website");
      }
      const shouldPlaceActionsAboveMedia =
        Boolean(document.querySelector(".simple-detail-page.showcase-page--projects")) &&
        Boolean(entry.embedUrl) &&
        !hasWebsiteCta &&
        Boolean(showcaseImagePanel) &&
        Boolean(showcaseImageFrame);

      entry.links.forEach((link) => {
        const actionLink = document.createElement("a");
        actionLink.className = "showcase-action-link";
        if (link.isWebsiteCta) {
          actionLink.classList.add("showcase-action-link--text");
        }
        actionLink.href = link.url;
        actionLink.target = "_blank";
        actionLink.rel = "noopener noreferrer";
        actionLink.textContent = link.label;
        actionLinks.appendChild(actionLink);
      });

      if (hasWebsiteCta && showcaseImagePanel && showcaseImageFrame) {
        showcaseImageFrame.insertAdjacentElement("afterend", actionLinks);
      } else if (shouldPlaceActionsAboveMedia) {
        showcaseImagePanel.insertBefore(actionLinks, showcaseImageFrame);
      } else {
        showcaseDescription.insertAdjacentElement("afterend", actionLinks);
      }
    }

    if (showcaseImagePanel && showcaseCarouselControls && showcaseHighlights) {
      showcaseCarouselControls.insertAdjacentElement("afterend", showcaseHighlights);
    }
  }

  function renderShowcaseGallery() {
    showcaseGalleryGrid.innerHTML = "";

    showcaseData.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "showcase-gallery-card";

      if (entry.mediaType === "notebook" || entry.mediaType === "pdf") {
        card.classList.add("showcase-gallery-card--document");
      }

      card.appendChild(createShowcaseMedia(entry));

      let actionLinks = null;
      let hasWebsiteCta = false;

      if (entry.links && entry.links.length > 0) {
        actionLinks = document.createElement("div");
        actionLinks.className = "showcase-action-links";
        hasWebsiteCta = entry.links.some((link) => link.isWebsiteCta);
        if (hasWebsiteCta) {
          actionLinks.classList.add("showcase-action-links--website");
        }

        entry.links.forEach((link) => {
          const actionLink = document.createElement("a");
          actionLink.className = "showcase-action-link";
          if (link.isWebsiteCta) {
            actionLink.classList.add("showcase-action-link--text");
          }
          actionLink.href = link.url;
          actionLink.target = "_blank";
          actionLink.rel = "noopener noreferrer";
          actionLink.textContent = link.label;
          actionLinks.appendChild(actionLink);
        });
      }

      if (actionLinks && hasWebsiteCta) {
        card.appendChild(actionLinks);
      }

      card.appendChild(createTextElement("h3", "", entry.title));
      card.appendChild(createTextElement("p", "", entry.meta));
      card.appendChild(createTextElement("p", "", entry.description));

      if (actionLinks && !hasWebsiteCta) {
        card.appendChild(actionLinks);
      }

      if (entry.additionalPdf) {
        card.appendChild(createAdditionalPdfViewer(entry.additionalPdf, entry.title));
      }

      showcaseGalleryGrid.appendChild(card);
    });
  }

  previousShowcaseButton.addEventListener("click", () => {
    currentShowcaseIndex =
      (currentShowcaseIndex - 1 + showcaseData.length) % showcaseData.length;
    renderShowcase(currentShowcaseIndex);
  });

  nextShowcaseButton.addEventListener("click", () => {
    currentShowcaseIndex = (currentShowcaseIndex + 1) % showcaseData.length;
    renderShowcase(currentShowcaseIndex);
  });

  viewAllButton.addEventListener("click", () => {
    showcaseCarouselShell.classList.add("is-hidden");
    showcaseGalleryShell.classList.remove("is-hidden");
    viewAllButton.classList.add("is-hidden");
    viewCarouselButton.classList.remove("is-hidden");
  });

  viewCarouselButton.addEventListener("click", () => {
    showcaseGalleryShell.classList.add("is-hidden");
    showcaseCarouselShell.classList.remove("is-hidden");
    viewCarouselButton.classList.add("is-hidden");
    viewAllButton.classList.remove("is-hidden");
  });

  currentShowcaseIndex = getInitialShowcaseIndex();
  renderShowcase(currentShowcaseIndex);
  renderShowcaseGallery();
}
