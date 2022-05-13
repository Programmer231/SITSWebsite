window.onload = () => {
  let pic = 0;
  const pictures = document.getElementsByClassName("img-display");

  // Javascript code for first image slider

  for (
    let i = 1;
    i < document.getElementsByClassName("img-display").length;
    i++
  ) {
    document.getElementsByClassName("img-display")[i].style.display = "none";
  }

  document
    .getElementsByClassName("center-con")[0]
    .addEventListener("click", () => {
      if (pic === pictures.length - 1) {
        document
          .getElementsByClassName("img-display")
          [pic].classList.remove("img-on");
        document.getElementsByClassName("img-display")[pic].style.display =
          "none";
        document
          .getElementsByClassName("img-display")[0]
          .classList.add("img-on");
        document.getElementsByClassName("img-display")[0].style.display =
          "block";
        pic = 0;
      } else {
        document
          .getElementsByClassName("img-display")
          [pic].classList.remove("img-on");
        document.getElementsByClassName("img-display")[pic].style.display =
          "none";
        document
          .getElementsByClassName("img-display")
          [pic + 1].classList.add("img-on");
        document.getElementsByClassName("img-display")[pic + 1].style.display =
          "block";

        pic++;
      }
    });

  document
    .getElementsByClassName("center-con-backward")[0]
    .addEventListener("click", () => {
      if (pic === 0) {
        document
          .getElementsByClassName("img-display")
          [pic].classList.remove("img-on");
        document.getElementsByClassName("img-display")[pic].style.display =
          "none";
        document
          .getElementsByClassName("img-display")
          [pictures.length - 1].classList.add("img-on");
        document.getElementsByClassName("img-display")[
          pictures.length - 1
        ].style.display = "block";

        pic = pictures.length - 1;
      } else {
        document
          .getElementsByClassName("img-display")
          [pic].classList.remove("img-on");
        document.getElementsByClassName("img-display")[pic].style.display =
          "none";
        document
          .getElementsByClassName("img-display")
          [pic - 1].classList.add("img-on");
        document.getElementsByClassName("img-display")[pic - 1].style.display =
          "block";

        pic--;
      }
    });

  // Javascript code for second image slider

  let HRNPic = 0;
  const HRNpictures = document.getElementsByClassName("img-display2");
  for (
    let i = 1;
    i < document.getElementsByClassName("img-display2").length;
    i++
  ) {
    document.getElementsByClassName("img-display2")[i].style.display = "none";
  }

  document
    .getElementsByClassName("center-con")[1]
    .addEventListener("click", () => {
      if (HRNPic === HRNpictures.length - 1) {
        document
          .getElementsByClassName("img-display2")
          [HRNPic].classList.remove("img-on");
        document.getElementsByClassName("img-display2")[HRNPic].style.display =
          "none";
        document
          .getElementsByClassName("img-display2")[0]
          .classList.add("img-on");
        document.getElementsByClassName("img-display2")[0].style.display =
          "block";
        HRNPic = 0;
      } else {
        document
          .getElementsByClassName("img-display2")
          [HRNPic].classList.remove("img-on");
        document.getElementsByClassName("img-display2")[HRNPic].style.display =
          "none";
        document
          .getElementsByClassName("img-display2")
          [HRNPic + 1].classList.add("img-on");
        document.getElementsByClassName("img-display2")[
          HRNPic + 1
        ].style.display = "block";

        HRNPic++;
      }
    });

  document
    .getElementsByClassName("center-con-backward")[1]
    .addEventListener("click", () => {
      if (HRNPic === 0) {
        document
          .getElementsByClassName("img-display2")
          [HRNPic].classList.remove("img-on");
        document.getElementsByClassName("img-display2")[HRNPic].style.display =
          "none";
        document
          .getElementsByClassName("img-display2")
          [HRNpictures.length - 1].classList.add("img-on");
        document.getElementsByClassName("img-display2")[
          HRNpictures.length - 1
        ].style.display = "block";

        HRNPic = HRNpictures.length - 1;
      } else {
        document
          .getElementsByClassName("img-display2")
          [HRNPic].classList.remove("img-on");
        document.getElementsByClassName("img-display2")[HRNPic].style.display =
          "none";
        document
          .getElementsByClassName("img-display2")
          [HRNPic - 1].classList.add("img-on");
        document.getElementsByClassName("img-display2")[
          HRNPic - 1
        ].style.display = "block";

        HRNPic--;
      }
    });

  //Image slider for third image slider

  let secondPic = 0;
  let projects = document.getElementsByClassName("second-img-display");

  for (
    let i = 1;
    i < document.getElementsByClassName("second-img-display").length;
    i++
  ) {
    document.getElementsByClassName("second-img-display")[i].style.display =
      "none";
  }

  document
    .getElementsByClassName("center-con")[2]
    .addEventListener("click", () => {
      if (secondPic === projects.length - 1) {
        document
          .getElementsByClassName("second-img-display")
          [secondPic].classList.remove("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic
        ].style.display = "none";
        document
          .getElementsByClassName("second-img-display")[0]
          .classList.add("img-on");
        document.getElementsByClassName("second-img-display")[0].style.display =
          "block";
        secondPic = 0;
      } else {
        document
          .getElementsByClassName("second-img-display")
          [secondPic].classList.remove("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic
        ].style.display = "none";
        document
          .getElementsByClassName("second-img-display")
          [secondPic + 1].classList.add("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic + 1
        ].style.display = "block";

        secondPic++;
      }
    });

  document
    .getElementsByClassName("center-con-backward")[2]
    .addEventListener("click", () => {
      if (secondPic === 0) {
        document
          .getElementsByClassName("second-img-display")
          [secondPic].classList.remove("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic
        ].style.display = "none";
        document
          .getElementsByClassName("second-img-display")
          [projects.length - 1].classList.add("img-on");
        document.getElementsByClassName("second-img-display")[
          projects.length - 1
        ].style.display = "block";

        secondPic = projects.length - 1;
      } else {
        document
          .getElementsByClassName("second-img-display")
          [secondPic].classList.remove("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic
        ].style.display = "none";
        document
          .getElementsByClassName("second-img-display")
          [secondPic - 1].classList.add("img-on");
        document.getElementsByClassName("second-img-display")[
          secondPic - 1
        ].style.display = "block";

        secondPic--;
      }
    });

  //Javascript code for main sponsor scroller

  let thirdPic = 0;
  const mainSponsor = document.getElementsByClassName("main-sponsor-selector");

  for (
    let i = 1;
    i < document.getElementsByClassName("main-sponsor-selector").length;
    i++
  ) {
    document.getElementsByClassName("main-sponsor-selector")[i].style.display =
      "none";
  }

  document
    .getElementsByClassName("center-con-wrap-forward")[0]
    .addEventListener("click", () => {
      if (thirdPic === mainSponsor.length - 1) {
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic].classList.remove("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic
        ].style.display = "none";
        document
          .getElementsByClassName("main-sponsor-selector")[0]
          .classList.add("img-on");
        document.getElementsByClassName(
          "main-sponsor-selector"
        )[0].style.display = "block";
        thirdPic = 0;
      } else {
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic].classList.remove("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic
        ].style.display = "none";
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic + 1].classList.add("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic + 1
        ].style.display = "block";

        thirdPic++;
      }
    });

  document
    .getElementsByClassName("center-con-wrap-backward")[0]
    .addEventListener("click", () => {
      if (thirdPic === 0) {
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic].classList.remove("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic
        ].style.display = "none";
        document
          .getElementsByClassName("main-sponsor-selector")
          [mainSponsor.length - 1].classList.add("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          mainSponsor.length - 1
        ].style.display = "block";

        thirdPic = mainSponsor.length - 1;
      } else {
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic].classList.remove("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic
        ].style.display = "none";
        document
          .getElementsByClassName("main-sponsor-selector")
          [thirdPic - 1].classList.add("img-on");
        document.getElementsByClassName("main-sponsor-selector")[
          thirdPic - 1
        ].style.display = "block";

        thirdPic--;
      }
    });

  //Javascript code for scrolling

  const leftScroll = document.querySelectorAll(".scrollLeft");

  const rightScroll = document.querySelectorAll(".scrollRight");

  const options = {
    threshold: 0,
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, options);

  leftScroll.forEach((el) => {
    appearOnScroll.observe(el);
  });

  rightScroll.forEach((el) => {
    appearOnScroll.observe(el);
  });
};
