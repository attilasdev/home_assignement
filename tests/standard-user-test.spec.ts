import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShopPage } from '../pages/ShopPage';
import dotenv from 'dotenv';
import path from 'path'

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

test('Saucedemo login test', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
})

test('Saucedemo inventory page check', async ({ page }) => {
    const shop = new ShopPage(page)
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await shop.checkPage()
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
})