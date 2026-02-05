// Hero typing effect
const heroText = "Robotics, Coding & GIS Portfolio";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < heroText.length) {
    document.querySelector(".hero p").innerHTML += heroText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", () => {
  typeWriter();
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
