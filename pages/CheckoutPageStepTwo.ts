import { expect, Locator, Page } from '@playwright/test'
import { ShopPage } from './ShopPage'

export class CheckOutPageStepTwo {
    readonly url = "https://www.saucedemo.com/checkout-step-two.html"
    readonly page: Page

    readonly pageTitle: Locator

    readonly paymentInfo: Locator
    readonly shippingInfo: Locator
    readonly priceTotal: Locator
    readonly total: Locator
    readonly cancelButton: Locator
    readonly finishButton: Locator
   
    readonly orderComplete: Locator
    readonly backToProductsButton: Locator

    constructor(page: Page) {
        this.page = page

        this.pageTitle = page.locator('.title')

        this.paymentInfo = page.locator('.summary_info > div:nth-of-type(2)')
        this.shippingInfo = page.locator('.summary_info > div:nth-of-type(4)')
        this.priceTotal = page.locator('.summary_subtotal_label')
        this.total = page.locator('.summary_info_label.summary_total_label')
        this.cancelButton = page.locator('#cancel')
        this.finishButton = page.locator('#finish')

        this.orderComplete = page.locator('#checkout_complete_container')
        this.backToProductsButton = page.locator('#back-to-products')

    }

    public async goto() {
        await this.page.goto(this.url)
    }
    public async checkOrderInfoPage() {
        await this.paymentInfo.isVisible()
        await this.shippingInfo.isVisible()
        await this.priceTotal.isVisible()
        await this.total.isVisible()
    }
    public async finishOrder() {
        await this.finishButton.click()
        await this.orderComplete.isVisible()
        await this.backToProductsButton.isVisible()
    }
    public async goBackToOrder() {
        await this.backToProductsButton.click()
        await this.pageTitle.isVisible()
    }
}