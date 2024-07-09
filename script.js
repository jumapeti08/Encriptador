let nuevoTexto = "Este es el nuevo texto";
let respuesta = document.getElementById(parrafo)
function encriptar(elementoId, titulo) {
    const parrafo = document.getElementById(elementoId);
    const tit = document.getElementById(titulo);
    const imagen = document.getElementById('imagen');
    const boton = document.getElementById('miBoton');
    boton.style.display = 'block';
    imagen.remove();
    parrafo.style.fontSize = 24;
    parrafo.innerText = nuevoTexto;
    tit.innerHTML = "";

}