const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


async function generateJoke() {
    
    const config = {
        headers: {
        Accept: 'application/json',
    },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    return data.joke
}


jokeBtn.addEventListener('click', async function(){
    jokeEl.innerText = await generateJoke();
    console.log(await generateJoke());
})


//jokeBtn.addEventListener('onClick', generateJoke());

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
// script.js
// Mostrando styles.css.
// API N1 Dad Jokes 
// Manuela Grajales Duque
// •
// 1 jun (Última modificación: 5 jun)
// En esta práctica consumirás una API que contiene chistes en inglés. Ya hay muchas cosas pre-hechas.


// Objetivos pedagógicos:
// Adquirir conocimientos y habilidades fundamentales para interactuar con APIs, y obtener datos en formato JSON,
// Manejar solicitudes GET,
// Aplicar el concepto de asincronismo,
// Manipular objetos,
// Manipular el DOM
// Para realizar esta actividad debes seguir las instrucciones definidas en el README.md

// Dad Jokes.mp4
// Vídeo

// index.html
// HTML

// README.md
// Texto

// script.js
// JavaScript

// styles.css
// Hoja de estilo
// Tu trabajo
// Asignado
// Comentarios privados
// Comentarios de la clase


// INSTRUCCIONES DE IMPLEMENTACION

// Bienvenidos al reto Dad Jokes, para cumplirlo deberás seguir lo siguiente:

// 1. Ver el video de explicación de reto.

// 2. Tienes los siguientes recursos: Entregamos el HTML con las clases correspondientes, css básico y js con la estructura que debes seguir*
   
//    * En este caso te damos una estructura guía donde debes encontrar las variables e identificadores necesarios en cada caso.

// 3. Deberás completar el css y el js para que el reto funcione.

// Resultado: El reto debe ser igual al que visualizas en el video (puedes cambiar colores e imagenes), debes crear un buen .body para que sea como el del video.


// ¡HINTS!

// CSS

//  - Debes nombrar las clases


// JS

//  - Las pistas están en el archivo
//  - Revisa la documentación de ASYNC AWAIT
