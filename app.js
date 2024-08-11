const btnStyleNon = document.getElementById('btnBasic');
const btnStyle = document.getElementById('btnHightContrast');

btnStyleNon.addEventListener('click', function() {
    document.body.classList.toggle('btnBasic');
    document.body.classList.remove('btnHightContrast');
});


btnStyle.addEventListener('click', function() {
    document.body.classList.toggle('btnHightContrast');
    document.body.classList.remove('btnBasic');
});