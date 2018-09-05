var addProject = function(event){
    event.preventDefault();
    var nuevaFilaProjectTemp = document.getElementById('nuevaFilaProject').innerHTML;

    var ultNro = document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML;
    ultNro = parseInt(ultNro)+1;
    document.querySelector('table#tableProjects tbody').innerHTML += nuevaFilaProjectTemp;
    document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML = ultNro;
};
var agregarProjectBtn = document.querySelector('#addProject');
agregarProjectBtn.addEventListener('click', addProject);