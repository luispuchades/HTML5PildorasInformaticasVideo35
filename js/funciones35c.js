/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS X
 * Origin: Video35.html ==> Superposiciones e Imágenes
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento,
    imagen,
    lienzo;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

// Indicamos que se trata de un canvas 2d
lienzo = elemento.getContext('2d');
imagen = new Image();
imagen.src = 'img/html5online.jpg';

function dibujarImagen () {
    'use strict';

// Extracción de elementos desde HTTP
//    imagen.src="http://www.pildorasinformaticas.com/archivos/logos/html5online.jpg";
//****Problema con la carga directa desde www.pildorasinformaticas.com ****

//MANIPULACION DE IMAGENES
//    Dibujamos imagen
//    lienzo.drawImage(imagen, 250, 300)},
//    Dibujamos la imagen redimensionándola a 400px de ancho y 350px de alto
//    lienzo.drawImage(imagen, 250, 300, 400, 350)}
//    Ampliamos la imagen a todo el canvas
//    lienzo.drawImage(imagen, 0, 0, elemento.width, elemento.height)} ,
//    Recortamos la imagen desde la posición 50,10 original
//    Le damos un tamaño de 75,75
//    Posicinamos la imagen en las coordenadas de canvas 0,0
//    Redimensionamos la imagen a 300,300
    lienzo.drawImage(imagen, 50, 10, 75, 75, 0, 0, 300, 300);
}


function comenzar() {
    'use strict';

    imagen.addEventListener('load', dibujarImagen, false);
}


//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',comenzar,false);
