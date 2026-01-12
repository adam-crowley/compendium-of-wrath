document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  function initParallax() {
    // Only execute on screens 768px and above
    if (window.innerWidth >= 992) {
      // Background parallax effect
      const bg = document.querySelector(".hero-bg-container");
      gsap.to(bg, {
        backgroundPositionY: "35%",
        ease: "none",
        scrollTrigger: {
          trigger: bg,
          start: "top top",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });

      // 3D Pop-up Picture Book Effect
      const introContainer = document.querySelector(
        ".intro__display-container"
      );

      const antiquity = document.querySelector(".intro__antiquity");
      const booster = document.querySelector(".intro__booster");

      gsap.to(booster, {
        yPercent: 15,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: introContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });

      // Antiquity - front layer (moves most)
      gsap.to(antiquity, {
        yPercent: -5,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: introContainer,
          start: "top bottom",
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
