import { Routes } from '@angular/router';
import { title } from 'process';
import { EmployeeComponent } from './employee/employee.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { NetflixHomeComponent } from './netflix-home/netflix-home.component';

export const routes: Routes = [
    {
        path: 'employee', title: "Employee component", component: EmployeeComponent
    },
    {
        path: "netflixhome", title: "netflixhome", component: NetflixHomeComponent
    },
    {
        path:"formdemo" ,title:"formdemo",component:FormDemoComponent
    }
];
