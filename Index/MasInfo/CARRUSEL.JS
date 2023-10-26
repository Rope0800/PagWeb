document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    const imagenes = [
        "./javacarrusel/9.jpg",
        "./javacarrusel/8.jpg",
        "./javacarrusel/7.jpg",
        "./javacarrusel/5.jpg",
        "./javacarrusel/6.jpg"
    ];

    let currentIndex = 0;

    function showImage(index) {
        imageContainer.innerHTML = `<img src="${imagenes[index]}" alt="Imagen del Carrusel">`;
    }

    function avanzar() {
        currentIndex = (currentIndex + 1) % imagenes.length;
        showImage(currentIndex);
    }

    function retroceder() {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    prevButton.addEventListener("click", retroceder);
    nextButton.addEventListener("click", avanzar);
});