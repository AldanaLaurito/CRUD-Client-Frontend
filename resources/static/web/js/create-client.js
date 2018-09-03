/*function myFunction() {
    document.getElementById("create-client-form").submit();
}*/
$(document).ready(function(){
    var submit = $("form").submit(function (event) {

        alert("Submitted");
        event.preventDefault();
    });
});