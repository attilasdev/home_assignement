import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShopPage } from '../pages/ShopPage';
import { CheckOutPage } from '../pages/CheckoutPage';
import dotenv from 'dotenv';
import path from 'path'
import { CheckOutPageStepOne } from '../pages/CheckoutPageStepOne';
import { CheckOutPageStepTwo } from '../pages/CheckoutPageStepTwo';

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '..', 'my.env') });

test('Saucedem valid login test', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await checkout.logout()
})

test('Saucedem invalid login test', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.INVALID_USER_PW as string)
    await checkout.errorMessageCheck()
})

test('Saucedem locked out user login test', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.LOCKED_OUT_USER_NAME as string, process.env.USER_PW as string)
    await checkout.errorMessageCheck()
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

test('Saucedemo making an order with a standard user', async ({ page }) => {
    const shop = new ShopPage(page)
    const checkout = new LoginPage(page)
    const order = new CheckOutPage(page)
    const orderStepOne = new CheckOutPageStepOne(page)
    const orderStepTwo = new CheckOutPageStepTwo(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await order.checkout()
    await orderStepOne.fillingForm(process.env.TEST_FIRST_NAME as string, process.env.TEST_LAST_NAME as string, process.env.ZIP_CODE as string)
    await orderStepTwo.checkOrderInfoPage()
    await orderStepTwo.finishOrder()
    await checkout.logout()
})

test('Saucedemo making an order with a problem user', async ({ page }) => {
    const shop = new ShopPage(page)
    const checkout = new LoginPage(page)
    const order = new CheckOutPage(page)
    const orderStepOne = new CheckOutPageStepOne(page)
    const orderStepTwo = new CheckOutPageStepTwo(page)
    await checkout.goto()
    await checkout.login(process.env.PROBLEM_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await order.checkout()
    await orderStepOne.fillingForm(process.env.TEST_FIRST_NAME as string, process.env.TEST_LAST_NAME as string, process.env.ZIP_CODE as string)
    await orderStepTwo.checkOrderInfoPage()
    await orderStepTwo.finishOrder()
    await checkout.logout()
})

test('Saucedemo making an order with a performance glitch user', async ({ page }) => {
    const shop = new ShopPage(page)
    const checkout = new LoginPage(page)
    const order = new CheckOutPage(page)
    const orderStepOne = new CheckOutPageStepOne(page)
    const orderStepTwo = new CheckOutPageStepTwo(page)
    await checkout.goto()
    await checkout.login(process.env.PERFORMANCE_GLITCH_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await order.checkout()
    await orderStepOne.fillingForm(process.env.TEST_FIRST_NAME as string, process.env.TEST_LAST_NAME as string, process.env.ZIP_CODE as string)
    await orderStepTwo.checkOrderInfoPage()
    await orderStepTwo.finishOrder()
    await checkout.logout()
})

test('Visual testing - login', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await expect(page).toHaveScreenshot();
  });

  test('Visual testing - shop', async ({ page }) => {
    const checkout = new LoginPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await expect(page).toHaveScreenshot();
  });
  test('Visual testing - checkout', async ({ page }) => {
    const checkout = new LoginPage(page)
    const shop = new ShopPage(page)
    const order = new CheckOutPage(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await expect(page).toHaveScreenshot();
  });

  test('Visual testing - order', async ({ page }) => {
    const checkout = new LoginPage(page)
    const shop = new ShopPage(page)
    const order = new CheckOutPage(page)
    const orderStepOne = new CheckOutPageStepOne(page)
    const orderStepTwo = new CheckOutPageStepTwo(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await order.checkout()
    await orderStepOne.fillingForm(process.env.TEST_FIRST_NAME as string, process.env.TEST_LAST_NAME as string, process.env.ZIP_CODE as string)
    await orderStepTwo.checkOrderInfoPage()
    await expect(page).toHaveScreenshot();
  });

  test('Visual testing - complete', async ({ page }) => {
    const checkout = new LoginPage(page)
    const shop = new ShopPage(page)
    const order = new CheckOutPage(page)
    const orderStepOne = new CheckOutPageStepOne(page)
    const orderStepTwo = new CheckOutPageStepTwo(page)
    await checkout.goto()
    await checkout.login(process.env.STANDARD_USER_NAME as string, process.env.USER_PW as string)
    await shop.addBackpack()
    await shop.addBikelight()
    await shop.addTShirtBolt()
    await shop.addJacket()
    await shop.addOnesie()
    await shop.addTshirtRed()
    await order.goto()
    await order.checkout()
    await orderStepOne.fillingForm(process.env.TEST_FIRST_NAME as string, process.env.TEST_LAST_NAME as string, process.env.ZIP_CODE as string)
    await orderStepTwo.checkOrderInfoPage()
    await orderStepTwo.finishOrder()
    await expect(page).toHaveScreenshot();
  });