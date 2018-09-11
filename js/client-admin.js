
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
    th.textContent = 'Id';

    var th1 = document.createElement('th');
    th1.textContent = 'Name';

    var th2 = document.createElement('th');
    th2.textContent = 'State';

    var th3 = document.createElement('th');
    th3.textContent = 'QResources';

    var th4 = document.createElement('th');
    th4.textContent = 'Last Update';

    var th5 = document.createElement('th');
    th5.textContent = 'Actions'

    tr1.append(th, th1, th2, th3, th4, th5);
    thead.append(tr1);
    table.append(thead);



    var tableParts = jsonObj;

    for (var i = 0; i<tableParts.length; i++){

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.textContent = tableParts[i].id;

        var td2 = document.createElement('td');
        td2.textContent = tableParts[i].name;

        var td3 = document.createElement('td');
        td3.textContent = tableParts[i].state;

        var td4 = document.createElement('td');
        td4.textContent = tableParts[i].qResources;

        var td5 = document.createElement('td');
        td5.textContent = tableParts[i].updated;

        var td6 = document.createElement('td');
        td6.innerHTML = "<button type=\"button\" id=\"updateBtn\" class=\"btn btn-dark\" onclick=\"updateClient()\" >Update</button>\n" +
            "\n" +
            "                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n"
//onclick="updateClient()"


        tr.append(td1, td2, td3, td4, td5, td6);
        tableBody.append(tr);
        table.append(tableBody);

    }}

function postForm(){
    'use strict'
    var postUrl = 'http://localhost:1012/newClient';
    var post = new XMLHttpRequest();

    post.open("POST", postUrl, true);
    post.setRequestHeader('Content-Type', 'application/json');

    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var state = document.getElementById("state").value;
    var qResources = document.getElementById("qResources").value;
    //var lastUpdate= document.getElementById('lastUpdate').value;
    var dto = {"name": name, "id": id, "state": state, "qResources": qResources, "updated": null /*lastUpdate*/};

    var dataJson = JSON.stringify(dto);

    post.onload = function () {
        if (post.readyState === 4 && post.status === 200){
            window.location.replace ('http://localhost:1012/clients-admin.html?');
        }
    };

    post.send(dataJson);
}

function updateForm(){
    'use strict';
    var postUrl = 'http://localhost:1012/newClient';
    var post = new XMLHttpRequest();

    post.open("POST", postUrl, true);
    post.setRequestHeader('Content-Type', 'application/json');

    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var state = document.getElementById("state").value;
    var qResources = document.getElementById("qResources").value;
    var dto = {"name": name, "id": id, "state": state, "qResources": qResources, "updated": null};

    var dataJson = JSON.stringify(dto);

    post.onload = function () {
        if (post.readyState === 4 && post.status === 200){
            window.location.replace ('http://localhost:1012/clients-admin.html?');
        }
    };

    post.send(dataJson);
}

function deleteClient(){

    var deleteUrl = 'http://localhost:1012/client'+ id +'/delete';

}



