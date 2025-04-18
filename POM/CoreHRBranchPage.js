class CoreHRBranch{
    constructor(page)
    {
        this.page=page
        this.addBranchBtn=page.locator('//button[contains (text(),"Add Branches")]')
        this.addBranchesTF=page.locator('(//input[@name="branches_name"])[1]')
        this.addBranchSaveBtn=page.locator('//button[text()="Save"]')
        this.searchTF=page.locator('//input[@type="search"]')
        this.table=page.locator('#example1')
    }
    async addBranch(b)
    {
        await this.addBranchBtn.click()
        await this.page.waitForTimeout(3000)
        await this.addBranchesTF.fill(b)
        await this.addBranchSaveBtn.click()
    }
    async verifyBranch(b)
    {
        await this.searchTF.fill(b)
        const verifyb= await this.page.locator("//td[text()='"+b+"']")
        const count= await verifyb.count()
        if(count>0)
        {
            console.log(await `${b} is displayed ${count} times`);
        }
        else{
            console.log(await `${b} is not displayed`);
        }
    }
    async deleteBranch(b)
    {
        await this.searchTF.fill(b)
        const rows=await this.table.locator('tbody tr')
        const matchRow=await rows.filter({
            has: this.page.locator('td'),
            hasText: b
        })
        const deleteRow =await matchRow.locator("//td[text()='"+b+"']/../child::td[4]/button[text()='Delete']")
        await deleteRow.click()

        const confDel=await this.page.locator("//div/input[@value='"+b+"']/../following-sibling::div/button[text()='Delete']")
        await confDel.click()
    }
}
export default CoreHRBranch