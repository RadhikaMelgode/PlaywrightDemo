class CoreHRAddAdmin{
    constructor(page){
        this.page=page
        this.addAdminBtn=page.locator('//button[contains(text(), "Admin")]')
        this.addAdminCompID=page.locator('(//input[@name="hr_companyid"])[1]')
        this.addAdminFirstName=page.locator('(//input[@name="hr_firstname"])[1]')
        this.addAdminLastName=page.locator('(//input[@name="hr_lastname"])[1]')
        this.addAdminMiddleName=page.locator('(//input[@name="hr_middlename"])[1]')
        this.addAdminContactNo=page.locator('(//input[@name="hr_contactno"])[1]')
        this.addAdminPos=page.locator('(//select[@id="hr_type"])[1]')
        this.addAdminEmail=page.locator('(//input[@name="hr_email"])[1]')
        this.addAdminPwd=page.locator('(//input[@name="hr_password"])[1]')
        this.addAdminSavebtn=page.locator('//button[text()="Save"][@name="hr_admin"]')
        //search
        this.searchAdmin=page.locator('//input[@type="search"]')
    }
    async createAdmin(cmpId, fn, ln, mn, cn, em, pwd, val)
    {
        await this.addAdminBtn.click()
        await this.page.waitForTimeout(3000)
        await this.addAdminCompID.fill(cmpId)
        await this.addAdminFirstName.fill(fn)
        await this.addAdminLastName.fill(ln)
        await this.addAdminMiddleName.fill(mn)
        await this.addAdminContactNo.fill(cn)
        await this.addAdminPos.selectOption({value: val})
        await this.addAdminEmail.fill(em)
        await this.addAdminPwd.fill(pwd)
        await this.addAdminSavebtn.click()
    }
    async searchNewAdmin(fn)
    {
        await this.searchAdmin.fill(fn)
        await this.page.waitForTimeout(2000)
        const verifyAdmin=await this.page.locator("//td[text()='"+fn+"']")
        //await verifyAdmin.first().waitFor()
        const count=await verifyAdmin.count()
        if(count>0)
        {
            console.log(await `${fn} is displayed in ${count} cells`);
        }
        else
        {
            console.log(await `${fn} is not displayed`);
        }
    }
}
export default CoreHRAddAdmin