import { Routes } from '@angular/router';
import { EmployeeList } from './pages/employee/employee-list/employee-list';
import { Layout } from './pages/layout/layout';
import { Login } from './pages/login/login';
import { EmployeeForm } from './pages/employee/employee-form/employee-form';
import { ClientList } from './pages/client/client-list/client-list';
import { ClientForm } from './pages/client/client-form/client-form';
import { ClientProject } from './pages/client-project/client-project';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: "employee-list",
                component: EmployeeList
            },
            {
                path: "employee-form/:id",
                component: EmployeeForm
            },
            {
                path: "client-list",
                component: ClientList
            },
            {
                path: "client-form/:id",
                component: ClientForm
            },
            {
                path: 'project',
                component: ClientProject
            },{
                path:'projectdetail/:projectid',
                component: ProjectDetail
            }
        ]
    }
];
