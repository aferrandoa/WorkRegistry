package ferr.workRegister.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import ferr.workRegister.vo.WorkRegister;

public class WorkRegisterMapper implements RowMapper<WorkRegister> {

	@Override
	public WorkRegister mapRow(ResultSet arg0, int arg1) throws SQLException {
		
		WorkRegister result = new WorkRegister();
		
		result.setWork_registers_id(arg0.getInt("WORK_REGISTERS_ID"));
		result.setCdemployee(arg0.getString("CDEMPLOYEE"));
		result.setCdclient(arg0.getString("CDCLIENT"));
		result.setCdlocation(arg0.getString("CDLOCATION"));
		result.setWorkdate(arg0.getDate("WORKDATE"));
		result.setStarttime(arg0.getDate("STARTTIME"));
		result.setEndtime(arg0.getDate("ENDTIME"));
		
		return result;
		
	}

}
