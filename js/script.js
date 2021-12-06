function menurun() {
    document.getElementById("links").style.display = "block";
    document.getElementById("crossicon").style.display = "block";
    document.getElementById("hamburger-icon").style.display = "none";
    document.getElementById("links").style.width = "480px";
    document.getElementById("links").style.flexDirection = "column";
    document.getElementById("navpart").style.flexDirection = "column";
}

function menuclose() {
    document.getElementById("links").style.display = "none";
    document.getElementById("crossicon").style.display = "none";
    document.getElementById("hamburger-icon").style.display = "block";
}