import { test as setup } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  const login = new LoginPage(page);
  await login.goto();
  await login.login('test2@proton.com', 'medtronic1');
  

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});