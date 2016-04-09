var doc = $(document);
doc.ready(inicio);
function inicio(){
    var ventana_ancho = $(window).width();
    if (ventana_ancho>=750){
        $("#imgder").show();
        $("#imgizq").hide();
    }
    else{
        
        $("#imgder").hide();
        $("#imgizq").show();
    }
    $( window ).resize(function() {
            var ventana_ancho = $(window).width();
            if (ventana_ancho>=750){
                $("#imgder").show();
                $("#imgizq").hide();
            }
            else{
                
                $("#imgder").hide();
                $("#imgizq").show();
            }
    });

}