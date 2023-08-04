function toggleDropdown(x) {
  var dropdown = x.nextElementSibling;
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
}

for (let i = 0; i < document.querySelectorAll(".dropbtn").length; i++) {
  document.addEventListener("click", function (e) {
    if (
      e.target != document.querySelectorAll(".dropbtn")[i] &&
      e.target != document.querySelectorAll(".dropbtn")[i].firstElementChild
    ) {
      document
        .querySelectorAll(".dropdown-content")
        [i].classList.remove("show");
    }
  });
}


$(window).ready(function () {
  $(".loader").animate({ opacity: 0 }, 1500, function () {});
  $(".loadingSrceen").animate({ opacity: 0 }, 1500, function () {
    $(".loadingSrceen").css("display", "none");
    $("body").css("overflow", "auto");
  });
});