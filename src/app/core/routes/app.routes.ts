import { HomePage } from '@/pages/home-page/home-page.component';
import { Routes } from '@angular/router';
import { authGuard } from '@/core/guards/auth.guard';
import { DashboardLayoutComponent } from '@/layout/dashboard-layout.component';
import { LoginPage } from '@/pages/login-page/login.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'login',
        component: LoginPage,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
