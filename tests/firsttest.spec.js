import {expect, test} from "@playwright/test"

test("Login Page", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    let un=await page.locator("(//b[text()='student'])[1]").textContent()
    let pwd=await page.locator("(//b[text()='Password123'])[1]").textContent()
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@name="username"]').fill(un)
    await page.locator('//input[@name="password"]').fill(pwd)
    await page.locator('//button[@id="submit"]').click()
    console.log('Success');  
})                                      

test("Get Placeholder Text", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=4")
    await page.getByPlaceholder("Enter your name").fill("Mr. ABC")
    await page.getByPlaceholder("Enter Your Email").fill("abc12@gmail.com")
    await page.getByPlaceholder("Enter your password").fill("abcd!@34")
    await page.locator("//button[@type='submit']").click()
    if (await page.locator("(//div[text()='Registered successfully'])[2]").isVisible()){
    console.log("Success-2");
    }
    if( await page.getByText("Login").isVisible)
    {
        await page.getByPlaceholder("Enter your email").fill("abc12@gmail.com")
        await page.getByPlaceholder("Enter your password").fill("abcd!@34")
        // await page.locator("//button[@type='submit']").click()
        await page.click("//button[@type='submit']")
        if(await page.locator("(//div[text()='Signin successful'])[2]").isVisible())
        {
            console.log("SUCCESS");
        }
    } 
}) 


test("Dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.selectOption("//select[@id='select2']", "option11")
    await page.waitForTimeout(5000)
    // await page.locator('', {hasText: })
}) 