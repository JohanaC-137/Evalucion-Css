$(document).ready(function() {

//.data
$("#btnagregar").click(function(){
$("#parrafo").append("<br>");
    
    $(function() {
    "use strict";
   
    var boton = $("#btnbusca2");
    var resultado = $("#valor");
    var input = $("#source");
  
    boton.on("click", function() {
      var valor = input.val()
      boton.data("user", valor);
  
      resultado.text(boton.data("user"));
    });
    });
  });

//addclass
$("#boton01").click(function(){
    $("#parrafo01").addClass("azul");
});

//-------------------------------------------------
//slide toggle
$("#toggle").click(function(){
    $("img").slideToggle("slow");
});

//-------------------------------------------------
//append
$("#boton").click(function(){
    $("#parrafo").append("<br>Este texto está añadido al final del párrafo.");
}); 


//-------------------------------------------------
//val
$("form").on("submit", function(event) {
    event.preventDefault();
    
    var $input = $(this).find("input");
    var input = $input.val();
    $("#text-output").text("Tu color es:" + input);
});

//------------------------------------------------
//fadein fadeout
$("#fade-in").click(function(){
    $("img").fadeIn("fast");
});

$("#fade-out").click(function(){
    $("img").fadeOut(800);
});

//-------------------------------------------------
//focus
$("#texto1").focus(function(){
$(this).css("background-color", "#e9967a");
});
     
$("#texto2").focus(function(){
$(this).hide("slow");
});


//--------------------------------------------------
//hide y show
$("#texto").hide();
        
$("#bhide").click(function(){
    $(".parrafo").show();
});

$("#show").click(function(){
    $(".parrafo").hide();
});


//--------------------------------------------------
//slide down-up
$("#slide-down").click(function(){
$("#parrafo4").slideDown("fast");
});

$("#slide-up").click(function(){
    $("#parrafo4").slideUp(400);
});

$("#toggle-sliding").click(function(){
    $("#parrafo4").slideToggle("slow");
});
})

