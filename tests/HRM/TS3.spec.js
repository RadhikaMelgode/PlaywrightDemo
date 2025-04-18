//CoreHR creates new HRAdmin Account and searches it
import data from "../../TestData/TS.json"
import admindata from "../../TestData/TSAdminData.json"
import {test, expect} from "@playwright/test"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRAddAdmin from "../../POM/CoreHRAddAdmin"

test("Create new Admin account", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, type=data.type
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)    
    await page.waitForTimeout(3000)
    // Admin-> Add admin
    let chp=new CoreHRHomePage(page)
    await chp.addAdmin()
    //Create Admin
    let chr=new CoreHRAddAdmin(page)
    let compID=admindata.compID, adName=admindata.adminName, mn=admindata.adminMiddleName
    let lastname=admindata.adminLastName, phno=admindata.phoneNum
    let em=admindata.email, passwd=admindata.pwd, adType=admindata.type
    await chr.createAdmin(compID, adName, mn, lastname, phno, em, passwd, adType)
    await page.waitForTimeout(3000)
    //search it
    await chr.searchNewAdmin(adName)
    // await page.waitForTimeout(2000)
    //CoreHr logout
    await chp.logout()
    await page.waitForTimeout(3000)
})