//corehr deletes a hr admin; assert-not-login(noturl or not title)
import data from "../../TestData/TS.json"
import addata from "../../TestData/TSAdminData.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CoreHRAdmin from "../../POM/CoreHRAdmin"

test("Delete a HR account", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, type=data.type
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    await page.waitForTimeout(3000)
    //go to Admin
    let chp=new CoreHRHomePage(page)
    await chp.addAdmin()

    let cad=new CoreHRAdmin(page)
    let adName=addata.adminName
    await cad.delData(adName)
        
    //CoreHr logout
    await chp.logout()
    await page.waitForTimeout(3000)

    //HR Admin login
    let em=addata.email, passwd=addata.pwd, adType=addata.type
    await lgn.loginPage(em, passwd, adType)
    const title=await page.title()
    expect(title).not.toBe("Addmin | Dashboard")
})