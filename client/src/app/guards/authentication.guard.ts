import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UtilityService } from '../services/utility/utility.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private utilityService: UtilityService,
        private router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        const token = this.utilityService.getToken();
        if (token && !token.isExpired()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
