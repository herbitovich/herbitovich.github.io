window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    header = document.getElementById("site-header")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.height = "55px";
      header.style.opacity = "0.9";
    } 
    else {
      header.style.height = "150px";
      header.style.opacity = "1";
    }
}

function openMenu() {
    document.getElementById("site-header").className = "open";
    document.body.style.overflowY = "hidden";

    let hamburger = document.getElementById("hamburger");
    hamburger.classList.add("hamburger-open");
    hamburger.setAttribute("onclick", "closeMenu()");
}
function closeMenu() {
    document.getElementById("site-header").classList.remove("open");
    document.body.style.overflowY = "auto";

    let hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("hamburger-open");
    hamburger.setAttribute("onclick", "openMenu()");
}