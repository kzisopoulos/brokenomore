import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (_, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    take(1),
    map((isAuthenticated) => {
      // If not authenticated
      if (!isAuthenticated) {
        // Only allow access to login page
        if (state.url !== '/login') {
          router.navigate(['/login']);
          return false;
        }
        return true;
      }

      // If authenticated and trying to access login
      if (state.url === '/login') {
        router.navigate(['/']);
        return false;
      }

      // Allow access to all other routes for authenticated users
      return true;
    }),
  );
};
