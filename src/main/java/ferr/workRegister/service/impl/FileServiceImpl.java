package ferr.workRegister.service.impl;

import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import ferr.workRegister.framework.ServicesUtils;
import ferr.workRegister.service.IFileService;

@Service
@RequestMapping("/workServices/fileServices")
public class FileServiceImpl implements IFileService {

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	@ResponseBody
    public void leerMensajes(HttpServletRequest request, HttpServletResponse response)
    {
		 MultipartHttpServletRequest mRequest;
		 
		 try {
			 mRequest = (MultipartHttpServletRequest) request;
	         mRequest.getParameterMap();

	         Iterator<String> itr = mRequest.getFileNames();
	         while (itr.hasNext()) {
	        	 MultipartFile mFile = mRequest.getFile(itr.next());
	        	 System.out.println(mFile.getName());
	        	 ServicesUtils.setOKTextResponse(response, "OK");
	         }
   		 } catch (Exception e) {
	            e.printStackTrace();
	            ServicesUtils.setErrorResponse(response, e.getMessage());
	     }
    }
}
