package ferr.workRegister.security;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ferr.workRegister.framework.ServicesUtils;

@Controller
@RequestMapping("/securityServices")
public class SecurityController {
 
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String adminPage(HttpServletRequest request, HttpServletResponse response) {
        return "admin";
    }
     
    @RequestMapping(value = "/db", method = RequestMethod.GET)
    public String dbaPage(HttpServletRequest request, HttpServletResponse response) {
        return "dba";
    }
 
    @RequestMapping(value = "/Access_Denied", method = RequestMethod.GET)
    public String accessDeniedPage(HttpServletRequest request, HttpServletResponse response) {
        return "accessDenied";
    }
 
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }
 
    @RequestMapping(value="/logout", method = RequestMethod.GET)
    public String logoutPage (HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){    
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login?logout";
    }
 
    @RequestMapping(value = "/checkAutheticated", method = RequestMethod.GET)
	@ResponseBody
	public void checkAutheticatedUser(HttpServletRequest request, HttpServletResponse response) {
    	try{
	    	if(SecurityContextHolder.getContext().getAuthentication() != null &&
	    	   SecurityContextHolder.getContext().getAuthentication().isAuthenticated() &&
	    	   //when Anonymous Authentication is enabled
	    	   !(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken)){
	    		ServicesUtils.setOKTextResponse(response, "true");
	    	}
	    	else{
	    		ServicesUtils.setOKTextResponse(response, "false");
	    	}
    	}
    	catch(IOException ex){
    		ServicesUtils.setErrorResponse(response, ex.getMessage());
    	}
	}
    
    /*private String getPrincipal(){
    	
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
 
        if (principal instanceof UserDetails) {
            userName = ((UserDetails)principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }*/
}
