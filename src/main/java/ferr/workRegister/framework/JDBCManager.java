package ferr.workRegister.framework;

import java.util.List;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

public class JDBCManager<T> extends JdbcDaoSupport {
	
	public List<T> doSelect(String sql, Object[] parameters, RowMapper<T> rowMapper) {
		
		List<T> resultList = getJdbcTemplate().query(sql, parameters, rowMapper);
		return resultList;
	}
	
	public T doSelectByPK(String sql, Object[] parameters, RowMapper<T> rowMapper) {
		
		T resultObject = null;
		
		List<T> resultList = getJdbcTemplate().query(sql, parameters, rowMapper);
		
		if(!resultList.isEmpty()){
			resultObject = resultList.get(0);
		}
		
		return resultObject;
	}
	
	public int doInsert(String sql, Object[] parameters) {
		
		int resultObject = 0;
		
		resultObject = getJdbcTemplate().update(sql, parameters);
		
		return resultObject;
	}
	
	public int doDelete(String sql, Object[] parameters) {
		
		int resultObject = 0;
		
		resultObject = getJdbcTemplate().update(sql, parameters);
		
		return resultObject;
	}
}
