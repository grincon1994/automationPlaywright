import {Page, expect} from '@playwright/test';
import { sign } from 'crypto';

export class RegisterAndLoginPage{
    readonly page;
    constructor(page:Page){
        this.page = page;
    }

    async goto(url:string){
        await this.page.goto(url)
    }

    async login(username: string, password: string){
        this.goto('https://automationexercise.com/login');

        const loginForm = this.page.locator(".login-form");

        await loginForm.getByPlaceholder("Email Address").fill(username);
        await loginForm.getByPlaceholder("Password").fill(password);
        await loginForm.getByRole("button", {name: "Login"}).click();
    }

    async registerNewUser(
        name:string, username:string, password: string, dayOfBirth:string, monthOfBirth:string, yearOfBirth:string, firstName:string, lastName:string, company:string, address:string, country:string,
        state:string, city:string, zipcode:string, mobileNumber:string
    ){

        this.goto('https://automationexercise.com/login');


        const signUpForm = this.page.locator('.signup-form')

        await expect(signUpForm.getByText('New User Signup!')).toBeVisible();

        await signUpForm.getByPlaceholder('Name').fill(name);
        await signUpForm.getByPlaceholder('Email Address').fill(username);
        await signUpForm.getByRole('button', {name: 'Signup'}).click();

        await this.page.waitForURL('**/signup');

        const accountInfoForm = this.page.locator('.login-form');
        await expect(accountInfoForm.getByText('Enter Account Information')).toBeVisible();

        await accountInfoForm.getByRole('radio', {name: 'Mr.'}).check();
        await accountInfoForm.locator('#password').fill(password);

        //Date of Birth
        await accountInfoForm.locator('#uniform-days #days').selectOption(dayOfBirth);
        await accountInfoForm.locator('#uniform-days #months').selectOption(monthOfBirth);
        await accountInfoForm.locator('#uniform-days #years').selectOption(yearOfBirth);

        //CheckBoxes
        await accountInfoForm.getByRole('checkbox', {name: 'Sign up for our newsletter!'}).check();
        await accountInfoForm.getByRole('checkbox', {name: 'Receive special offers from our partners!'}).check();

        //Address Information
        await accountInfoForm.locator('#first_name').fill(firstName);
        await accountInfoForm.locator('#last_name').fill(lastName);
        await accountInfoForm.locator('#company').fill(company);
        await accountInfoForm.locator('#address1').fill(address);
        await accountInfoForm.locator('#country').selectOption(country);
        await accountInfoForm.locator('#state').fill(state);
        await accountInfoForm.locator('#city').fill(city);
        await accountInfoForm.locator('#zipcode').fill(zipcode);
        await accountInfoForm.locator('#mobile_number').fill(mobileNumber);
        await accountInfoForm.getByRole('button', {name: 'Create Account'}).click()




    }
    
}