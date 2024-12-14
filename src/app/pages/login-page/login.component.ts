import { Button } from '@/core/components/ui';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [Button],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  #authService = inject(AuthService);

  public login() {
    this.#authService.loginWithRedirect();
  }
}
