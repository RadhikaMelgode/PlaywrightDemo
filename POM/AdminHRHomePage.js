class AdminHRHomePage{
    constructor(page)
    {
        this.page=page
        this.emp=page.locator('//p[contains(text(), "EMPLOYEE")]')
        this.addEmpLink=page.locator('//p[contains(text(), "Add Employee")]')
    }
    async addEmp()
    {
        await this.emp.click()
        await this.page.waitForTimeout(3000)
        await this.addEmpLink.click()
    }
 
}
export default AdminHRHomePage