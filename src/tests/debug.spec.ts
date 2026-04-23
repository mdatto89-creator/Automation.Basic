import { test, expect } from '@fixtures/base.fixture';
import { Config } from '@utils/env.config';

test('Debug page content after login', async ({ loginPage, page }) => {
    await loginPage.navigateToLogin();
    await loginPage.login(Config.admin.username, Config.admin.password);
    await page.waitForLoadState('networkidle');
    const content = await page.content();
    console.log('--- PAGE CONTENT START ---');
    console.log(content);
    console.log('--- PAGE CONTENT END ---');
});
