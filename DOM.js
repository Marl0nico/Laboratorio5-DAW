//Manipulación del DOM
//Simulación de carga de contenido
async function cargarContenido() {
    console.log("Cargando contenido...");
    try {
        // Simulación de una petición con un fetch
        const respuesta=await fetch("https://jsonplaceholder.typicode.com/posts/1"); // URL de ejemplo para simular el proceso de carga
        const datos=await respuesta.json();  // Convertimos la respuesta a JSON
        // Manipulación del DOM: inserción de contenido en el div por medio del id
        const contenidoDiv = document.getElementById("contenido");
        contenidoDiv.innerHTML= `
            <h2>${datos.title}</h2>
            <p>${datos.body}</p>`;
        console.log("Contenido cargado y DOM actualizado.");
    } catch (error) {
        console.error("Error al cargar el contenido:", error);
    }
}
document.getElementById("cargarBotón").addEventListener("click", cargarContenido); //funcionalidad en el botón definido