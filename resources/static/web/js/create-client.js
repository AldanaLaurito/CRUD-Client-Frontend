/*var createClient = function (event) {
    event.preventDefault();


}*/
var app = new function() {
    this.el = document.getElementById('clients');
    this.clients = ['Galicia', 'Caterpillar Inc.'];
    this.Count = function(data) {
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
    };
    this.FetchAll = function() {
        var data = '';
        if (this.clients.length > 0) {
            for (i = 0; i < this.clients.length; i++) {
                data += '<tr>';
                data += '<td>' + this.clients[i] + '</td>';
                data += '</tr>';
            }
        }

        this.Count(this.clients.length);
        return this.el.innerHTML = data;
    };
    this.Add = function () {
        el = document.getElementById('add-name');
        // Get the value
        var client = el.value;
        if (client) {
            // Add the new value
            this.clients.push(client.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

}
app.FetchAll();
