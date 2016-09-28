package ferr.workRegister.service.impl;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ferr.workRegister.dao.IWorkRegisterDAO;
import ferr.workRegister.framework.ServicesUtils;
import ferr.workRegister.framework.UserSession;
import ferr.workRegister.service.IWorkRegisterService;
import ferr.workRegister.vo.WorkRegister;

@RequestMapping("/workServices/workregister")
@Service
public class WorkRegisterServiceImpl implements IWorkRegisterService {

	@Autowired
	private UserSession userSession;
	
	@Autowired
	private IWorkRegisterDAO workRegisterDAO;
	
	@RequestMapping(value = "/newregister", method = RequestMethod.PUT)
	@ResponseBody
	public void insertNewWorkRegister(HttpServletRequest request, HttpServletResponse response) {
		
		if(userSession != null){
			try{
				WorkRegister newRegister = (WorkRegister) ServicesUtils.getJsonObjectFromRequest(request, WorkRegister.class);
				newRegister.setCdemployee(userSession.getUserData().getCdemployee());
				
				WorkRegister resRegister = workRegisterDAO.insertWorkRegister(newRegister);
				String jsonData = ServicesUtils.toJson(resRegister);
				ServicesUtils.setOKJsonResponse(response, jsonData);
			}
			catch(IOException ex){
				ServicesUtils.setErrorResponse(response, ex.getMessage());
			}
		}
	}
	
	@RequestMapping(value = "/getAllUser", method = RequestMethod.GET)
	@ResponseBody
	public void getAllRegistersForUser(HttpServletRequest request, HttpServletResponse response) {
		
		if(userSession != null){
			try{
				List<WorkRegister> listaRegistros = workRegisterDAO.listWorkRegistersByEmployee(userSession.getUserData().getCdemployee());
				String jsonData = ServicesUtils.toJson(listaRegistros);
				ServicesUtils.setOKJsonResponse(response, jsonData);
			}
			catch(IOException ex){
				ServicesUtils.setErrorResponse(response, ex.getMessage());
			}
		}
	}
	
	@RequestMapping(value = "/deleteRegister/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteRegisterForUser(@PathVariable("id") int id, HttpServletRequest request, HttpServletResponse response) {
		
		if(userSession != null){
			try{
				workRegisterDAO.deleteWorkRegister(id, userSession.getUserData().getCdemployee());
				ServicesUtils.setOKTextResponse(response, "");
			}
			catch(IOException ex){
				ServicesUtils.setErrorResponse(response, ex.getMessage());
			}
		}
	}
}
