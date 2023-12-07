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
