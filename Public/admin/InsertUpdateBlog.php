
<?php
//Metodo post campos :
// .............................    'pId'           ==> int  ------ Si es insert se pone 0
// .............................    'pNombreAutor'  ==> varchar(200)
// .............................    'pPathImg'      ==> varchar(200)
// .............................    'pExtenImag'    ==> varchar(200)
// .............................    'pCuerpo'       ==> varchar(10000)
// .............................    'pFecha'        ==> date
// .............................    'pTitulo'       ==> varchar(200)
// Retorna :
// .............................    Json 'Res' ==> 'Si'
    
    
    

  $link = mysqli_connect('107.180.58.44', 'jm57592253', 'Jomialfa0605')or die('No se pudo conectar: ' . mysql_error());
    
  $nombreConexion=mysqli_select_db($link,'seedAdmin') or die('No se pudo seleccionar la base de datos');
  $result = mysqli_query($link, 'call Sp_DeleteBlog('.$_POST["pId"].",'".$_POST["pNombreAutor"]."','".$_POST["pPathImg"]."','".$_POST["pExtenImag"]."','".$_POST["pCuerpo"]."','".$_POST["pFecha"]."','".$_POST["pTitulo"]."',".'1'.')')
  or die('1No se pudo sacar la base de datos');

         $respuesta["Res"]='Si';


echo(json_encode($respuesta));



?>    