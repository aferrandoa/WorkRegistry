import { Component, OnInit } from '@angular/core';
import { WorkRegister } from '../vo/work-register'
import { Headers, RequestOptions } from '@angular/http';
import { WorkRegisterService } from '../services/work-register.service';

@Component({
    moduleId: module.id,
    selector: 'my-adminDashboard',
    templateUrl: 'admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit { 
	
	client: String;
	location: String;
	date: Date;
	startTime: Date;
	workRegistersList: WorkRegister[] = [];
	
	constructor(
		private workRegisterService: WorkRegisterService){	
	}
	
	ngOnInit(): void {
		this.workRegisterService.getAllRegisters().subscribe(
			res => {
				this.workRegistersList = res;
			}
		);
  	}
	
	onSubmit() {
	 	let newElement: WorkRegister = new WorkRegister(this.client, this.location, this.date, this.startTime);
	 	
        this.workRegisterService.insertNewRegister(newElement).subscribe(
        	res => {
        		this.workRegistersList.push(newElement);
        	}
        );
	}
}