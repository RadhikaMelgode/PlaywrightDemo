//TS-6 coreHR creates a new acc and they login
import data from "../../TestData/TS.json"
import {test, expect} from "@playwright/test"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRAddAdmin from "../../POM/CoreHRAddAdmin"

test("Create new Admin account", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    await page.waitForTimeout(3000)
    // Admin-> Add admin
    let chp=new CoreHRHomePage(page)
    await chp.addAdmin()
    //Create Admin
    let chr=new CoreHRAddAdmin(page)
    await chr.createAdmin("C010", "Phoebe", "A", "APP", "98765000110", "a1@gmail.com", "Phoebe@123", "HR Assistant")
    await page.waitForTimeout(3000)

    //CoreHr logout
    await chp.logout()
    await page.waitForTimeout(3000)

    //HR Admin login
    await lgn.loginPage("a1@gmail.com", "Phoebe@123", "HR Assistant")
    const title=await page.title()
    await expect(title).toBe("Addmin | Dashboard")
})