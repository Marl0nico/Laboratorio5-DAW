//Página oficial de Apple - MacBook Pro
//Asincronismo
async function macPro() { //define la función sobre la que se va a trabajar
    console.log("MacBook Pro - Mind-Blowing - Head-Turning...");
    try {
        const respuesta=await fetch("https://www.apple.com/macbook-pro/"); //petición a la página oficial de Apple
        if (!respuesta.ok) { //verifica si la respuesta es exitosa o no y lanza un error en caso de ser así
            throw new Error("Error al cargar el producto");
        }
        const html=await respuesta.text(); //obtiene la respuesta del contenido HTML y lo almacena como tipo texto
        console.log("Contenido cargado desde la página oficial de Apple:\n", html.slice(0, 1000)); //se imprime los primeros 1000 caracteres de la respuesta
    } catch (error) { //verifica cualquier tipo de error durante la ejecución de la solicitud o proceso
        console.error("Error al cargar el contenido:", error);
    }
}
macPro(); //llamado de la función para iniciar la ejecución


