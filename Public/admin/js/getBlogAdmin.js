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
                '</form>'+
                '<button onclick = "SaveBlog('+i+')">Guardar</button>'+
                '<button onclick = "DeleteBlog('+i+')">Eliminar</button>');
        }
      
    });
}
function SaveBlog(num){
    $.post("InsertBlog.php",{
        pId:arr[num].id,
        pNombreAutor:$("form")[num][1].value,
        pCuerpo:$("form")[num][2].value,
        pFecha:$("form")[num][3].value,
        pTitulo:$("form")[num][0].value,
        pExt:arr[num].ExtenImg,
        pIMG:arr[num].pathImg,
    },function(data){location.reload();})
}
function DeleteBlog(num){
    $.post("DeleteBlog.php",{
        ID:arr[num].id}
           ,function(data){location.reload();})
}