import { Injectable }     from '@angular/core';
import { CanActivate, CanLoad }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    status:boolean = true;
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return this.status;
    }
    canLoad(): boolean {
        // let url = `/${route.path}`;
        return this.status;
    }
}
