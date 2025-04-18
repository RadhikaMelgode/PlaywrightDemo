//CoreHR searches for a branch and deletes it
import data from "../../TestData/TS.json"
import {test, expect} from "@playwright/test"
import CoreHRHomePage from "../../POM/CoreHRHomePage"
import CoreHRBranch from "../../POM/CoreHRBranchPage"
import LoginHRM from "../../POM/LoginHRM"

test("Delete a branch", async({page})=>{
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)    //branch-> add branch
    let chp=new CoreHRHomePage(page)
    await chp.addBranch()
    //delete a branch
    let chb=new CoreHRBranch(page)
    await chb.deleteBranch("Roses")
    //verify
    await chb.verifyBranch("Roses")
    //logout
    await chp.logout()
})