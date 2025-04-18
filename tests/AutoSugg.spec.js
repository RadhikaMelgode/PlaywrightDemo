import {test} from "@playwright/test"

test("Google Auto Suggestions", async({page})=>{
    await page.goto("https://www.google.co.in/")
    await page.locator('.gLFyf').click()
    await page.keyboard.type("Swift")
    await page.waitForTimeout(3000)
    // const res=await page.locator("//div/span[text()='swift' ]").all() //findElements
    const res=await page.$$("//ul/li/div/div[2]/div[1]/div[1]/span[1]")
    // .allTextContents()
    console.log(res.length);
    
    for (let ele of res) {
        let eleText=await ele.textContent()
        console.log(eleText);   
    }
    await page.locator("//div/span[text()='swift']").nth(0).click()
    await page.waitForTimeout(3000) 
})