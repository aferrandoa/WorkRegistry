package ferr.workRegister.dao.iml;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ferr.workRegister.dao.IWorkRegisterDAO;
import ferr.workRegister.dao.mapper.WorkRegisterMapper;
import ferr.workRegister.framework.JDBCManager;
import ferr.workRegister.vo.WorkRegister;

@Service
public class WorkRegisterDAOImpl implements IWorkRegisterDAO {

	@Autowired
	JDBCManager<WorkRegister> jdbcManager;
	
	@Override
	public List<WorkRegister> listWorkRegistersByEmployee(String cdemployee) {

		String query = ""
				+ "select * "
				+ "from WRUSERS.WORK_REGISTERS "
				+ "where cdemployee = ?";
		
		return jdbcManager.doSelect(query, new Object[] { cdemployee }, new WorkRegisterMapper());
	}

	@Override
	public WorkRegister insertWorkRegister(WorkRegister workRegister) {
		
		String query = ""
				+ "insert into wrusers.work_registers(cdemployee, cdclient, cdlocation, workdate, starttime, endtime) "
				+ "values (?, ?, ?, ?, ?, ?)";
		
		Object[] parameters = {
				workRegister.getCdemployee(), workRegister.getCdclient(), 
				workRegister.getCdlocation(), workRegister.getWorkdate(),
				workRegister.getStarttime(), workRegister.getEndtime()};
		
		int insertNum = jdbcManager.doInsert(query, parameters);
		
		if(insertNum > 0){
			int newElementId = getElementId(workRegister);
			workRegister.setWork_registers_id(newElementId);
			return workRegister;
		}
		
		return null;
	}

	@Override
	public int deleteWorkRegister(int id, String cdemployee) {
		
		String query = ""
				+ "delete from WRUSERS.WORK_REGISTERS "
				+ "where work_registers_id = ? "
				+ "and cdemployee = ?";
		
		Object[] parameters = {
				id, cdemployee};
		
		return jdbcManager.doDelete(query, parameters);
	}

	@Override
	public int getElementId(WorkRegister workRegister) {
		
		List<Object> parameters = new ArrayList<>();
		parameters.add(workRegister.getCdemployee());
		parameters.add(workRegister.getCdclient()); 
		parameters.add(workRegister.getCdlocation()); 
		parameters.add(workRegister.getWorkdate());
		parameters.add(workRegister.getStarttime());
		
		String query = ""
				+ "select * "
				+ "from WRUSERS.WORK_REGISTERS "
				+ "where cdemployee = ? "
				+ "and cdclient = ? "
				+ "and cdlocation = ? "
				+ "and workdate = ? "
				+ "and starttime = ? ";
				
		if(workRegister.getEndtime() != null){
			parameters.add(workRegister.getEndtime());
			query += " and endtime = ? ";
		}
		
		List<WorkRegister> resultList = jdbcManager.doSelect(query, parameters.toArray(), new WorkRegisterMapper());
		
		if(!resultList.isEmpty()){
			WorkRegister result = resultList.get(0);
			return result.getWork_registers_id();
		}
		
		return -1;
	}

}
