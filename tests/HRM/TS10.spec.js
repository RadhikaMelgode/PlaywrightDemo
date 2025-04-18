//Core HR creates both a new Dept and new HR Admin acc+ HR admin logs in
import data from "../../TestData/TS.json"
import {test, expect} from '@playwright/test'
import LoginHRM from '../../POM/LoginHRM'
import CoreHRHomePage from '../../POM/CoreHRHomePage'
import CorporatePage from '../../POM/CorporatePage'
import CoreHRAddAdmin from '../../POM/CoreHRAddAdmin'

test("New Dept and New HR account", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, usn2=data.usn2, pwd2=data.pwd2, type2=data.type2
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    //open Corporate Page
    let corehp=new CoreHRHomePage(page)
    await corehp.addCorp()
    await page.waitForTimeout(3000)
    //add corporate
    let corpPg=new CorporatePage(page)
    await corpPg.addCorporateData("Finance")
    await page.waitForTimeout(3000)
    //open Admin Page
    await corehp.addAdmin()
    //add Admin
    let chr=new CoreHRAddAdmin(page)
    await chr.createAdmin("C010", "Phoebe", "A", "APP", "98765000110", "a1@gmail.com", "Phoebe@123", "HR Assistant")
    await page.waitForTimeout(3000)
    //logs out
    await corehp.logout()
    //log in with new cred
    await lgn.loginPage("a1@gmail.com", "Phoebe@123", "HR Assistant")
    const title=await page.title()
    await expect(title).toBe("Addmin | Dashboard")
})