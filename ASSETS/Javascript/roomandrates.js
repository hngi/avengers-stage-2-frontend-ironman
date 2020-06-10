var show = false;

window.addEventListener("load", function () {
  window.onscroll = function (e) {
    if (window.scrollY > 20) {
      document.getElementById("main-nav").style.backgroundColor =
        "rgba(0,0,0,0.5)";
    }
    if (window.scrollY <= 20 && !show) {
      document.getElementById("main-nav").style.backgroundColor = "transparent";
    }
  };

  document.getElementById("menu-hamburger").onclick = function () {
    var menu = document.getElementById("main-menu");
    if (menu.classList) {
      show = menu.classList.toggle("show");
    } else {
      // For IE9
      var classes = menu.className.split(" ");
      var i = classes.indexOf("show");

      if (i >= 0) {
        classes.splice(i, 1);
      } else {
        classes.push("show");
        show = true;
      }
      menu.className = classes.join(" ");
    }

    if (window.scrollY < 20) {
      if (show) {
        document.getElementById("main-nav").style.backgroundColor =
          "rgba(0,0,0,0.5)";
      } else {
        document.getElementById("main-nav").style.backgroundColor =
          "transparent";
      }
    }
  };
});
