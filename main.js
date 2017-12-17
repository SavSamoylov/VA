const contentBox = document.querySelector(".va__ContentBox");
const header = document.querySelector(".va__Header");
const contentBody = document.querySelector(".va__Body");
const sideIcons = document.querySelectorAll(".va__SideMenu__OptionIcon");


// HEADER SCROLL FUNCTION ==============================================
////////////////////////////////////////////////////////////////////////

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


// SIDE MENU ICONS HOVER ================================================
/////////////////////////////////////////////////////////////////////////

Array.from(sideIcons).forEach(icon => {



    icon.onmouseover = function() {
        const iconChildren = this.childNodes;
        Array.from(iconChildren)[3].setAttribute("style", "display:block;")

    }

    icon.onmouseout = function() {

        const iconChildren = this.childNodes;
        Array.from(iconChildren)[3].setAttribute("style", "display:none;")

    }

})

// SIDE MENU SCROLL BUTTONS ===============================================
///////////////////////////////////////////////////////////////////////////

const arrowBtns = document.querySelectorAll('.va__SideMenu__OptionsScroll__Arrow');
const sideIconsContainer = document.querySelector('.va__SideMenu__Options');
let downClicks = 0;
console.dir(sideIconsContainer)

Array.from(arrowBtns).forEach(btn => {
    btn.addEventListener('click', (e) => {
        let topValue = sideIconsContainer.style.top;
        const direction = e.target.getAttribute('data-direction').trim();

        if (direction === 'up') {
            if (downClicks > 0) {
                downClicks--;
                if (topValue === '') {
                    sideIconsContainer.style.top = "70px"
                } else {
                    const oldTopValue = parseInt(topValue.split("px")[0]);
                    sideIconsContainer.style.top = (oldTopValue + 70) + "px";
                }
            }
        } else if (direction === "down") {
            if (downClicks < 5) {
                downClicks++;
                if (topValue === '') {
                    sideIconsContainer.style.top = "-70px"
                } else {
                    const oldTopValue = parseInt(topValue.split("px")[0]);
                    sideIconsContainer.style.top = (oldTopValue - 70) + "px";
                }
            }
        }

    })
})

window.addEventListener("resize", () => {
    window.innerHeight > "431" ? sideIconsContainer.style.top = "0" : '';
})