import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator = this.page.locator('#UserName');
    readonly passwordInput: Locator = this.page.locator('#Password');
    readonly loginButton: Locator = this.page.locator('button.btn-signin, input[type="submit"]');
    readonly loginLink: Locator = this.page.getByRole('link', { name: 'Login' });

    async navigateToLogin() {
        await this.navigate('/');
        await this.loginLink.click();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
