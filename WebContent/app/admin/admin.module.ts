import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { AdminControlComponent }  from './admin-control.component';
import { FormsModule }   from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { FileUploadModule }   from 'ng2-file-upload';

import { adminRouting } from './admin.routing';
	
import { AuthGuard }  from '../auth-guard.service';
	
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    adminRouting,
    Ng2DatetimePickerModule,
    FileUploadModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminControlComponent
  ],
  providers: [AuthGuard]
})
export class AdminModule {}