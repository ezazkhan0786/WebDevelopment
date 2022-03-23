$(document).ready(function() {
    $("h1").hide();
    $("button").click(function() {
        $('h1').toggle();
    });
    $("button").mouseenter(function () { 
        alert("You are goint to click the button    ")
    });
    $("button").mouseleave(function () { 
       
    });
});