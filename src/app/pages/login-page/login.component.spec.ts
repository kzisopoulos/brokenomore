import { runFnInContext, createSpyObj } from '@/core/lib/testing';
import { LoginPage } from './login.component';
import { AuthService } from '@auth0/auth0-angular';

describe('AppComponent', () => {
  let component: LoginPage;
  let authServiceMock: jest.Mocked<AuthService>;

  const createComponent = () =>
    runFnInContext(
      [
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
      ],
      () => (component = new LoginPage()),
    );

  beforeEach(() => {
    authServiceMock = createSpyObj(AuthService, ['loginWithRedirect']);
    createComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginWithRedirect', () => {
    component.login();
    expect(authServiceMock.loginWithRedirect).toHaveBeenCalled();
  });
});
