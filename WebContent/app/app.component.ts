import { Component } from '@angular/core';
import { AppHeader }   from './baseTemplate/header.component';
import { AppLogin }   from './baseTemplate/login.component';
import { Properties }   from './properties';

import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent { }