const cats = document.querySelectorAll('.cat');
const popup = document.getElementById('popup');
const popup_title = document.getElementById('popup-title');
const popup_info = document.getElementById('popup-info');

cats.forEach(cat => {
    cat.addEventListener('click', function () {
        popup.style.display = 'flex';
    });
});