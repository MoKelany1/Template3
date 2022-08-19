let upBtn = document.querySelector(".top-button");
document.querySelector("body").onscroll = function() {
    let Offset = pageYOffset;
    if (Offset > 300) {
        upBtn.style.visibility = "visible";
    } else {
        upBtn.style.visibility = "hidden";
    }
}