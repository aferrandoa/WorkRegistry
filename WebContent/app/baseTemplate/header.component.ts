import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppLogin }   from './login.component';
import { LoginService }  from './login.service';	
	
@Component({
    moduleId: module.id,
    selector: 'base-template-header',
    templateUrl: 'header.component.html'
})
export class AppHeader {

	constructor(
		private router: Router,
        private loginService: LoginService){}
		
	clickLogout(event){
		this.loginService.logout().subscribe(
			res => { 
				let link = [''];
				this.router.navigate(link);
			}
		);
	}
	
	navAdmin(event){
		let link = ['/admin/control'];
		this.router.navigate(link);
	}
}