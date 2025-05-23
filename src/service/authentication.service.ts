import {Injectable, signal} from '@angular/core'

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    public user = signal<User | undefined>(undefined)
    public menuOptions = signal<MenuOption[]>([])
    
    async login(user: string, password: string): Promise<boolean> {
        if (password === '123456') {
            this.user.set(new User(1, 'Danilo Luiz Rheinheimer', user, 'token', null))
            this.menuOptions.set([
                {label: 'Start', icon: 'pi pi-fw pi-home', routerLink: '/app'},
                {label: 'Config', icon: 'pi pi-fw pi-cog', routerLink: '/app/configuracoes'},
                {label: 'Report', icon: 'pi pi-fw pi-chart-bar', routerLink: '/app/relatorios'},
                {label: 'About', icon: 'pi pi-fw pi-question', routerLink: '/app/about'},
            ])
            return true
        } else {
            this.user.set(undefined)
            this.menuOptions.set([])
            return false
        }
    }

    logout() {
        this.user.set(undefined)
    }

}

export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public token: string,
        public avatar: string | null = null
    ) {}
}

export class MenuOption {
    constructor(
        public label: string,
        public icon: string,
        public routerLink: string
    ) {}
}