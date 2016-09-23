package ferr.workRegister.dao.iml;

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
	public int insertWorkRegister(WorkRegister workRegister) {
		
		String query = ""
				+ "insert into wrusers.work_registers(cdemployee, cdclient, cdlocation, workdate, starttime, endtime) "
				+ "values (?, ?, ?, ?, ?, ?)";
		
		Object[] parameters = {
				workRegister.getCdemployee(), workRegister.getCdclient(), 
				workRegister.getCdlocation(), workRegister.getWorkdate(),
				workRegister.getStarttime(), workRegister.getEndtime()};
		
		return jdbcManager.doInsert(query, parameters);
	}

}
