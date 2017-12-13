const contentBox = document.querySelector(".va__ContentBox");
const header = document.querySelector(".va__Header");
const contentBody = document.querySelector(".va__Body");

console.dir(contentBox)
contentBox.addEventListener("scroll", function(e) {
    // console.log("Scrolling", this.scrollTop)
    if (this.scrollTop > 1) {
        header.style.position = "fixed"
        header.style.width = contentBox.clientWidth + "px"
        contentBody.style.paddingTop = "75px"
    } else {
        header.style.position = "static"
        header.style.width = "100%"
        contentBody.style.paddingTop = "0"
    }
});