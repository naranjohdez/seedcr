 DELIMITER //
create procedure Sp_DeleteBlog(
	in pId int)
    begin
		delete from Blog where ID = pId;
    end
     //
 DELIMITER ;