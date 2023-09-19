import  { expect, Locator, Page } from '@playwright/test'


export  class LoginPage {
    readonly url = "https://www.saucedemo.com/"
    readonly page: Page
    readonly swagLogo: Locator
    readonly nameInput: Locator
    readonly pwInput: Locator
    readonly loginButton: Locator
    readonly firstErrorLogo: Locator
    readonly secondErrorLogo: Locator
    readonly burgerMenu: Locator
    readonly logoutButton: Locator



    constructor(page: Page) {
        this.page = page
        this.swagLogo = page.locator('.login_logo')
        this.nameInput = page.locator('#user-name')
        this.pwInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.firstErrorLogo = page.locator("div:nth-of-type(1) > svg[role='img'] > path")
        this.secondErrorLogo = page.locator("div:nth-of-type(2) > svg[role='img'] > path")
        this.burgerMenu = page.locator('#react-burger-menu-btn')
        this.loginButton = page.locator('#logout_sidebar_link')
    }

    public async goto() {
        await this.page.goto(this.url)
    }
    public async login(name: string, pw: string){
        await this.swagLogo.waitFor({state:"visible"})
        await this.nameInput.fill(name)
        await this.pwInput.fill(pw)
        await this.loginButton.click()
    }
    public async logout() {
        await this.burgerMenu.click()
        await this.logoutButton.click()
    }
}