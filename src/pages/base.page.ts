import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
    constructor(protected page: Page) {}

    async navigate(path: string = '/') {
        await this.page.goto(path);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async type(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) || '';
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }
}
