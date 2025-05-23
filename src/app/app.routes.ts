import { Routes } from '@angular/router'
import { LoginComponent } from './page/login/login.component'
import { MainTemplateComponent } from './template/main-template/main-template.component'
import { InicioComponent } from './page/inicio/inicio.component'

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        children: []
    },
    {
        path: "app",
        component: MainTemplateComponent,
        children: [
            {
                path: "",
                component: InicioComponent,
            },        
        ]
    },
];
