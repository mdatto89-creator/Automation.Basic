import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
    // KPI Cards
    readonly totalEmployees: Locator = this.page.locator('.stat-card.sc-blue .sc-value');
    readonly averageSalary: Locator = this.page.locator('.stat-card.sc-green .sc-value');
    readonly averageAge: Locator = this.page.locator('.stat-card.sc-orange .sc-value');
    readonly monthlySalaryBill: Locator = this.page.locator('.stat-card.sc-purple .sc-value');

    // Leaderboards
    readonly topEarnersRows: Locator = this.page.locator('.grid-2 .panel:nth-of-type(1) .leader-list li');
    readonly mostExperiencedRows: Locator = this.page.locator('.grid-2 .panel:nth-of-type(2) .leader-list li');

    async navigateToDashboard() {
        await this.page.goto('/Home/Dashboard');
    }

    async getKPIMetric(metric: 'Total Employees' | 'Average Salary' | 'Average Age' | 'Monthly Salary Bill'): Promise<string | null> {
        switch (metric) {
            case 'Total Employees': return await this.totalEmployees.textContent();
            case 'Average Salary': return await this.averageSalary.textContent();
            case 'Average Age': return await this.averageAge.textContent();
            case 'Monthly Salary Bill': return await this.monthlySalaryBill.textContent();
            default: throw new Error(`Unknown metric: ${metric}`);
        }
    }

    async getTopEarnerNames(): Promise<string[]> {
        return await this.topEarnersRows.locator('.leader-name').allTextContents();
    }
}
