package ferr.workRegister.framework;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ServicesUtils {

	public static String toJson(Object innerObject) throws IOException{
		ObjectMapper mapper = new ObjectMapper();
		final OutputStream out = new ByteArrayOutputStream();
		mapper.writeValue(out, innerObject);

	    String jsonData = out.toString();
	    return jsonData;
	}
	
	public static void setOKJsonResponse(HttpServletResponse response, String jsonData) throws IOException{
		response.setContentType("application/json; charset=utf-8");
		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().write(jsonData);
	}
	
	public static void setOKTextResponse(HttpServletResponse response, String textData) throws IOException{
		response.setStatus(HttpServletResponse.SC_OK);
		response.setContentType("text/html; charset=utf-8");
		response.getWriter().write(textData);
	}
	
	public static void setErrorResponse(HttpServletResponse response, String error){
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		response.setContentType("text/html; charset=utf-8");
		
		try{
			response.getWriter().write(error);
		}
		catch(IOException ex){
			
		}
	}
	
	public static <T> Object getJsonObjectFromRequest(HttpServletRequest request, Class<T> typeClass) throws IOException{
		
		StringBuffer stringBuf = new StringBuffer();
		String line = null;
		BufferedReader reader = request.getReader();
		
		while ((line = reader.readLine()) != null){
			stringBuf.append(line);
		}
		
		ObjectMapper mapper = new ObjectMapper();
		T obj = mapper.readValue(stringBuf.toString(), typeClass);
		
		return obj;
	}
}
