import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService }  from './login.service';
import { UserDataService }  from '../services/user-data.service';
import { UserData }  from '../vo/user-data';	

@Component({
    moduleId: module.id,
    selector: 'base-template-login',
    templateUrl: 'login.component.html'
})
export class AppLogin {

	@Output() onUserDataLoaded = new EventEmitter<UserData>();

    user="";
    password="";
    mode='Observable';
    loginError: boolean = false;

    constructor(
    	private router: Router,
        private loginService: LoginService,
        private userDataService: UserDataService) { }
	
	 onSubmit() {
        this.loginService.login(this.user,this.password).subscribe(
            res => {
            	this.loginCallback(res)
            	this.getUserData(null);
            	}
   	 	);
	}
	
	loginCallback(res: String){
		if(res === 'true') {
			this.loginError = false;
			$('#loginModal').modal('hide');
			
			let link = ['/admin'];
			this.router.navigate(link);
   	 	}
   	 	else{
   	 		this.loginError = true; 
   	 	}
	}
	
	getUserData(event){
		this.userDataService.gteUserData().subscribe(
			res => { 
				this.onUserDataLoaded.emit(res);
			}
		);
	}
}