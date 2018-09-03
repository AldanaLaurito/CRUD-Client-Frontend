var app = new function() {
    this.el = document.getElementById('clients');
    this.countries = ['France', 'Germany', 'England', 'Spain'];
    this.qResources = ['Lopez', 'Fernandez','Martinez','Ramirez'];
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
                data += '<td>' + '<button id="updateBtn" class="btn btn-primary" onclick="app.Edit(\' + i + \')">Update</button>' +' '+ '<button type="button" class="btn btn-danger" onclick="app.Delete(\' + i + \')">Delete</button>' +'</td>';
                data += '</tr>';
                // data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                fakeId++;
            }
        }

        //this.Count(this.countries.length);
        return this.el.innerHTML = data;
    };
    this.Add = function () {
        el = document.getElementById('client-name');
        el2 = document.getElementById('client-resources');
        // Get the value
        var name = el.value;
        var resource = el2.value;
        if (name, resource) {
            // Add the new value
            this.countries.push(name.trim());
            this.qResources.push(resource.trim());
            // Reset input value
            el.value = '';
            el2.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };
    this.Edit = function (item) {
        var el = document.getElementById('formGroupExampleInput');
        var el1 = document.getElementById('formGroupExampleInput2');
        // Display value in the field
        el.value = this.countries[item];
        el1.value = this.countries[item];
        // Display fields
        document.getElementById('updateModal').style.display = 'block';
        self = this;
        document.getElementById('edit').onsubmit = function() {
            // Get value
            var name = el.value;
            if (name) {
                // Edit value
                self.countries.splice(item, 1, name.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
            var resource = el1.value;
            if (resource) {
                // Edit value
                self.countries.splice(item, 1, resource.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
    this.Delete = function (item) {
        // Delete the current row
        this.countries.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
}

app.FetchAll();
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}


