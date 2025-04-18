import { log } from "console"

class CorporatePage{
    
    constructor(page)
    {
        this.page=page
        this.addCorpbtn=page.locator('//button[contains(text(), "Add Corporate")]')
        this.addCorpName=page.locator('(//div/input[@type="text"])[1]')
        this.saveBtn=page.locator('//button[text()="Save"]')
        this.search=page.locator('//input[@type="search"]')
        // this.findCorp=page.locator('//*[@id="example1"]/tbody/tr[1]/td[2]')
    }
    async addCorporateData(n)
    {
        this.addCorpbtn.click()
        this.addCorpName.fill(n)
        this.saveBtn.click()
    }
    async searchVerifyCorp(n)
    {
        this.search.fill(n)
        this.page.waitForTimeout(2000)
        const findCorp=this.page.locator("//td[text()='"+n+"']")
        await findCorp.first().waitFor();
        const count = await findCorp.count();
        console.log(count);        
        if (count > 0) {
            console.log(`${n} is displayed in ${count} cells`);
        } else {
            console.log(`${n} is not displayed`);
        }
         // console.log(await findCorp.length);
        
        // for(let fc of findCorp)
        // {
        //     let val=await fc.textContent();
        //     if(val && val.length>0)
        //     {
        //           console.log(`${n} is displayed`);
                    
        //     }
        //     else {
        //             console.log(`${n} is not displayed`);
        //         }
        // }
        // if (value && value.length > 0) {
        //     console.log(`${n} is displayed`);
        // } else {
        //     console.log(`${n} is not displayed`);
        // }
    }      
}
export default CorporatePage