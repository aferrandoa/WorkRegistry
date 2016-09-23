package ferr.workRegister.vo;

import java.io.Serializable;
import java.util.Date;

public class WorkRegister implements Serializable {

	private static final long serialVersionUID = -3588774406011208762L;
	
	private int work_registers_id;
	
	private String cdemployee;
	
	private String cdclient;
	
	private String cdlocation;
	
	private Date workdate;
	
	private Date starttime;
	
	private Date endtime;

	public int getWork_registers_id() {
		return work_registers_id;
	}

	public void setWork_registers_id(int work_registers_id) {
		this.work_registers_id = work_registers_id;
	}

	public String getCdemployee() {
		return cdemployee;
	}

	public void setCdemployee(String cdemployee) {
		this.cdemployee = cdemployee;
	}

	public String getCdclient() {
		return cdclient;
	}

	public void setCdclient(String cdclient) {
		this.cdclient = cdclient;
	}

	public String getCdlocation() {
		return cdlocation;
	}

	public void setCdlocation(String cdlocation) {
		this.cdlocation = cdlocation;
	}

	public Date getWorkdate() {
		return workdate;
	}

	public void setWorkdate(Date workdate) {
		this.workdate = workdate;
	}

	public Date getStarttime() {
		return starttime;
	}

	public void setStarttime(Date starttime) {
		this.starttime = starttime;
	}

	public Date getEndtime() {
		return endtime;
	}

	public void setEndtime(Date endtime) {
		this.endtime = endtime;
	}
	
	
}
