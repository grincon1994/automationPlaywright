import {test, expect} from '@playwright/test';
import {LoginPage} from '../src/pages/loginPage';


test('Login successfuly', async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("test2@proton.com", "medtronic1");
    await expect(page.locator('.nav .navbar-nav .fa .fa-lock', {hasText: 'Logout'})).toBeVisible();
})