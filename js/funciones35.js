/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS X
 * Origin: Video35.html ==> Superposiciones e Imágenes
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo,
        texto,
        alturaTexto,
        alturaTextoPx;

    texto = "Hola alumnos";
    alturaTexto = 80;
    alturaTextoPx = alturaTexto + "px";

    //INSERCION DE TEXTO
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Definimos el tipo de fuente
    //Definimos un color
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";
    lienzo.fillStyle="#880000";
    //Definimos un rectángulo
    lienzo.fillRect(400,250,300,100);
    lienzo.globalCompositeOperation="destination-atop";
    lienzo.fillStyle="#AAAAFF";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.fillText(texto, 550, 300);
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',cargarDocumento,false);
