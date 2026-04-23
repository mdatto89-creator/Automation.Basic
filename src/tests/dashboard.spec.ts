import { test, expect } from '@fixtures/base.fixture';
import { Config } from '@utils/env.config';

test.describe('Dashboard Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.navigateToLogin();
        await loginPage.login(Config.admin.username, Config.admin.password);
        await dashboardPage.navigateToDashboard();
    });

    test('Should display correct KPI metrics on the dashboard', async ({ dashboardPage }) => {
        // Assert KPI visibility and non-empty values
        await expect(dashboardPage.totalEmployees).toBeVisible();
        await expect(dashboardPage.averageSalary).toBeVisible();
        await expect(dashboardPage.averageAge).toBeVisible();
        await expect(dashboardPage.monthlySalaryBill).toBeVisible();

        const totalEmployees = await dashboardPage.getKPIMetric('Total Employees');
        expect(totalEmployees).not.toBeNull();
        expect(parseInt(totalEmployees!)).toBeGreaterThan(0);
    });

    test('Should display Top Earners leaderboard', async ({ dashboardPage }) => {
        // Assert Leaderboard rows are present
        const rowsCount = await dashboardPage.topEarnersRows.count();
        expect(rowsCount).toBeGreaterThan(0);

        const names = await dashboardPage.getTopEarnerNames();
        console.log('Top Earners:', names);
        expect(names.length).toBe(5); // The dashboard displays the top 5 earners
    });

    test('Should navigate to Employee List from Dashboard via sidebar', async ({ homePage, page }) => {
        await homePage.clickEmployeeList();
        await expect(page).toHaveURL(/.*Employee/);
    });
});
