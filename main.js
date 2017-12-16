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

Array.from(arrowBtns).forEach(btn => {
    btn.addEventListener('click', (e) => {
        const direction = e.target.getAttribute('data-direction').trim();
        direction === 'up' ? sideIconsContainer.style.top = '-150px' : '';
        direction === 'down' ? sideIconsContainer.style.top = '150px' : '';
    })
})