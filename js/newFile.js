window.onscroll = () => {
  show.forEach(() => {
    if (window.scrollY == show.offsetTop) {
      nav.forEach((e) => {
        e.classList.toggle("active");
      });
    }
  });

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
};
