// Search function
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".deal-card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.dataset.title || card.querySelector("h4").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "" : "none";
  });
});

// Dark mode toggle
const loginBtn = document.querySelector(".login");
let darkMode = false;

loginBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;
});

// Hero slider
const heroImage = document.querySelector("#heroImage");
const images = [
  "https://picsum.photos/seed/hero1/1200/360",
  "https://picsum.photos/seed/hero2/1200/360",
  "https://picsum.photos/seed/hero3/1200/360",
  "https://picsum.photos/seed/hero4/1200/360"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  heroImage.style.opacity = "0.4";

  setTimeout(() => {
    heroImage.src = images[index];
    heroImage.style.opacity = "1";
  }, 350);
}, 3500);

// Hover effects
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "none";
  });
});

document.querySelectorAll(".cat").forEach(cat => {
  cat.addEventListener("mouseenter", () => {
    cat.style.transform = "translateY(-8px)";
    cat.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
  });

  cat.addEventListener("mouseleave", () => {
    cat.style.transform = "translateY(0)";
    cat.style.boxShadow = "none";
  });
});

// Ripple effect
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.querySelector(".ripple");
    if (ripple) ripple.remove();

    button.appendChild(circle);
  });
});

// Fade-in on scroll
const sections = document.querySelectorAll(".deals, .hero, .categories");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "0.8s";
    }
  });
}

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Notification popup
function showNotification(message) {
  const notification = document.createElement("div");
  notification.innerText = message;
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.background = "#2874f0";
  notification.style.color = "white";
  notification.style.padding = "15px 25px";
  notification.style.borderRadius = "10px";
  notification.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  notification.style.zIndex = "9999";
  notification.style.fontWeight = "600";
  notification.style.animation = "fadeIn 0.3s ease";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2500);
}

document.querySelectorAll(".deals-header button").forEach(btn => {
  btn.addEventListener("click", () => {
    showNotification("Loading more products...");
  });
});

// Image fallback for safety
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.src =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
          <rect width="100%" height="100%" fill="#e9eef7"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          font-family="Arial" font-size="22" fill="#2874f0">Image not found</text>
        </svg>
      `);
  });
});