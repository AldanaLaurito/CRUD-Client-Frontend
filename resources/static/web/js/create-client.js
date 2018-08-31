/*function myFunction() {
    document.getElementById("create-client-form").submit();
}*/
$(document).ready(function(){
    $("form").submit(function(){
        alert("Submitted");
    });
});