const formulario = document.getElementById("formulario");
const resultat = document.getElementById("resultat");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const telefono = document.getElementById("telefono").value.trim();
    const web = document.getElementById("web").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);

    if (!telefono || !web || isNaN(precio)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    resultat.innerHTML = "Analizando vendedor...";

    try {
        const response = await fetch("http://localhost:3000/vendedor/analizar-vendedor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                telefono: Number(telefono),
                web: web,
                verificacion: true,
                precioMuyBajo: precio < 20,
                reportes: 0
            })
        });

        const data = await response.json();

        if (!data.ok) {
            alert(data.error);
            return;
        }

        mostrarResultado(data.data);

    } catch (error) {
        console.log(error);
        alert("Error conectando con el servidor");
    }
});

function mostrarResultado(data) {
    resultat.innerHTML = `
        <h2>Resultado</h2>
        <p><strong>Puntos:</strong> ${data.puntos}</p>
        <p><strong>Estat:</strong> ${data.resultado.mensaje}</p>
        <p><strong>Razones:</strong></p>
        <ul>
            ${data.razones.map(razon => `<li>${razon}</li>`).join("")}
        </ul>
    `;
}

function alert(mensaje) {
    resultat.innerHTML = `<p style="color:red;">${mensaje}</p>`;
}