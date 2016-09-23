package ferr.workRegister.service.impl;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ferr.workRegister.dao.IUserDataDAO;
import ferr.workRegister.framework.ServicesUtils;
import ferr.workRegister.framework.UserSession;
import ferr.workRegister.service.IUserDataService;
import ferr.workRegister.vo.UserData;

@Service
@RequestMapping("/workServices/userData")
public class UserDataServiceImpl implements IUserDataService {

	@Autowired
	private IUserDataDAO userDataDao;
	
	@Autowired
	private UserSession userSession;
	
	@RequestMapping(value = "/getUserData", method = RequestMethod.GET)
	@ResponseBody
	public void getUserDataByUsername(HttpServletRequest request, HttpServletResponse response) {
		
		UserData data = new UserData();
		
		if(userSession != null){
			data = userSession.getUserData();
		}
		
		try{
			String jsonData = ServicesUtils.toJson(data);
			ServicesUtils.setOKJsonResponse(response, jsonData);
		}
		catch(IOException ex){
			ServicesUtils.setErrorResponse(response, ex.getMessage());
		}
	}
	
	public UserData getUserDataByUsername(String username) {
		UserData data = userDataDao.getUserDataByUsername(username);
		return data;
	}

}
