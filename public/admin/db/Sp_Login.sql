
 DELIMITER //
create procedure Sp_Logins(
	in Nom varchar(200),
    in Passw varchar(2000),
    out Res bit)
    begin
		select 1 into Res from Usuarios
			where Usuarios.Usuario = Nom
			and	Usuarios.Pass = Passw;
    end
     //
 DELIMITER ;
 
 call Sp_Logins('Es','Es',@di);
 select @di