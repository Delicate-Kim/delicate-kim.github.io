const yearPlaceholder = document.getElementById("year");
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const galleryImages = document.querySelectorAll('img[data-lightbox="gallery"]');

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.classList.remove("no-scroll");
};

if (galleryImages.length && lightbox && lightboxImage && lightboxCaption) {
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      const figure = image.closest("figure");
      const captionNode = figure ? figure.querySelector("figcaption") : null;
      const captionText = captionNode ? captionNode.textContent : image.alt || "";

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || captionText;
      lightboxCaption.textContent = captionText;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
    });
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

if (yearPlaceholder) {
  yearPlaceholder.textContent = new Date().getFullYear().toString();
}
