import {Page, expect} from '@playwright/test';

export class SearchItemsAndAddToCartPage{
    readonly page; 

    constructor(page:Page){
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://automationexercise.com/');
    }


    async addItemsToCart(){
        const addToCartBtn = this.page.locator('.features_items').getByText('Add to cart');
        const popupWhenAddingItemToCart = this.page.locator('#cartModal');
        const continueShoppingBtn = popupWhenAddingItemToCart.locator('.close-modal');

        const count = await addToCartBtn.count();
        const itemsToAdd = Math.min(count, 5);

        for (let i=0; i < itemsToAdd; i++){
            await addToCartBtn.nth(i).click();

            await popupWhenAddingItemToCart.waitFor({state: 'visible'});

            await continueShoppingBtn.click();

            await popupWhenAddingItemToCart.waitFor({state: 'hidden'});
            
        }
    }
}