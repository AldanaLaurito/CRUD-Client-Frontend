/*function myFunction() {
    document.getElementById("create-client-form").submit();
}*/
$(document).ready(function(){
    $("create-client-form").submit(function(){
        alert("Submitted");
    });
});