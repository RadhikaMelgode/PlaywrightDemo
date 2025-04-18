//Core HR adds a Dept, Core HR can view it //another TS: and creates an account
import data from "../../TestData/TS.json"
import tsdata from "../../TestData/TSdata.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CorporatePage from "../../POM/CorporatePage"

test("Core HR can view the Dept they created", async ({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, type=data.type
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    await page.waitForTimeout(3000)
    //create a corporate
    //1.  got to CorporateWebpage
    let corehp=new CoreHRHomePage(page)
    await corehp.addCorp()
    await page.waitForTimeout(3000)

    //2. add corporate
    let corpPg=new CorporatePage(page)
    let cn=tsdata.newcorp1
    await corpPg.addCorporateData(cn)
    await page.waitForTimeout(3000)

    //3. search corporate
    await corpPg.searchVerifyCorp(cn)
    await page.waitForTimeout(4000)

    //4. logout
    await corehp.logout()
})