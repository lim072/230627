let button = document.querySelector(".bars");
let header = document.querySelector(".header");
let openMenu = 0;




// button.addEventListener('click', menuOpen)
// html에서 속성값 onclick 부여 inline으로 호출



function menuOpen() {
    let tab = document.querySelector(".header-tab-menu");
    if (openMenu == 0) {
        tab.style.top = "130px"
        openMenu = 1;
    } else if (openMenu == 1) {
        tab.style.top = "-120px"
        openMenu = 0;
    }
}


window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let bottomBar = document.querySelector(".header .main-wrap .bottom-bar")
    if (window.pageYOffset > 100) {
        document.querySelector(".header .main-wrap .top-bar").style.display = "none"
        document.querySelector(".header-tab-menu").style.top = "-150px"
        header.style.height = "50px"
        openMenu = 0
    } else {
        document.querySelector(".header .main-wrap .top-bar").style.display = "flex"
        header.style.height = "130px"
    }
})
