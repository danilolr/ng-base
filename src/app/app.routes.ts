import { Routes } from '@angular/router'
import { MainTemplateComponent } from './template/main-template/main-template.component'
import { AboutPageComponent } from './page/about.page/about.page.component'
import { StartPageComponent } from './page/start.page/start.page.component'
import { LoginPageComponent } from './page/login.page/login.page.component'

export const routes: Routes = [
    {
        path: "",
        component: LoginPageComponent,
        children: []
    },
    {
        path: "app",
        component: MainTemplateComponent,
        children: [
            {
                path: "",
                component: StartPageComponent,
            },        
            {
                path: "about",
                component: AboutPageComponent,
            },        
        ]
    },
];
