var btnAddClient = document.getElementById("addClient");
var btnUpdClient = document.getElementById("updateBtn");

var table = document.querySelector("#tableClients");

var tableBody = document.querySelector("#tableBody");

var requestURL = 'http://localhost:1012/clients';
var request = new XMLHttpRequest();


request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    'use strict';
    var clientData = request.response;
    makeTable(clientData);
}

function makeTable (jsonObj){
    'use strict'
    var thead = document.createElement('thead');
    var tr1 = document.createElement('tr');

    var th = document.createElement('th');
    th.id='tableContainer';
    th.textContent = 'Name';

    var th1 = document.createElement('th');
    th1.textContent = 'QResources';

    var th2 = document.createElement('th');
    th2.textContent = 'Last Update';

    var th3 = document.createElement('th');
    th3.textContent = 'Actions';

    tr1.append(th, th1, th2, th3);
    thead.append(tr1);
    table.append(thead);



    var tableParts = jsonObj;


    for (var i = 0; i<tableParts.length; i++){
        if(tableParts[i].state==false){
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            td1.textContent = tableParts[i].name;
            var name=tableParts[i].name;

            var td2 = document.createElement('td');
            var resources=tableParts[i].qResources;
            td2.textContent = resources;


            var td3 = document.createElement('td');
            td3.textContent = tableParts[i].updated;

            var clientId = tableParts[i].id;
            var td4 = document.createElement('td');
            td4.innerHTML = "<button type=\"button\" id=\"updateBtn\" class=\"btn btn-dark \" onclick='updateClientForm("+clientId+")'>Update</button>\n" +
                "\n" +
                "                <button type=\"button\" id=\"enableBtn\" class=\"btn btn-default \"onclick='enableClient("+clientId+")' >Enable</button>\n" +
                "\n" +
                "                <button type=\"button\" id=\"deleteBtn\" class=\"btn btn-danger \"onclick='deleteClient("+clientId+")' >Delete</button>\n";
           // sessionStorage.setItem("name"+clientId,name);
           // sessionStorage.setItem("resources"+clientId,resources);

            tr.append(td1, td2, td3, td4);
            tableBody.append(tr);
        }
    }
}
btnAddClient.onclick = function() {
    window.location.replace ('http://localhost:1012/create-client.html');
}
function updateClientForm(id){
    sessionStorage.setItem("clientId", id)
    window.location.replace ('http://localhost:1012/update-client.html');
    updateForm();
}
function updateForm(){
    'use strict';
    var clientId = sessionStorage.getItem("clientId");

    var postUrl = 'http://localhost:1012/clients/'+clientId;
    var post = new XMLHttpRequest();

    post.open("POST", postUrl, true);
    post.setRequestHeader('Content-Type', 'application/json');


    var name = document.getElementById("name").value;
    var state = document.getElementById("state").value;
    var qResources = document.getElementById("qResources").value;
    var dto = {"name": name, "id": clientId, "state": state, "qResources": qResources, "updated":  new Date()};

    var dataJson = JSON.stringify(dto);

    post.onload = function () {
        if (post.readyState === 4 && post.status === 200){
            window.alert("Client succesfully updated");
            window.location.replace ('http://localhost:1012/clients-admin.html');
        }
    };

    post.send(dataJson);
}




function deleteClient(id){
    'use strict';
    var deleteUrl = 'http://localhost:1012/client/'+ id;
    var deleteReq = new XMLHttpRequest();

    deleteReq.open("DELETE", deleteUrl, true);
    /* deleteReq.onload = function(){
         window.alert("Client succesfully deleted");
         window.location.replace ('http://localhost:1012/clients-admin.html');
     };*/
    deleteReq.send();
    window.alert("Client succesfully deleted");
    window.location.replace ('http://localhost:1012/clients-admin.html');
}

function enableClient(id){
    'use strict';
    //var clientId = sessionStorage.getItem("clientId");
   // var name = sessionStorage.getItem("name"+id);
    //var resources = sessionStorage.getItem("resources"+id);

    var enableUrl = 'http://localhost:1012/clients/'+id;
    var enable = new XMLHttpRequest();

    enable.open("PUT", enableUrl, true);
    enable.setRequestHeader('Content-Type', 'application/json');

    var dto = {"name": null, "id": id, "state": true, "qResources": null, "updated":  new Date()};

    var dataJson = JSON.stringify(dto);

    enable.send(dataJson);

    enable.onload = function () {
        if (enable.readyState === 4 && enable.status === 200){
            window.alert("Client succesfully updated");
            window.location.replace ('http://localhost:1012/clients-admin.html');
        }
    };
}


