"use strict";
var router_1 = require('@angular/router');
var admin_dashboard_component_1 = require('./admin-dashboard.component');
var admin_component_1 = require('./admin.component');
var auth_guard_service_1 = require('../auth-guard.service');
var admin_control_component_1 = require('./admin-control.component');
var adminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent },
                    { path: 'control', component: admin_control_component_1.AdminControlComponent }
                ]
            }
        ]
    }
];
exports.adminRouting = router_1.RouterModule.forChild(adminRoutes);
//# sourceMappingURL=admin.routing.js.map