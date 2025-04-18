//CoreHr creates a branch and searches for it 
import data from "../../TestData/TS.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CoreHRBranch from "../../POM/CoreHRBranchPage"

test("Create a branch", async ({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    //branch-> add branch
    let chp=new CoreHRHomePage(page)
    await chp.addBranch()
    //add branch
    let chb=new CoreHRBranch(page)
    await chb.addBranch("Roses")
    //search branch
    await chb.verifyBranch("Roses")
    //logout
    await chp.logout()
})