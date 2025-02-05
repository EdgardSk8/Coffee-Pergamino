document.addEventListener("DOMContentLoaded", async function () {
    const carruselContainer = document.querySelector("#carrusel-cafes");  // Seleccionamos el contenedor de cafés
    console.log("Cafes cargados");

    try {
        const response = await fetch("menu/cafes.json");
        const cafes = await response.json();

        cafes.forEach(cafe => {
            const card = document.createElement("li");  // Cambié div por li, ya que es un <ul> el contenedor
            card.classList.add("splide__slide", "card-menu");  // Clase necesaria para los slides de Splide

            card.innerHTML = `
                <div class="mini-contenedor-2">
                    <img src="${cafe.imagen || '../imagenes/menu/cafes/default.jpg'}" alt="${cafe.nombre}">
                    <p>${cafe.nombre} <br> ${cafe.precio ? 'Precio ' + cafe.precio + 'C$' : 'Precio no disponible'}</p>
                    <button>Obtener Ahora</button>
                </div>
            `;

            carruselContainer.appendChild(card);
        });

        // Inicializamos el carrusel Splide
        new Splide('.splide', {
            type: 'loop',
            perPage: 2,
            focus: 'center',
            interval: 5000,
        }).mount();

    } catch (error) {
        console.error("Error cargando los cafés:", error);
    }
});
