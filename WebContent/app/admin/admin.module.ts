import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { AdminControlComponent }  from './admin-control.component';

import { adminRouting } from './admin.routing';
	
import { AuthGuard }  from '../auth-guard.service';
	
@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminControlComponent
  ],
  providers: [AuthGuard]
})
export class AdminModule {}