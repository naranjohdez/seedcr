$(document).ready(inicio);
var arr;

function inicio(){
    $.post( "getBlog.php", function( data ) {
        arr = $.map(JSON.parse(data), function(el) { return el });
        for (i=0;i<arr.length;i++){
            $('#result').append(
                '<form>'+
                '<input type="text" name="pTitulo" value ="'+arr[i].titulo+'">'+
                '<input type="text"  name="pNombreAutor" value ="'+arr[i].nombreAutor+'">'+
                '<textarea name="pCuerpo" >'+arr[i].cuerpo+'</textarea>'+
                '<input type="date" name="pFecha" value ="'+arr[i].fecha+'">'+
                '<input type="text" readonly name="pExt" value ="'+arr[i].ExtenImg+'">'+
                '<input type="text" readonly name="pIMG" value ="'+arr[i].pathImg+'">'+
                '</form>'+
                '<button onclick = "SaveBlog('+i+')">Guardar</button>'+
                '<button onclick = "DeleteBlog('+i+')">Eliminar</button>');
        }
      
    });
}
function SaveBlog(num){
    $.post("InsertBlog.php",$('form')[num],function(data){alert(data);})
}
function DeleteBlog(num){
    alert(num);
}