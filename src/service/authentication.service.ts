import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class LogService {
    
    async login(user: string, password: string): Promise<boolean> {
        return true
    }

}