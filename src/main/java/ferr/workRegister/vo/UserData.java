package ferr.workRegister.vo;

import java.io.Serializable;
import java.util.Date;

public class UserData implements Serializable {

	private static final long serialVersionUID = -5985491220088944770L;
	
	private String username;
	
	private String cdemployee;
	
	private String  name;
	
	private String  surname1;
	
	private String  surname2;
	
	private Date birthdate;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCdemployee() {
		return cdemployee;
	}

	public void setCdemployee(String cdemployee) {
		this.cdemployee = cdemployee;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname1() {
		return surname1;
	}

	public void setSurname1(String surname1) {
		this.surname1 = surname1;
	}

	public String getSurname2() {
		return surname2;
	}

	public void setSurname2(String surname2) {
		this.surname2 = surname2;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
}
