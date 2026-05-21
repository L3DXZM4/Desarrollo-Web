document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const contentContainer = document.getElementById("content");

    // Activa la reproducción de la música al primer clic del usuario en la pantalla
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(error => console.log("Interacción requerida por navegador:", error));
        }
    }, { once: true });


    // Escucha de eventos dinámicos para cambiar el contenido de los contenedores
    contentContainer.addEventListener("click", (e) => {
        
        // Acción del botón "Entrar" -> Cambia a la interfaz de pagina2 sin recargar
        if (e.target && e.target.id === "btn-entrar") {
            e.preventDefault();
            
            contentContainer.innerHTML = `
                <div class="pagediv">
                    <h2>En Creacion...</h2>
                    <div class="container">
                        <img class="image1 tool-img" src="logo2.png" alt="Logo 2">
                        <img class="image2 tool-img" src="logo3.png" alt="Logo 3">
                    </div>
                    <p><strong>Lanzamiento estimado para 2024.</strong></p>
                    <br>
                    <button id="btn-volver" class="btn-entrar">Volver</button>
                </div>

                <div class="pagediv">
                    <h2>Esperanos...</h2>
                    <p><strong>Aprendemos todos los dias</strong></p>
                </div>
            `;
        }

        // Acción del botón "Volver" -> Regresa a la interfaz inicial de index sin recargar
        if (e.target && e.target.id === "btn-volver") {
            e.preventDefault();
            
            contentContainer.innerHTML = `
                <div class="pagediv">
                    <h2>En Creacion...</h2>
                    <img src="logo.jpg" alt="Logo" class="logo-img">
                    <p><strong>Lanzamiento estimado para 2024.</strong></p>
                    <br>
                    <button id="btn-entrar" class="btn-entrar">Entrar</button>
                </div>

                <div class="pagediv">
                    <h2>Esperanos...</h2>
                    <p><strong>Solo dejamos de aprender cuando no volvemos a despertar.</strong></p>
                </div>
            `;
        }
    });
});