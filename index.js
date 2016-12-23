"use strict"

var paragraph = document.querySelector("#main")
paragraph.innerHTML = "Adalab"
var resultado = ""
var frase = "<li>Adalab</li>"



function creaLis(){
for (var i = 0; i < 100; i++) {

  resultado = resultado + frase 
}
paragraph.innerHTML = resultado

}

creaLis ()


var button = document.querySelector ("#boton")

function azul (numero) {
var lis = document.querySelectorAll ("li")
for  (var j = 0; j < lis.length; j++) {
 
 if (j < numero){

lis [j].style.backgroundColor = "blue"
 } else {

lis [j].style.backgroundColor = "white"



 }
}
}
//para pasar parámetros a una función que se ejecuta al escuchar un evento.
button.addEventListener ("click", function(){
   var numeroAleatorio = Math.ceil (Math.random() * 100)
  azul (numeroAleatorio)
})




