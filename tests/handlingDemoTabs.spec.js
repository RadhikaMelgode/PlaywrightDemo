import {test, expect} from "@playwright/test"

test("Handling separate Window", async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.locator('//a[text()="Open New Seperate Windows"]').click()
    const [newWindow]=await Promise.all([
        context.waitForEvent('page'),
        page.locator("//button[text()='click']").click()
    ])
    await newWindow.waitForLoadState();
    await newWindow.waitForTimeout(5000)
    await newWindow.locator("//a[text()='English']").click()
        // await newWindow.locator('.navbar-toggler-icon').click()
    // await page.waitForTimeout(2000)
    // await page.waitForSelector("//div/h4[text()='Selenium WebDriver']/../..//a[contains(text(), 'Read more')]")
    await newWindow.locator("//div/h4[text()='Selenium WebDriver']/../..//a[contains(text(), 'Read more')]").click()
    console.log("success");
})