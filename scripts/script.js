const hamburgerButton = document.getElementById("hamburgerButton");
const lines = document.querySelectorAll(".ham-btn div");
const hamMenu = document.querySelector(".ham-menu");

const tl = gsap.timeline({ reversed: true });
const tl2 = gsap.timeline({ reversed: true });

tl.to(lines[0], { rotation: 45, y: 8, duration: 0.2, ease: "power2.inOut" })
  .to(
    lines[1],
    { rotation: -45, y: 0, duration: 0.2, ease: "power2.inOut" },
    "-=0.1"
  )
  .to(lines[2], { opacity: 0, duration: 0.2, ease: "power2.inOut" }, "-=0.3");

hamburgerButton.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
  hamMenu.classList.toggle("hidden");

  gsap.to(hamMenu, {
    // clipping animation from top right cornor
    clipPath: hamMenu.classList.contains("hidden")
      ? "circle(0% at 100% 0%)"
      : "circle(200% at 100% 0%)",
    duration: 1.2,
    ease: "power2.inOut",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const progressDivs = document.querySelectorAll(".progress");
  const totalCards = cards.length;
  let currentIndex = 0;

  function updateProgressIndicator() {
    progressDivs.forEach((progress, index) => {
      index < currentIndex
        ? progress.classList.add("bg-indigo-600")
        : progress.classList.remove("bg-indigo-600");
    });
  }

  function slideToIndex(index) {
    gsap.to(cards, {
      x: -index * 100 + "%",
      duration: 0.5,
      onComplete: updateProgressIndicator,
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    slideToIndex(currentIndex);
    updateProgressIndicator();
  }

  function startAutoSlide() {
    setInterval(nextSlide, 3000);
  }

  progressDivs.forEach((progress, index) => {
    progress.addEventListener("click", () => {
      currentIndex = index;
      slideToIndex(currentIndex);
      updateProgressIndicator();
    });
  });

  startAutoSlide();
});


