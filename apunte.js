/*
El BOM (Browser Object Model) es una interfaz de programación en JavaScript que permite interactuar con el navegador web, independientemente del contenido de la página web (es decir, del DOM, que se ocupa de la estructura del documento).
En resumen, el BOM proporciona un conjunto de objetos y métodos que te permiten manejar aspectos del navegador y la ventana de visualización, como:*/

// Elementos clave del BOM:

// window: Es el objeto global principal del BOM. Representa la ventana del navegador y contiene métodos y propiedades que permiten interactuar con el navegador, como:
window.alert(); // Muestra una alerta en el navegador.
window.setTimeout(); // Ejecuta una función después de un cierto tiempo.
window.location; // Permite obtener o cambiar la URL de la página actual.
window.open(URL, nombre, especificaciones, reemplazar); /*  abre una nueva ventana en el navegador:
Características comunes de window.open
width: Ancho de la nueva ventana.
height: Alto de la nueva ventana.
left: Posición horizontal de la nueva ventana.
top: Posición vertical de la nueva ventana.
resizable: Si la ventana puede cambiar de tamaño (yes/no).
scrollbars: Si la ventana tendrá barras de desplazamiento (yes/no).
status: Si se mostrará la barra de estado (yes/no).
*/

//navigator: Proporciona información sobre el navegador sobre el navegador en el que se está ejecutando el script, como el nombre, la versión y el sistema operativo. Algunos ejemplos son:
navigator.userAgent; // Devuelve una cadena con detalles sobre el navegador.
navigator.language;  // Proporciona el lenguaje preferido del usuario.
//EJEMPLO
if (navigator.userAgent.includes('Chrome')) {
    console.log('Estás usando Google Chrome.');
} else if (navigator.userAgent.includes('Firefox')) {
    console.log('Estás usando Firefox.');
}


// screen: Permite acceder a la información sobre las dimensiones de la pantalla del usuario, como:
screen.width; // Ancho de la pantalla.
screen.height; // Alto de la pantalla.


// location: Proporciona información sobre la URL de la página actual, y permite cambiarla.
location.href;  //Devuelve o cambia la URL completa.
location.reload(); // Recarga la página.
location.assign(url); //Carga una nueva URL, manteniendo el historial.
location.replace(url); //Carga una nueva URL y reemplaza la actual en el historial, evitando que el usuario regrese a la anterior con el botón "Atrás".



// history: Permite manipular el historial de navegación del navegador.
history.back(); // Va a la página anterior en el historial.
history.forward(); // Va a la siguiente página en el historial.
history.pushState(); // Cambia la URL sin recargar la página.
history.go(n); //Permite moverse n páginas hacia atrás o hacia adelante en el historial. Valor negativo serán páginas atrás, por ejemplo history.go(-1); es lo mismo que history.back();


// document: Aunque más asociado al DOM, también se incluye en el BOM ya que es una referencia al documento cargado en la ventana del navegador.