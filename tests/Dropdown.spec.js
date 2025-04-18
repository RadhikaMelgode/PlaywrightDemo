import {test, expect} from "@playwright/test"

test("Display dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    //clicks on the dropdown using ID
    await page.locator("#select3").click()  
    // await locator.selectOption("Poland")
    await page.waitForTimeout(4000)
    //gets all the options present in dropdown with a simple option tag added to ID
    const allOptions=await page.locator("#select3 option").all()
    let count=await allOptions.length
    console.log(count);
    
    // for(let i=0; i<count; i++ )
    // {
    //      let val=await page.locator("//select[@id='select3']/option").nth(i).textContent()
    //     console.log(val);
        
    // }
    for(let op of allOptions)
    {
        let value=await op.innerText()
        console.log(await op.textContent());
        if(value.includes("Poland"))
        {
            await page.selectOption("#select3", value)
            await page.waitForTimeout(4000)    
        }  
    }
    
})
