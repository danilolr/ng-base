import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    public user?: User

    public menuOptions = [
        {label: 'Start', icon: 'pi pi-fw pi-home', routerLink: '/app'},
        {label: 'Config', icon: 'pi pi-fw pi-cog', routerLink: '/app/configuracoes'},
        {label: 'Report', icon: 'pi pi-fw pi-chart-bar', routerLink: '/app/relatorios'},
        {label: 'About', icon: 'pi pi-fw pi-question', routerLink: '/app/about'},
    ]
    
    async login(user: string, password: string): Promise<boolean> {
        if (password === '123456') {
            this.user = new User(1, 'Danilo Luiz Rheinheimer', user, 'token')
            return true
        } else {
            this.user = undefined
            return false
        }
    }

    logout() {
        this.user = undefined
    }

}

export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public token: string
    ) {}
}