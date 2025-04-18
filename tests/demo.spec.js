import {test} from "@playwright/test";

test("New Browser", async({browser})=>{
    let context=await browser.newContext()
    let page=await browser.newPage()
    await page.goto("https://playwright.dev/docs/locators")
})