import {test, expect} from "@playwright/test"
import LoginHRM from "../POM/LoginHRM"

test("Trials and Errors", async({page})=>{
    await page.goto("http://49.249.28.218:8081/AppServer/HRM_System/index.html")
    let obj=new LoginHRM(page)
    // await obj.loginPage("hrassistant@gmail.com", "hrassistant@123", "HR Assistant")
    await obj.loginPage("hrhead@gmail.com", "hrhead@123", "HR Head")
    console.log(await page.title());
    
})