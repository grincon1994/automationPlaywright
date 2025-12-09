import {test, expect} from '@playwright/test';
import {SearchItemsAndAddToCartPage} from '../src/pages/searchItemsAndAddToCart';

test.use({ storageState: '.auth/user.json' });

test('Add items to cart', async({page}) =>{

    const numberOfItems = Math.floor(Math.random() * 10);
    const searchItemsAndAddToCart = new SearchItemsAndAddToCartPage(page);

    await searchItemsAndAddToCart.goto();
    await searchItemsAndAddToCart.addItemsToCart(numberOfItems);
    await page.locator('.shop-menu .fa-shopping-cart').click();
    await expect(page.locator('tbody tr')).toHaveCount(numberOfItems);
})