import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NetflixHomeComponent } from './netflix-home/netflix-home.component';

export const routes: Routes = [
    {
        path: 'employee', title: "Employee component", component: EmployeeComponent
    },
    {
        path: "netflixhome", title: "netflixhome", component: NetflixHomeComponent
    }
];
