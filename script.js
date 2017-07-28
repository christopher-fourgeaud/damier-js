function addLigne1 (ln1){
  var ligne1 = "";
  for( var i = 0; i < 5; i++) {
    ligne1 += "<div class= col-xs-1 id=noir></div><div class= col-xs-1 id=blanc></div>";
  }
  return ligne1;
}

$("#damier-js").html(addLigne1);