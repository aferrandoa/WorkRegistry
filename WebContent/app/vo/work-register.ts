export class WorkRegister{
	work_registers_id: number;
	cdemployee: String;
	cdclient: String;
	cdlocation: String;
	workdate: Date;
	starttime: Date;
	endtime: Date;
	
	constructor(cdclient: String, cdlocation: String, workdate: Date, starttime: Date){
		this.cdclient = cdclient; 
		this.cdlocation = cdlocation; 
		this.workdate = workdate; 
		this.starttime = starttime;
	}
}