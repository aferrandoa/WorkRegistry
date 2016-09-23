package ferr.workRegister.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import ferr.workRegister.vo.UserData;

public class UserDataRowMapper implements RowMapper<UserData> {

	@Override
	public UserData mapRow(ResultSet paramResultSet, int paramInt) throws SQLException {
		
		UserData result = new UserData();
		
		result.setUsername(paramResultSet.getString("USERNAME"));
		result.setCdemployee(paramResultSet.getString("CDEMPLOYEE"));
		result.setName(paramResultSet.getString("NAME"));
		result.setSurname1(paramResultSet.getString("SURNAME1"));
		result.setSurname2(paramResultSet.getString("SURNAME2"));
		result.setBirthdate(paramResultSet.getDate("BIRTHDATE"));
		
		return result;
	}

}