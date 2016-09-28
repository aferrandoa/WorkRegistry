package ferr.workRegister.dao;

import java.util.List;

import ferr.workRegister.vo.WorkRegister;

public interface IWorkRegisterDAO {

	List<WorkRegister> listWorkRegistersByEmployee(String cdemployee);
	
	int getElementId(WorkRegister workRegister);
	
	WorkRegister insertWorkRegister(WorkRegister workRegister);
	
	int deleteWorkRegister(int id, String cdemployee);
}
