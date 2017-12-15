const contentBox = document.querySelector(".va__ContentBox");
const header = document.querySelector(".va__Header");
const contentBody = document.querySelector(".va__Body");
const sideIcons = document.querySelectorAll(".va__SideMenu__OptionIcon");

console.dir(contentBox)
contentBox.addEventListener("scroll", function(e) {
    // console.log("Scrolling", this.scrollTop)
    if (this.scrollTop > 0) {
        header.style.position = "fixed"
        header.style.width = contentBox.clientWidth + "px"
        contentBody.style.paddingTop = "75px"
    } else {
        header.style.position = "static"
        header.style.width = "100%"
        contentBody.style.paddingTop = "0"
    }
});

Array.from(sideIcons).forEach(icon => {



    icon.onmouseover = function() {
        console.log(this.childNodes)
        const iconChildren = this.childNodes;
        Array.from(iconChildren)[3].setAttribute("style", "display:block;")

    }

    icon.onmouseout = function() {

        const iconChildren = this.childNodes;
        Array.from(iconChildren)[3].setAttribute("style", "display:none;")

    }



})