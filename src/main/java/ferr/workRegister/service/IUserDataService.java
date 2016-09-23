package ferr.workRegister.service;

import ferr.workRegister.vo.UserData;

public interface IUserDataService {

	UserData getUserDataByUsername(String username);
}
