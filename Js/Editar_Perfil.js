$( "#olho1" ).mousedown(function() {
    $("#form3Example3").attr("type", "text");
  });
  
  $( "#olho1" ).mouseup(function() {
    $("#form3Example3").attr("type", "password");
  });

  var senha1 = $('#form3Example3');
var olho1= $("#olho1");

olho.mousedown(function() {
  senha1.attr("type", "text");
});

olho.mouseup(function() {
  senha1.attr("type", "password");
});
// para evitar o problema de arrastar a imagem e a senha continuar exposta, 
//citada pelo nosso amigo nos comentários
$( "#olho1" ).mouseout(function() { 
  $("#form3Example3").attr("type", "password");
});

$( "#olho2" ).mousedown(function() {
    $("#form3Example4").attr("type", "text");
  });
  
  $( "#olho" ).mouseup(function() {
    $("#form3Example4").attr("type", "password");
  });

  var senha2 = $('#form3Example4');
var olho2 = $("#olho2");

olho2.mousedown(function() {
  senha2.attr("type", "text");
});

olho2.mouseup(function() {
  senha2.attr("type", "password");
});
// para evitar o problema de arrastar a imagem e a senha continuar exposta, 
//citada pelo nosso amigo nos comentários
$( "#olho2" ).mouseout(function() { 
  $("#form3Example4").attr("type", "password");
});