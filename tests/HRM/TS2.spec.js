//Core HR adds a Dept and HR Admin can view it 
import data from "../../TestData/TS.json"
import tsdata from "../../TestData/TSdata.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CorporatePage from "../../POM/CorporatePage"
import AdminHRHomePage from "../../POM/AdminHRHomePage"
import AdminEmpPage from "../../POM/AdminEmpPage"

test("Admin can view Dept Core HR created", async({page})=>{
    test.setTimeout(60000)
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, type=data.type
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    await page.waitForTimeout(2000)
    //create a corporate
    //1.  got to CorporateWebpage
    let corehp=new CoreHRHomePage(page)
    await corehp.addCorp()
    await page.waitForTimeout(3000)

    //2. add corporate
    let corpPg=new CorporatePage(page)
    let cn=tsdata.newcorp2
    await corpPg.addCorporateData(cn)
    await page.waitForTimeout(3000)

    //3. logout
    await corehp.logout()
    await page.waitForTimeout(3000)

    //4. HR Admin login     
    let usn2=data.usn2, pwd2=data.pwd2, type2=data.type2
    await lgn.loginPage(usn2, pwd2, type2)
    // await page.waitForTimeout(3000)

    //5.View employee
    let adminhp=new AdminHRHomePage(page)
    await adminhp.addEmp()
    await page.waitForTimeout(2000)

    //6.Create Emp->View Dept    
    let adep=new AdminEmpPage(page)
    await expect(adep.addEmpBtn).toBeEnabled()
    await adep.selDept(cn)
    await expect(adep.deptType).toContainText(cn)
    console.log("Success"); 
})