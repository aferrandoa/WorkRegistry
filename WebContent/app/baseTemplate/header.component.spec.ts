import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppHeader } from './header.component';
import { AppLogin } from './login.component';
import { LoginService } from './login.service';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../vo/user-data';

let comp: AppHeader;
let fixture: ComponentFixture<AppHeader>;
let de: DebugElement;
let el: HTMLElement;

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

let userDataServiceStub = {
    gteUserData(): Observable<UserData> {
        return Observable.of(new UserData());
    }
};

let loginServiceStub = {
    initialization(): Observable<boolean> {
        return Observable.of(true);
    },

    isLoggedIn: true
};


describe('Header component', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppHeader, AppLogin],
            imports: [FormsModule],
            providers: [
                { provide: LoginService, useValue: loginServiceStub },
                { provide: UserDataService, useValue: userDataServiceStub },
                { provide: Router, useClass: RouterStub }
            ]
        }).compileComponents(); // compile template and css


    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeader);
        comp = fixture.componentInstance; // BannerComponent test instance
    });

    it('should display original title', () => {
        de = fixture.debugElement.query(By.css('a'));
        el = de.nativeElement;
        fixture.detectChanges();
        expect(el.textContent).toContain('Work Register');
    });

    it('should have NULL user data on init', () => {
        fixture.detectChanges();
        expect(comp.userData).toBeNull;
    });

    it('should show the user name when logged in', () => {
        fixture.detectChanges();
        let userData: UserData = new UserData();
        userData.cdemployee = '000000001';
        userData.name = 'Angel';
        userData.surname1 = 'Ferrando';
        userData.surname2 = 'Abalos';
        
        comp.userData = userData;
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('#headerNameField'));
        el = de.nativeElement;
        
        expect(el.textContent).toContain('Ferrando Abalos, Angel');
    });
});