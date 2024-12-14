import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from '@/core/routes/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-e23fnxu1.eu.auth0.com',
      clientId: 'Wrxm951XeT7cJ10ZMG2WChFNT32EPXo6',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
