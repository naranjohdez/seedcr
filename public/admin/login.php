<?php ob_start(); ?> 
<?php 
include 'session.inc';
function getpass($u,$p)
{
    
  $link = mysqli_connect('107.180.58.44', 'jm57592253', 'Jomialfa0605')or die('No se pudo conectar: ' . mysql_error());
    
  $nombreConexion=mysqli_select_db($link,'seedAdmin') or die('No se pudo seleccionar la base de datos');
  $result = mysqli_query($link, 'call Sp_Logins("'.$u.'","'.$p.'")')
  or die('1No se pudo sacar la base de datos');

  $largo = mysqli_num_rows($result);

  if($largo==1){
       mysqli_data_seek ($result, $i);
       $extraido= mysqli_fetch_array($result)or die('2No se pudo sacar de la base de datos');
      
      $res = $extraido[0];
      
       return ($res);
  }
   else
   {
       mysql_close($link); 
       return (" ");
   }

}
function check_auth($u,$p) { 
    
    $p1 = crypt($p,"absifkjsdoaiownvasdv56ds45sdalf");
    $pass = getpass($u,$p1);
    if (1 == $pass){
    return true; }
    else {
        return false;
    }
    
}

if (isset ($_POST['login']) && ($_POST['login'] == 'Login') &&
($uid = check_auth($_POST['User'], $_POST['pass'])))
{
/* Usuario autenticado, inicializa la cookie */
$_SESSION['uid'] = $uid;
header('Location: Administracion.php');

}
else{?>



<!DOCTYPE html>
<html>
<head>
      
</head>

<body>
<form id = "Formulario" action = "login.php" method="post"enctype="multipart/form-data">
<fieldset>
<legend>Login</legend>
User:<br>
<input type="text" name="User">
<br>
Contraseña:<br>
<input type="password" name="pass" >
<br>
</fieldset>
<input type="submit" name = "login" value="Login">

</form>



<?php
}
?>
<?php ob_end_flush(); ?> 