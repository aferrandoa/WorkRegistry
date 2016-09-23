import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppLogin }   from './login.component';
import { LoginService }  from './login.service';
import { UserData }  from '../vo/user-data';
	
@Component({
    moduleId: module.id,
    selector: 'base-template-header',
    templateUrl: 'header.component.html'
})
export class AppHeader implements OnInit {

	userData: UserData;

	@ViewChild(AppLogin)
  	private loginComponent: AppLogin;

	constructor(
		private router: Router,
        private loginService: LoginService){}
	
	ngOnInit(): void {
		this.loginService.initialization().subscribe(
			res => {
				this.loginComponent.getUserData(null);
			}
		);
  	}
	
	clickLogout(event){
		this.loginService.logout().subscribe(
			res => { 
				this.userData = null;
				let link = [''];
				this.router.navigate(link);
			}
		);
	}
	
	checkUserData(): boolean{
		if(this.userData != null && this.userData != undefined){
			return true;
		}
		
		return false;
	}
	
	navAdmin(event){
		let link = ['/admin'];
		this.router.navigate(link);
	}
	
	onUserDataLoaded(data: UserData){
		this.userData = data;
	}
}