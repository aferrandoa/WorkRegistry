import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AdminDashboardComponent }      from './admin-dashboard.component';
import { AdminComponent }      from './admin.component';
import { AuthGuard }                from '../auth-guard.service';
import { AdminControlComponent }  from './admin-control.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'control', component: AdminControlComponent }
        ]
      }
    ]
  }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);