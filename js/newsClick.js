window.onload = () => {
  console.log("ran");
  console.log(document.getElementsByClassName("news-flex"));
  for (
    let x = 0;
    x < document.getElementsByClassName("news-flex").length;
    x++
  ) {
    document
      .getElementsByClassName("news-flex")
      [x].addEventListener("click", () => {
        document
          .getElementsByClassName("arrow")
          [x].classList.toggle("appearArrow");

        if (document.getElementsByClassName("expandable")[x].style.maxHeight) {
          document.getElementsByClassName("expandable")[x].style.maxHeight =
            null;
        } else {
          document.getElementsByClassName("expandable")[x].style.maxHeight =
            document.getElementsByClassName("expandable")[x].scrollHeight +
            "px";
        }

        if (document.getElementsByClassName("expandable")[x].style.marginTop) {
          document.getElementsByClassName("expandable")[x].style.marginTop =
            null;
        } else {
          document.getElementsByClassName("expandable")[x].style.marginTop =
            "50px";
        }
      });
  }
};
