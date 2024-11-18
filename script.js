// 1) Crea una aplicación con un botón que genere una ventana cuyo ancho y alto será el 50% del ancho y alto disponibles de la ventana.
var btn = document.querySelector("button"); // Selecciono el btn
btn.addEventListener("click", function () { // Le creo un evento tipo click

  var width = window.innerWidth; // Toma el valor del ancho del navegador disponible
  var height = window.innerHeight; // Toma el valor del alto del navegador disponible

  var newWidth = width / 2; // Lo divido en 2 para que sea el 50% disponible
  var newHeight = height / 2;

  /*
  Calcular la posición para centrar la nueva ventana
    var left = (width - newWidth) / 2;
    var top = (height - newHeight) / 2;
  */
  var nuevaVentana = window.open('', 'Nueva ventana', `width=${newWidth},height=${newHeight}`); //Creo la nueva ventana, le doy un nombre y el ancho y alto calculados al 50%
  nuevaVentana.document.write(`
    <p>${obtenerNavegador()}</p> 
    <p>¿Da su consentimiento para almacenar cookies?</p>
    <button id="accept">Aceptar</button>
    <button id="decline">Rechazar</button>
    `); 
    // Llamo a la función obtenerNavegador para mostrar el texto correcto, como está función retorna un texto es el que se mostrará dentro de este write.
    // Agrego 2 btns para cumplir con el 3er punto.


  // 3) El texto preguntará si el usuario da su consentimiento para almacenar las cookies y se deberá actualizar la propiedad destinada a ello en el navegador con la resapuesta que el usuario dará mediante dos botones que también incluirá la ventana.

 // Añado un evento al btn con ID "accept"
  nuevaVentana.document.getElementById("accept").addEventListener('click', function () {
    document.cookie = "consent=true"; // Le estoy asignando una cookie que se llama consent y tiene como valor true.
  });

// Añado un evento al btn con ID "decline"
  nuevaVentana.document.getElementById("decline").addEventListener('click', function () {
    document.cookie = "consent=false"; // Le estoy asignando una cookie que se llama consent y tiene como valor false.
  });

  /*
  También existe la posibilidad con navigator.cookieEnabled de verificar si las cookies están habilitadas o no en el navegador del usuario. Esta devuelve true o false.
    Pero No se puede modificar ya que es una propiedad de solo lectura.
  */
  

    // 4) Agregamos un evento que se ejecutará cuando se cierre la ventana emergente
  nuevaVentana.onbeforeunload  = function () {
    mostrarInformacion(); // Llamamos a la función para mostrar la información cuando la ventana se cierre
  };

});


// 2) Esta ventana mostrará un texto que si se está ejecutando la aplicación en un navegador Chrome será en español pero si se está ejecutando en Firefox será en el lenguaje preferido del usuario.
function obtenerNavegador (){
    if (navigator.userAgent.includes("Chrome")){ // Si al obtener la información del navegador este incluye "Chrome" entonces ....
        return "Esta aplicación se está ejecutando en Chrome.";
    } else if (navigator.userAgent.includes("Firefox")){ // Si al obtener la información del navegador este incluye "Firefox" entonces ....
        var userLang = navigator.language || navigator.languages[0]; /* El motivo por el cual se utiliza navigator.language || navigator.languages[0] es para asegurar que se obtenga el idioma preferido del usuario en diferentes navegadores, ya que navigator.language y navigator.languages pueden comportarse de manera diferente dependiendo del navegador y su configuración.*/
        return `Esta aplicación se está ejecutando en tu idioma preferido: ${userLang}.`;
    } else {
        return "Esta aplicación se está ejecutando en un navegador desconocido.";
    }
}

// 4) Por último, una vez cerrada la ventana, se deberá mostrar escrito en pantalla: 
/*
    - Resolución de la pantalla.
    - Navegador.
    - URL de la página.
    - Consentimiento de cookies. 
*/
function mostrarInformacion() {
    let resolucion = `Resolución de la pantalla: ${window.screen.width}x${window.screen.height}`;
    let navegador = obtenerNavegador(); // Usamos la función obtenerNavegador ya definida
    let url = `URL de la página: ${window.location.href}`;
    let consentimiento = getCookie("consent") || "No se ha dado un consentimiento";
  
    // Mostrar la información en la página principal
    document.body.innerHTML += `
      <p>${resolucion}</p>
      <p>${navegador}</p>
      <p>${url}</p>
      <p>Consentimiento de cookies: ${consentimiento}</p>
    `;
  }

  // 3) Función para obtener una cookie por nombre
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null; // Si la cookie no existe
  }