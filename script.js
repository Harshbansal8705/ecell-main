let elem = document.getElementsByClassName("hamburger")[0];
elem.addEventListener("click", () => {
    if (elem.classList.contains("is-active"))
    {
        elem.classList.remove("is-active");
    }
    else {
        elem.classList.add("is-active");
    }
})