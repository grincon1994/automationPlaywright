import {test, expect} from '@playwright/test';
import {LoginPage} from '../src/pages/loginPage';



test('Login successfuly', async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("test2@proton.com", "medtronic1");
    await expect(page.locator('pull-right', {hasText: 'Logout'})).toBeVisible();
})

test('failed login', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("test@test.com", "wrongpassword");
    await expect(page.locator(".login-form").getByText("Your email or password is incorrect!")).toBeVisible();
})