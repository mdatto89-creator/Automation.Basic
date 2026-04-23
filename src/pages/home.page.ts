import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
    readonly logoutLink: Locator = this.page.locator('form[action="/Account/Logout"]>button');
    readonly employeeListLink: Locator = this.page.locator('a:has-text("Employee List"), a:has-text("Employees")');
    readonly helloMessage: Locator = this.page.locator(':text-is("Hello admin!"), :text("Hello")');

    async isLoggedIn(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async clickEmployeeList() {
        await this.employeeListLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}
