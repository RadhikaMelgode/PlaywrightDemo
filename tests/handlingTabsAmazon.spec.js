import {test, expect} from "@playwright/test"

test("Multiple tabs", async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let p1=page.url()
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("shoes")
    await page.keyboard.press('Enter')
    let product= await page.locator("(//span[contains(text(), 'Lite Sport Shoes')])[1]")
    let [newPage]=await Promise.all([
        context.waitForEvent('page'),
        product.click()
    ])
    await expect.soft(newPage).not.toHaveURL(p1)
    console.log(await page.title());
    await page.waitForTimeout(2000)
    console.log((await newPage.title()));
    await newPage.waitForTimeout(2000)
    await newPage.locator('//input[@value="Add to Cart"]').click()
    await newPage.locator("(//a[contains(text(), 'Go to Cart')])[1]")
})