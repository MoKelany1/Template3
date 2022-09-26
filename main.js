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

let skillsDiv = document.querySelector(".our-skills")
let skillsOffset = skillsDiv.offsetTop;
let skillSpans = document.querySelectorAll(".our-skills .skills .skill .progress span")
let skillValue = document.querySelectorAll(".our-skills .skills .skill h3 span")
window.onscroll = function(){
    if(window.pageYOffset >= skillsOffset){
        skillSpans.forEach(function(e){
            e.style.width = `${e.getAttribute("data-width")}`
        })
        skillValue.forEach(function(e){
            e.innerHTML = `${e.getAttribute("data-value")}`
        })
    } else{
        skillSpans.forEach(function(e){
            e.style.width = `0%`
        })
        skillValue.forEach(function(e){
            e.innerHTML = `0%`
        })
    }
}
