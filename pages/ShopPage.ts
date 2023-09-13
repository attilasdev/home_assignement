import { expect, Locator, Page } from '@playwright/test'

export class ShopPage {
    readonly url = "https://www.saucedemo.com/inventory.html"
    readonly page: Page

    readonly appLogo: Locator
    readonly pageTitle: Locator
    readonly checkoutLogo: Locator
    readonly sortContainer: Locator

    readonly inventoryImageOne: Locator
    readonly inventoryImageTwo: Locator
    readonly inventoryImageThree: Locator
    readonly inventoryImageFour: Locator
    readonly inventoryImageFive: Locator
    readonly inventoryImageSix: Locator

    readonly inventoryTitleOne: Locator
    readonly inventoryTitleTwo: Locator
    readonly inventoryTitleThree: Locator
    readonly inventoryTitleFour: Locator
    readonly inventoryTitleFive: Locator
    readonly inventoryTitleSix: Locator

    readonly addBackpackItem: Locator
    readonly addBikeLightItem: Locator
    readonly addTShirtBoltItem: Locator
    readonly addOnesieItem: Locator
    readonly addTShirtRedItem: Locator
    readonly addJacketItem: Locator

    readonly removeBackpackItem: Locator
    readonly removeBikeLightItem: Locator
    readonly removeTShirtBoltItem: Locator
    readonly removeOnesieItem: Locator
    readonly removeTShirtRedItem: Locator
    readonly removeJacketItem: Locator

    constructor(page: Page) {
        this.page = page

        this.appLogo = page.locator('.app_logo')
        this.pageTitle = page.locator('.title')
        this.checkoutLogo = page.locator('.shopping_cart_link')
        this.sortContainer = page.locator('.product_sort_container')


        this.inventoryImageOne = page.locator('#item_1_img_link')
        this.inventoryImageTwo = page.locator('#item_2_img_link')
        this.inventoryImageThree = page.locator('#item_3_img_link')
        this.inventoryImageFour = page.locator('#item_4_img_link')
        this.inventoryImageFive = page.locator('#item_5_img_link')
        this.inventoryImageSix = page.locator('#item_6_img_link')

        this.inventoryTitleOne = page.locator('#item_1_title_link')
        this.inventoryTitleTwo = page.locator('#item_2_img_link')
        this.inventoryTitleThree = page.locator('#item_3_img_link')
        this.inventoryTitleFour = page.locator('#item_4_img_link')
        this.inventoryTitleFive = page.locator('#item_5_img_link')
        this.inventoryTitleSix = page.locator('#item_6_img_link')

        this.addBackpackItem = page.locator('#add-to-cart-sauce-labs-backpack')
        this.addBikeLightItem = page.locator('#add-to-cart-sauce-labs-bike-light')
        this.addTShirtBoltItem = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.addOnesieItem = page.locator('#add-to-cart-sauce-labs-onesie')
        this.addTShirtRedItem = page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)')
        this.addJacketItem = page.locator('#add-to-cart-sauce-labs-fleece-jacket')
        
        this.removeBackpackItem = page.locator('#remove-sauce-labs-backpack')
        this.removeBikeLightItem = page.locator('#remove-sauce-labs-bike-light')
        this.removeTShirtBoltItem = page.locator('#remove-sauce-labs-bolt-t-shirt')
        this.removeOnesieItem = page.locator('#remove-sauce-labs-onesie')
        this.removeTShirtRedItem = page.locator('#remove-test.allthethings()-t-shirt-(red)')
        this.removeJacketItem = page.locator('#remove-sauce-labs-fleece-jacket')


    }

    public async checkPage() {
        await this.inventoryImageOne.waitFor({ state: "visible" })
        await this.inventoryTitleOne.waitFor({ state: "visible" })
        await this.appLogo.waitFor({ state: "visible" })
        await this.pageTitle.waitFor({ state: "visible" })
        await this.checkoutLogo.waitFor({ state: "visible" })
        await this.sortContainer.waitFor({ state: "visible" })
    }

    public async addBackpack() {
        await this.addBackpackItem.click()
        await this.removeBackpackItem.waitFor({ state: "visible" })
    }

    public async addBikelight() {
        await this.addBikeLightItem.click()
        await this.removeBackpackItem.waitFor({ state: "visible" })
    }

    public async addTShirtBolt() {
        await this.addTShirtBoltItem.click()
        await this.removeTShirtBoltItem.waitFor({ state: "visible" })
    }

    public async addJacket() {
        await this.addJacketItem.click()
        await this.removeJacketItem.waitFor({ state: "visible" })
    }

    public async addOnesie() {
        await this.addOnesieItem.click()
        await this.removeOnesieItem.waitFor({ state: "visible" })
    }

    public async addTshirtRed() {
        await this.addTShirtRedItem.click()
        await this.removeTShirtRedItem.waitFor({ state: "visible" })
    }

}