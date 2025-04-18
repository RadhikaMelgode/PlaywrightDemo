//login as HR - Admin and upload file
import data from "../../TestData/TS.json"
import {test, expect} from "@playwright/test"
import LoginHRM from "../../POM/LoginHRM"
import AdminHRHomePage from "../../POM/AdminHRHomePage"
import AdminEmpPage from "../../POM/AdminEmpPage"

test("Create Employee", async({page})=>{
    //1. login as HrAdmin
    let lgn=new LoginHRM(page)
    let url=data.url, usn=data.usn, pwd=data.pwd
    await lgn.url(url)
    await lgn.loginPage(usn, pwd, type)
    await page.waitForTimeout(2000)
    //2.click on employee-> add employee to go to emp page
    let ahp=new AdminHRHomePage(page)
    await ahp.addEmp()
    //3.click on add emp button and upload file
    let aep=new AdminEmpPage(page)
    await aep.uploadImg()
    console.log("Success");    
})