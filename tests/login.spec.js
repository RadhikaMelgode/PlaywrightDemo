import {test} from "@playwright/test"
import Login from "../POM/Login.js"

test("Login - POM", async ({page})=>{
    let login=new Login(page)
    await login.url()  
    await login.loginPage("student", "Password123")
})