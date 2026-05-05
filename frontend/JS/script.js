const formulario = document.getElementById("formulario"); //Agafa el form "Es el unic que hi ha"
const resultat = document.getElementById("resultat"); //Agafa el div de resultat que esta vuid, "backen injectara el resultat"

formulario.addEventListener("submit", async (e) => { 
    e.preventDefault();

    //Agafa els valors del form
    const telefono = document.getElementById("telefono").value.trim();
    const web = document.getElementById("web").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);

    //Valida els valors
    if (!telefono || !web || isNaN(precio)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    resultat.innerHTML = "Analizando vendedor...";

    try {
        //Fetca la API "Cridar a la API"
        const response = await fetch("http://localhost:3000/vendedor/analizar-vendedor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                telefono: Number(telefono), //Converteix a número i enviarlo
                web: web, //Envia el web
                verificacion: true, // Enviar true a la api "Aixo es feina del backend"
                precioMuyBajo: precio < 20, // Si el preu es molt baix, "Aixo cambiar-ho per un check-box"
                reportes: 0 // Contar reportes "Aixo es feina de una API del backend"
            })
        });

        const data = await response.json(); //Esperar a que la API respodi i guardar el valor en una variable "data"

        if (!data.ok) { //Verificar que la API no torinu un valor vuit
            alert(data.error);
            return;
        }

        mostrarResultado(data.data); //Mostrar el resultat en el div de resultat


    } catch (error) { 
        console.log(error);
        alert("Error conectando con el servidor");
    }
});

function mostrarResultado(data) { //Mostrar el resultat en el div de resultat
    resultat.innerHTML = `
        <h2>Resultado</h2>
        <p><strong>Puntos:</strong> ${data.puntos}</p>
        <p><strong>Estat:</strong> ${data.resultado.mensaje}</p>
        <p><strong>Razones:</strong></p>
        <ul>
            ${data.razones.map(razon => `<li>${razon}</li>`).join("")}
        </ul>`;
}

function alert(mensaje) { //Mostrar cualsevol alert en el div de resultat
    resultat.innerHTML = `<p style="color:red;">${mensaje}</p>`;
}