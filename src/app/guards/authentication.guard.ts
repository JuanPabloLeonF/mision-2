import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const routers = inject(Router)

  const authentication = {
    isAdmin: true
  }

  if (authentication.isAdmin) {
    return true;
  } else {
    routers.navigate(['login']);
    return false;
  }

};