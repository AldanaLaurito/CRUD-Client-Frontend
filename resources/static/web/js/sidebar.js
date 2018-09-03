// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    console.log('click')
    document.getElementById('client-sidebar').classList.toggle('active');
    console.log(document.getElementById('client-sidebar'))
});