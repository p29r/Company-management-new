import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  //debugger;
  const userLoggedin = localStorage.getItem('clientStriveUserNew');
  const router = inject(Router);

  if (userLoggedin == null) {
    router.navigateByUrl('login')
    return false;
  } else {
    return true;
  }
};
