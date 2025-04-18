import {test, expect} from "@playwright/test"

test("manage", async({browser})=>{
    const context = await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    
    const allPages= context.pages()
    console.log("No of pages", allPages.length);
})