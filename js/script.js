const cats = document.querySelectorAll('.cat');
const popup = document.getElementById('popup');
const popup_title = document.getElementById('popup-title');
const popup_info = document.getElementById('popup-info');
const logo_container = document.getElementById('logo-container');

const popup_elements = [
    {
        id: "cat-html",
        title: "HTML",
        p: "Hyper Text Markup Language\nForma parte del lenguaje utilizado para la elaboración de sitios web y hace referencia a los enlaces que conectan páginas web entre sí, dentro de un único sitio o varios.",
        logo_id: 'logo-html'
    },
    {
        id: "cat-css",
        title: "CSS",
        p: "Cascading Style Sheets\nse puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el color y el tamaño de los encabezados y los enlaces, también puede utilizar para crear un diseño.",
        logo_id: 'logo-css'
    },
    {
        id: "cat-js",
        title: "JavaScript",
        p: "Es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más)",
        logo_id: 'logo-js'
    }];

cats.forEach((cat, index) => {
    cat.addEventListener('click', function () {
        popup.style.display = 'flex';

        const catIndex = popup_elements.findIndex(element => element.id === cat.id);

        if (catIndex !== -1) {
            popup_title.innerText = popup_elements[catIndex].title;
            localStorage.setItem("catName", popup_title.innerText);
            popup_info.innerText = popup_elements[catIndex].p;

            const svgElement = document.getElementById(popup_elements[catIndex].logo_id).cloneNode(true);

            logo_container.innerHTML = "";
            logo_container.appendChild(popup_info);
            logo_container.appendChild(svgElement);
        }
    });
});

function hidePopup() {
    popup.style.display = "none";
}
