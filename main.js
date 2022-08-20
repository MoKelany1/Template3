let otherBtn = document.querySelector(".other");
let megaMenu = document.querySelector(".megamenu")
otherBtn.addEventListener("click",function() {
    let state = megaMenu.getAttribute("state")
    if (state === "closed") {
        megaMenu.setAttribute("state","opened")
        megaMenu.style.opacity = "1";
        megaMenu.style.zIndex = "2"
        megaMenu.style.top = "100%"
    } else if (state === "opened") {
        megaMenu.setAttribute("state","closed")
        megaMenu.style.opacity = "0";
        megaMenu.style.zIndex = "-1";
        megaMenu.style.top = "calc(100% - 50px)";
    }
})