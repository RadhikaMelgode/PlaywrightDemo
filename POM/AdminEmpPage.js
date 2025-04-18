class AdminEmpPage{
    constructor(page)
    {
        this.page=page
        this.addEmpBtn=page.locator('//button[contains(text(), "Add Employee")]')
        this.addCompId=page.locator('(//input[@name="employee_companyid"])[1]')
        this.addFirstName=page.locator('(//input[@name="employee_firstname"])[1]')
        this.addLastName=page.locator('(//input[@name="employee_lastname"])[1]')
        this.addMiddleName=page.locator('(//input[@name="employee_middlename"])[1]')
        this.deptType=page.locator('(//select[@name="employee_department"])[1]')
        this.branchType=page.locator('(//select[@name="employee_branches"])[1]')
        this.empPos=page.locator('(//input[@name="employee_position"])[1]')
        this.contNo=page.locator('(//input[@name="employee_contact"])[1]')
        this.branchDateFrom=page.locator("(//input[@name='branches_datefrom'])[1]")
        this.branchRecentDate=page.locator("(//input[@name='branches_recentdate'])[1]")
        this.empPic=page.locator('(//input[@name="employee_image"])[1]')
    }
    async selDept(val){
        //create employee
        //await this.page.waitForTimeout(4000)
        await this.addEmpBtn.click()
        await this.page.waitForTimeout(4000)
        await this.deptType.selectOption({value: val})
    }
    async handleCal()
    {
        await this.addEmpBtn.click()
        await this.page.waitForTimeout(4000)
        await this.branchDateFrom.click()
    }
    async uploadImg()
    {
        await this.addEmpBtn.click()
        await this.page.waitForTimeout(2000)
        await this.empPic.setInputFiles('data/Profile.PNG.webp')
        await this.page.waitForTimeout(4000)
    }
    async selBranch(val)
    {
        await this.addEmpBtn.click()
        await this.page.waitForTimeout(2000)
        await this.branchType.selectOption({value: val})
    }
}
export default AdminEmpPage