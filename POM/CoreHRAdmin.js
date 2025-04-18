class CoreHRAdmin{
    constructor(page){
        this.page=page
        this.table=page.locator('#example1')
    }
    async delData(val)
    {
        const rows=await this.table.locator('tbody tr')
        // console.log(await rows.count());
        const matchedRow=await rows.filter({
            has: this.page.locator('td'),
            hasText: val
        })        
        const mr=await matchedRow.locator('td').first()
        await mr.click()
        await this.page.waitForTimeout(4000)
        const delIcon= await this.page.locator('//span[text()="Action"]/../span[2]/i[2]')
        await delIcon.click();
        const delBtn= await this.page.locator("//div/input[contains(@value, '"+val+"')]/../following-sibling::div/button[text()='Delete']")
        await delBtn.click()        
    }
}
export default CoreHRAdmin