package ferr.workRegister.framework;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import ferr.workRegister.service.IUserDataService;
import ferr.workRegister.vo.UserData;

@Component
@Scope(value="session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserSession {

	@Autowired
	private IUserDataService userDataService;
	
	private UserData userData = null;
	
	public void initSession(){
		User user = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    String username = user.getUsername();
	    
	    this.userData = userDataService.getUserDataByUsername(username);
	}
	
	public UserData getUserData(){
		return this.userData;
	}
}
