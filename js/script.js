const cats = document.querySelectorAll('.cat');
const popup = document.getElementById('popup');
const popup_title = document.getElementById('popup-title');
const popup_info = document.getElementById('popup-info');
const logo_container = document.getElementById('logo-container');

const popup_elements = [
    {
        id: "cat-html",
        title: "HTML",
        p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo eius corporis, voluptatem eaque, quas minima repudiandae laborum cum dolorem doloremque ab modi vel fuga consectetur, sint cumque dicta magni vitae.",
        logo_id: 'logo-html'
    },
    {
        id: "cat-css",
        title: "CSS",
        p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo eius corporis, voluptatem eaque, quas minima repudiandae laborum cum dolorem doloremque ab modi vel fuga consectetur, sint cumque dicta magni vitae.",
        logo_id: 'logo-css'
    },
    {
        id: "cat-js",
        title: "JavaScript",
        p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo eius corporis, voluptatem eaque, quas minima repudiandae laborum cum dolorem doloremque ab modi vel fuga consectetur, sint cumque dicta magni vitae.",
        logo_id: 'logo-js'
    }];

cats.forEach((cat, index) => {
    cat.addEventListener('click', function () {
        popup.style.display = 'flex';

        const catIndex = popup_elements.findIndex(element => element.id === cat.id);

        if (catIndex !== -1) {
            popup_title.innerText = popup_elements[catIndex].title;
            popup_info.innerText = popup_elements[catIndex].p;

            // Crear un nuevo elemento SVG y adjuntar el fragmento SVG
            const svgElement = document.getElementById(popup_elements[catIndex].logo_id);
            logo_container.appendChild(svgElement);
        }
    });
});