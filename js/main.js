document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  function initParallax() {
    if (window.innerWidth >= 992) {
      const bg = document.querySelector(".hero-bg-container");
      gsap.to(bg, {
        backgroundPositionY: "40%",
        ease: "none",
        scrollTrigger: {
          trigger: bg,
          start: "top top",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });

      const introContainer = document.querySelector(
        ".intro__display-container"
      );

      const antiquity = document.querySelector(".intro__antiquity");
      const booster = document.querySelector(".intro__booster");

      gsap.fromTo(
        booster,
        {
          yPercent: 15,
        },
        {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: introContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        antiquity,
        {
          yPercent: 5,
        },
        {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: introContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
            markers: false,
          },
        }
      );
    }
  }

  initParallax();

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      initParallax();
    }, 250);
  });
});
