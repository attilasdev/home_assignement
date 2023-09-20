import { expect, Locator, Page } from '@playwright/test'
import { ShopPage } from './ShopPage'

export class CheckOutPageStepOne {
    readonly url = "https://www.saucedemo.com/checkout-step-one.html"
    readonly page: Page


    readonly firstNameText: Locator
    readonly lastNameText: Locator
    readonly zipCodeText: Locator
    readonly continueButton: Locator


    constructor(page: Page) {
        this.page = page
        this.firstNameText = page.locator('#first-name')
        this.lastNameText = page.locator('#last-name')
        this.zipCodeText = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
    }


    public async goto() {
        await this.page.goto(this.url)
    }
    public async fillingForm(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameText.fill(firstName)
        await this.lastNameText.fill(lastName)
        await this.zipCodeText.fill(zipCode)
        await this.continueButton.click()
    }

}