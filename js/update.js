// Get the modal
//var appUpdate = new function(){
    //this.Modal=function () {
function updateClient() {
    var updateModal = document.getElementById('updateModal');

// Get the button that opens the modal
    var updateBtn = document.getElementById("updateBtn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("updateClose")[0];

// When the user clicks on the button, open the modal
    updateBtn.onclick = function () {
        updateModal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        updateModal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == updateModal) {
            updateModal.style.display = "none";
        }
    }

    /*this.el = document.getElementById('saveBtn');


    var addProject = function(event){
        event.preventDefault();
        var nuevaFilaProjectTemp = document.getElementById('nuevaFilaProject').innerHTML;

        var ultNro = document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML;
        ultNro = parseInt(ultNro)+1;
        document.querySelector('table#tableProjects tbody').innerHTML += nuevaFilaProjectTemp;
        document.querySelector('table#tableProjects tbody tr:last-child th').innerHTML = ultNro;
    };
    var agregarProjectBtn = document.querySelector('#addProject');
    agregarProjectBtn.addEventListener('click', addProject);*/

    var app = new function () {
        // Code
    }

    this.el = document.getElementById('');
    // }
}


//}
