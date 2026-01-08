document.addEventListener("DOMContentLoaded", function () {
  const page = document.querySelector(".page");

  function initParallax() {
    // Only execute on screens 768px and above
    if (window.innerWidth >= 768) {
      // Create a parallax effect on scroll
      gsap.to(page, {
        backgroundPositionY: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: page,
          start: "top top",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });
    }
  }

  // Initialize on load
  initParallax();

  // Reinitialize on window resize (debounced)
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // Kill all ScrollTriggers and reinitialize
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      initParallax();
    }, 250);
  });
});
