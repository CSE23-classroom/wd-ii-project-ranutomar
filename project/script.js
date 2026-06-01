const heroImage = document.querySelector("#heroImage");
const searchInput = document.querySelector(".searchbar input");
const productCards = document.querySelectorAll(".product-card");

const heroImages = [
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80"
];

let heroIndex = 0;
heroImage.src = heroImages[0];

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImage.style.opacity = "0.3";
  setTimeout(() => {
    heroImage.src = heroImages[heroIndex];
    heroImage.style.opacity = "1";
  }, 300);
}, 3500);

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  productCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? "" : "none";
  });
});

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <rect width="100%" height="100%" fill="#eceff7"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial" font-size="28" fill="#2874f0">Image not available</text>
      </svg>
    `);
  });
});