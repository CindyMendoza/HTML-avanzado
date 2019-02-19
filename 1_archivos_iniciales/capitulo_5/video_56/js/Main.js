$(document).ready(function () {
    var index = 4;
    $("#b_add").click(function (e) { 
        var li =    $('<li> Texto' + index + '</li>');
        $("#botonera").append(li);
        index = index + 1;
    });
    $(".b_lista").click(function (e) { 
     var texto = $(this).html();
     $("#contenedor").html('<h1>' + texto + '</h1>');
    });
});