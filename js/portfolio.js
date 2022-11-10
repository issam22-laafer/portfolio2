// Add smooth scrolling to all links______________________________________________
$(document).ready(function () {
  // Add smooth scrolling to all links

  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// typing__________________________________________________________________________
$(document).ready(function () {
  let typed = new Typed(".typing", {
    strings: ["YouTuber     ", "Web Developer    ", "Gamer    ", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // FastClick.attach(document.body);
  // $('#fullpage').fullpage();
});

// about-esction___________________________________________________________________________
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("avtive-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("avtive-tab");
}

// scroll-bare___________________________________________________________________________________
window.onload = function () {
  barreprog();
};

function barreprog() {
  window.addEventListener("scroll", function () {
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let largeur = document.documentElement.clientWidth;

    let barre = (position / hauteur) * largeur;
    document.getElementById("barre").style.width = barre + "px";
  });
}

// ___gotop___________________________________________________________________________________________
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("avtive", window.scrollY > 400);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
