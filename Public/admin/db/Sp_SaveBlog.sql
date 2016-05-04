 DELIMITER //
create procedure Sp_SaveBlog(
	in pId int,
	in pNombreAutor varchar(200),
	in pPathImg varchar(200),
	in pExtenImag varchar(200),
	in pCuerpo varchar(10000),
	in pFecha date,
	in pTitulo varchar(200),
	in pActivo bit)
    begin
		if (pId = 0 ) then
        
			insert into Blog (NombreAutor,PathImg,ExtenImg,Cuerpo,Fecha,Titulo,Activo) 
            values (pNombreAutor,pPathImg,pExtenImg,pCuerpo,pFecha,pTitulo,pActivo);
            else 
            update Blog
				set	NombreAutor=pNombreAutor,PathImg=pPathImg,ExtenImg=pExtenImg,Cuerpo=pCuerpo,Fecha=pFecha,Titulo=pTitulo,Activo=pActivo
                where ID = pID;
        end if;
        
    end
     //
 DELIMITER ;
 
 