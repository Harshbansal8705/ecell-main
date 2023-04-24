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




let slides=document.querySelectorAll('.slide-container');
let index=0;

function next(){
    slides[index].classList.remove('active');
    index=(index+1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index=(index-1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}









