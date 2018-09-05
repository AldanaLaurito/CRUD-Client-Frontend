var clients=['France', 'Germany', 'England', 'Spain'];
var resources=['Lopez', 'Fernandez','Martinez','Ramirez'];
var app = new function() {
    this.el = document.getElementById('clients');
    this.countries = clients;
    this.qResources = resources;
    /*this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'client';
        if (data) {
            if (data > 1) {
                name = 'clients';
            }
            el.innerHTML = data + ' ' + name ;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };*/
    this.FetchAll = function() {
        var data = '';
        var fakeId=0;
        if (this.countries.length > 0 && this.countries.length==this.qResources.length) {
            for (i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + fakeId + '</td>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td>' + this.qResources[i]+ '</td>';
                data += '</tr>';
                // data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                fakeId++;
            }
        }

        //this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };
}

app.FetchAll();



