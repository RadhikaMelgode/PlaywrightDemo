import {test} from "@playwright/test"

test("Keyboard Actions", async({page})=>{
    await page.goto("https://www.google.co.in/")
    await page.locator('#APjFqb').click()
    await page.keyboard.type("Swift")
    await page.waitForTimeout(5000)
    await page.keyboard.press('Control+A+C+X')
    await page.keyboard.press("Control+V")
    await page.keyboard.inse("Shift")
    await page.waitForTimeout(3000)
    await page.screenshot({path: 'data/ss.png', fullPage: true})
})