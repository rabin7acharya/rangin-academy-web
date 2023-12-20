function initializeTabPanel() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Add a click event listener to each tab button
  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Remove active class from all tab buttons and contents
      tabBtns.forEach((btn) => {
        btn.classList.remove("text-indigo-600", "font-semibold");
        btn.classList.remove("bg-blue-50");
      });
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Add active class to the clicked tab button and show the corresponding content
      btn.classList.add("text-indigo-600", "font-semibold");
      btn.classList.add("bg-blue-50");
      tabContents[index].style.display = "block";

      // animate tabContent using gsap
      gsap.from(tabContents[index], {
        display: "block",
        duration: 0.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      });
    });

    // Initialize with the first tab active
    if (btn.id === "tab-btn-i") {
      btn.click();
    }
  });
}

// Initialize the tab panel when the page loads
window.addEventListener("load", initializeTabPanel);
