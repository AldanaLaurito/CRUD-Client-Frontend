/*function myFunction() {
    document.getElementById("create-client-form").submit();
}*/
$(document).ready(function(){
    $("form").submit(function(){
        var client=document.getElementById("client-name");
        var resource=document.getElementById("client-resources");
        clients.push(client);
        resources.push(resource);
        alert("Submitted");
    });
});