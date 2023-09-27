// captura de elementos con las clase .icons y guardo la referencia de memoria en la constante technologies.
const technologies = document.querySelectorAll(".icons")


// llamo a la constante technologies y la recorro con un forEach para agregarle un eventlistener a cada elemento de la estructura de datos (array). El escuchador de eventos en este caso detecta cuando el usuario posa el mouse sobre dicho elemento y obtiene el atributo information del mismo para poder crear un elemento div con la clase .description para poder dare estilos con CSS y un elemento p al cual se le va a insertar el texto obtenido del atributo guardado en la constante description. Luego hay otro escuchador de elementos para que el elemento desaparezca cuando el usuario remueve el puntero del mouse del elemento. Los condicionales son para chequear cuando crear y borrar los elementos y así evitar mensajes de errores en el navegador. :)

technologies.forEach(t => {
    let descriptionElement; // Variable para almacenar la referencia al elemento description

    t.addEventListener("mouseover", () => {
        const description = t.getAttribute("information");

        if (!descriptionElement) {
            descriptionElement = document.createElement("div");
            descriptionElement.className = "description";
            const paragraph = document.createElement("p");
            paragraph.textContent = description;
            descriptionElement.appendChild(paragraph);
        }

        t.appendChild(descriptionElement);
    });

    t.addEventListener("mouseout", () => {
        if (descriptionElement && descriptionElement.parentElement === t) {
            t.removeChild(descriptionElement);
        }
    });
});
