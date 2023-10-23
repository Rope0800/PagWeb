document.getElementById('logo').addEventListener('click', function() {
    window,scrollTo({
        top: 0,
        left: 0,
    behavior: 'smooth'
});
});

const imagenes = ["JS/Galeria/tony.jpg", "imagen2.jpg", "imagen3.jpg"]; // Agrega las rutas de tus imágenes
let indice = 0; // Índice de la imagen actual
const imagenCarrusel = document.getElementById("imagenCarrusel");

function mostrarImagen() {
    imagenCarrusel.src = imagenes[indice];
}

function avanzar() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0; // Vuelve al principio cuando llega al final
    }
    mostrarImagen();
}

function retroceder() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1; // Va al último cuando retrocede desde el primero
    }
    mostrarImagen();
}
