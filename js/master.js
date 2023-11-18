// All Secition when hover
let show = document.querySelectorAll("section[id]");

// About
let about = document.querySelector(".about");
let spanProgress = document.querySelectorAll(".progress-bar");
let nums = document.querySelectorAll(".nums");

// Counter Secition
let num = document.querySelectorAll(".num");
let secition = document.querySelector(".counters");
let started = false;

window.onscroll = () => {
  // All Secition when hover
  show.forEach((el) => {
    let sectionId = el.getAttribute("id");
    let height = el.offsetHeight;
    if (
      window.scrollY >= el.offsetTop - 150 &&
      window.scrollY <= el.offsetTop - 150 + height
    ) {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });

  // About
  if (window.scrollY >= about.offsetTop) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
      nums.forEach((span1) => {
        if (span.style.width === span.dataset.width) {
          span1.textContent = span1.dataset.prog + "%";
          spanLeft = 3;
          span1.style.left = +span1.dataset.prog - spanLeft + "%";
          span1.style.opacity = "1";
        }
      });
    });
  }

  // Counter Secition
  if (window.scrollY >= secition.offsetTop - 200) {
    if (!started) {
      num.forEach((counter) => {
        counter.innerHTML = 0;
        let updateCounter = () => {
          let targetCount = +counter.getAttribute("data-goal");
          let startingCount = +counter.innerHTML;
          let increase = targetCount / 100;
          if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + increase)}`;
            setTimeout(updateCounter, 10);
          } else {
          }
        };
        updateCounter();
      });
    }
    started = true;
  }
  // Scroll Top
  if (window.scrollY >= 1000) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
};

// animation type
let typed = new Typed("#element", {
  strings: ["Photographer", "Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// Scroll Top
let scroll = document.querySelector(".scroll-top");
scroll.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
