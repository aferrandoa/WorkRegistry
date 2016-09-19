"use strict";
var router_1 = require('@angular/router');
var admin_dashboard_component_1 = require('./admin/admin-dashboard.component');
var main_component_1 = require('./main/main.component');
var appRoutes = [
    {
        path: '',
        component: main_component_1.MainComponent
    },
    {
        path: 'dashboard',
        component: admin_dashboard_component_1.AdminDashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map