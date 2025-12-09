import {Page, expect} from '@playwright/test';

export class SearchItemsAndAddToCartPage{
    readonly page; 

    constructor(page:Page){
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://automationexercise.com/');
    }


    async addItemsToCart(numberOfItemsToAdd: number){

        const featureItem = this.page.locator('.features_items .col-sm-4');
        const itemOverlay = featureItem.locator('.product-overlay');
        const popupWhenAddingItemToCart = this.page.locator('#cartModal');
        const continueShoppingBtn = popupWhenAddingItemToCart.getByRole('button', {name: 'Continue Shopping'});

        for (let i=0; i < numberOfItemsToAdd; i++){

            await featureItem.nth(i).hover();
            await itemOverlay.nth(i).getByText('Add to cart').click();
            await expect(popupWhenAddingItemToCart.getByText('Added!')).toBeVisible();
            await continueShoppingBtn.click();
        }
    }
}