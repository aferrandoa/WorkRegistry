package ferr.workRegister.dao;

import ferr.workRegister.vo.UserData;

public interface IUserDataDAO {
	
	UserData getUserDataByUsername(String username);
}
