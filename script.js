let elem = document.getElementsByClassName("hamburger")[0];
elem.addEventListener("click", () => {
    let menu = document.getElementsByClassName("menu")[0];
    if (elem.classList.contains("is-active"))
    {
        elem.classList.remove("is-active");
    }
    else {
        elem.classList.add("is-active");
    }
    if (menu.classList.contains("menu-visible"))
    {
        menu.classList.remove("menu-visible");
        menu.style.display = "flex";
    }
    else {
        menu.classList.add("menu-visible");
        menu.style.display = "flex";
    }
})