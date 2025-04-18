//Core HR-> logs in, creates a branch-> branch should be available to HR Admin
import data from "../../TestData/TS.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CoreHRBranch from "../../POM/CoreHRBranchPage"
import AdminHRHomePage from "../../POM/AdminHRHomePage"
import AdminEmpPage from "../../POM/AdminEmpPage"

test("New Branch available to Admin", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd, usn2=data.usn2, pwd2=data.pwd2, type2=data.type2
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    //branch-> add branch
    let chp=new CoreHRHomePage(page)
    await chp.addBranch()
    //add branch
    let chb=new CoreHRBranch(page)
    await chb.addBranch("Roses")
    //logout
    await chp.logout()
    //hr admin logs in
    await lgn.loginPage(usn2, pwd2, type2)
    //clicks on emp-> add emp
    let adminhp=new AdminHRHomePage(page)
    await adminhp.addEmp()
    await page.waitForTimeout(2000)
    //select that Branch
    let adep=new AdminEmpPage(page)
    await adep.selBranch("Roses")
    await expect(adep.branchType).toContainText("Roses")
    //logout
    await chp.logout()
})