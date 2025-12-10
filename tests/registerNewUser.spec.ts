import { test, expect } from '@playwright/test';
import { RegisterAndLoginPage } from '../src/pages/loginPage';

test('register new user', async ({ page }) => {
    const registerAndLoginPage = new RegisterAndLoginPage(page);

    registerAndLoginPage.registerNewUser('roberto', 'roberto2@test.com', 'roberto123', '10', 'May', '1990', 'Roberto', 'Inco', 'Medtronic', '123 Main St', 'Canada', 'Ontario', 'Toronto', 'M1M1M1', '1234567890');

    await expect(page.getByText('Account Created!')).toBeVisible();

    await page.getByRole('button', {name: 'Continue'}).click();

    await expect(page.locator('.navbar-nav')).toContainText('roberto');

})


test('Delete Account', async ({page}) => {
    const registerAndLoginPage = new RegisterAndLoginPage(page);
    
})