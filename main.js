//cara header berubah warna
window.addEventListener('scroll', function() {
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});

// membuat navigation mobile
const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    humburger.classList.remove("active");
})