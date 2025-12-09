import {test, expect} from '@playwright/test';
import {SearchItemsAndAddToCartPage} from '../src/pages/searchItemsAndAddToCart';

test.use({ storageState: '.auth/user.json' });

test('Add items to cart', async({page}) =>{
    const searchItemsAndAddToCart = new SearchItemsAndAddToCartPage(page);
    await searchItemsAndAddToCart.goto();
    await searchItemsAndAddToCart.addItemsToCart();
    await page.locator('.shop-menu .fa-shopping-cart').click();
    await expect(page.locator('tbody tr')).toHaveCount(5);
})