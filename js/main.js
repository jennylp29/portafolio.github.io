

function activarpanel() {
    const contenedor = document.querySelector(".cont-colores");

    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("filecss")
function dark(){

    link.href="css/styleblu.css";
}
function ligth(){

    link.href="css/styleblucopy.css";
}
function principal(){

    link.href="css/style.css";
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });