import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService }  from './login.service';

@Component({
    moduleId: module.id,
    selector: 'base-template-login',
    templateUrl: 'login.component.html'
})
export class AppLogin {

    user="";
    password="";
    mode='Observable';
    loginError: boolean = false;

    constructor(
    	private router: Router,
        private loginService: LoginService) { }
	
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

    onSubmit() {
        this.loginService.login(this.user,this.password).subscribe(
            res => this.loginCallback(res)
   	 	);
	}
}