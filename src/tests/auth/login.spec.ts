import { test, expect } from '@fixtures/base.fixture';
import { Config } from '@utils/env.config';

test.describe('Authentication Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLogin();
    });

    test('Should login successfully with admin credentials', async ({ loginPage, homePage }) => {
        // Act
        await loginPage.login(Config.admin.username, Config.admin.password);

        // Assert
        await expect(homePage.logoutLink).toBeVisible();
        await expect(homePage.helloMessage).toBeVisible();
        
        const isLoggedIn = await homePage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy();
    });

    test('Should not login with invalid credentials', async ({ loginPage }) => {
        // Act
        await loginPage.login('invalid_user', 'invalid_password');

        // Assert
        // Expect to stay on login page or see error message
        await expect(loginPage.usernameInput).toBeVisible();
    });
});
