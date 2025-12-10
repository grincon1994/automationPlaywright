import {test, expect} from '@playwright/test';
import {SearchItemsAndAddToCartPage} from '../src/pages/searchItemsAndAddToCart';


test.describe('Add and Delete items from cart', () =>{

        test('Add items to cart', async({page}) =>{

        const numberOfItems = Math.floor(Math.random() * 10 ) + 1;
        const searchItemsAndAddToCart = new SearchItemsAndAddToCartPage(page);

        await page.goto('https://automationexercise.com/view_cart');
        const initialCount = await page.locator('tbody tr').count();

        await searchItemsAndAddToCart.goto();
        await searchItemsAndAddToCart.addItemsToCart(numberOfItems);
        await page.locator('.shop-menu .fa-shopping-cart').click();
        await expect(page.locator('tbody tr')).toHaveCount(numberOfItems + initialCount);
    })


    test('Delete items from cart', async({page}) => {
        const searchItemsAndAddToCart = new SearchItemsAndAddToCartPage(page);
        await searchItemsAndAddToCart.deleteItemsFromCart();
        await page.waitForTimeout(1000);
        await expect(page.locator('tbody tr')).toHaveCount(0);
        await expect(page.locator('#cart_info #empty_cart')).toHaveText('Cart is empty! Click here to buy products.')
    })

})
