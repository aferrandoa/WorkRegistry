import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppHeader }   from './baseTemplate/header.component';
import { AppLogin }   from './baseTemplate/login.component';
import { LoginService }  from './baseTemplate/login.service';
import { MainComponent }  from './main/main.component';
import { routing } from './app.routing';
	
import { AdminModule }            from './admin/admin.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing, AdminModule],
    declarations: [AppComponent, AppHeader, AppLogin, MainComponent],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }