window.alert(
    "Por favor responda las siguientes preguntas, digite 1 para verdad 0 para falso"
);

var respuesta = parseInt(prompt("digite 1 para verdad 0 para falso"));
if (respuesta == 1) {
    console.log("Su respuesta es verdadero.");
}
if (respuesta == 0) {
    console.log("Su respuesta es falso");
}

/* esta estructura esta hecha para crear la primera variable e 
   imprimir la respuesta de la persona en la consola. 
*/

var respuesta2 = parseInt(prompt("digite 1 para verdad 0 para falso"));

if (respuesta2 == 1) {
    console.log("Su respuesta es verdadero.");
}
if (respuesta2 == 0) {
    console.log("Su respuesta es falso");
}

var respuesta3 = parseInt(prompt("digite 1 para verdad 0 para falso"));

if (respuesta3 == 1) {
    console.log("Su respuesta es verdadero.");
}
if (respuesta3 == 0) {
    console.log("Su respuesta es falso");
}

var respuesta4 = parseInt(prompt("digite 1 para verdad 0 para falso"));

if (respuesta4 == 1) {
    console.log("Su respuesta es verdadero.");
}
if (respuesta4 == 0) {
    console.log("Su respuesta es falso");
}

var respuesta5 = parseInt(prompt("digite 1 para verdad 0 para falso"));

if (respuesta5 == 1) {
    console.log("Su respuesta es verdadero.");
}
if (respuesta5 == 0) {
    console.log("Su respuesta es falso");
}

var resultado = respuesta + respuesta2 + respuesta3 + respuesta4 + respuesta5;

console.log(resultado);

//se usa el if para dependiendo del valor total se da una respuesta//

if (resultado == 5) {
    resultado = console.log("ballena");
}

if (resultado =Learn more.
    resultado = 4) {
    resultado = window.alert("serpiente");
    console.log("serpiente");
}
if (resultado == 3) {
    resultado = console.log("ballena");
}

if (resultado == 2) {
    resultado = console.log("serpiente");
}

if (resultado == 1) {
    resultado = console.log("jirafa");
}
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
