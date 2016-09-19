import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent }      from './admin/admin-dashboard.component';
import { MainComponent }  from './main/main.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'dashboard', 
        component: AdminDashboardComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);