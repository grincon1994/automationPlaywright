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

    }
}