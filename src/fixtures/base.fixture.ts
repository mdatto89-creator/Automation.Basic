import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { HomePage } from '@pages/home.page';
import { DashboardPage } from '@pages/dashboard.page';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
});

export { expect } from '@playwright/test';
