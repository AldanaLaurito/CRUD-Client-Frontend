
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
    th.textContent = 'Id';

    var th1 = document.createElement('th');
    th1.textContent = 'Name';

    var th2 = document.createElement('th');
    th2.textContent = 'State';

    var th3 = document.createElement('th');
    th3.textContent = 'QResources';

    var th4 = document.createElement('th');
    th4.textContent = 'Last Update';

    tr1.append(th, th1, th2, th3, th4);
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

        tr.append(td1, td2, td3, td4, td5);
        tableBody.append(tr);
        table.append(tableBody);
    }
}


/*var tableBody = document.querySelector("#clients-table-body");

var requestURL = 'http://localhost:1012/clients';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

let clientsData;

request.onload = function() {
    'use strict';
    clientsData = request.response;
    makeTable(clientsData);
}
function makeTable (jsonObj){
    'use strict'
    var tableParts = jsonObj;

    var tBody = document.getElementById('clients-table-body');
    /*(tBody).attr({
        'id':'clients-table-body'
    });*/
    /*for (var i = 0; i<tableParts.length; i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        td1.textContent = tableParts[i].id;
        td2.textContent = tableParts[i].name;
        td3.textContent = tableParts[i].qResources;
        td4.textContent = tableParts[i].lastUpdate;
        td5.textContent = tableParts[i].clientState;


    }

    tr.append(td1, td2, td3, td4, td5, td6);
    tBody.append(tr);

}*/