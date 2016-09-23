package ferr.workRegister.dao.iml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ferr.workRegister.dao.IUserDataDAO;
import ferr.workRegister.dao.mapper.UserDataRowMapper;
import ferr.workRegister.framework.JDBCManager;
import ferr.workRegister.vo.UserData;

@Service
public class UserDataDAOImpl implements IUserDataDAO {

	@Autowired
	JDBCManager<UserData> jdbcManager;
	
	@Override
	public UserData getUserDataByUsername(String username) {
		String query = ""
				+ "SELECT * "
				+ "FROM wrusers.user_data "
				+ "WHERE username = ?";
		
		return jdbcManager.doSelectByPK(query, new Object[] { username }, new UserDataRowMapper());
	}

}