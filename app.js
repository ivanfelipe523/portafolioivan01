let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < quadrates.length; i++) {
        quadrates[i].className = quadrates[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    quadrates[slideIndex - 1].className += " active";
}

// Función para cambiar automáticamente las imágenes cada 5 segundos
function autoSlide() {
    plusSlides(1);
}

// Establecer un intervalo para llamar a la función autoSlide cada 5 segundos (5000 ms)
setInterval(autoSlide, 5000);
