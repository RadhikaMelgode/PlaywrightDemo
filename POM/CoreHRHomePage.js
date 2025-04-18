class CoreHRHomePage{
    constructor(page){
        this.page=page
        this.corp=page.locator('//p[contains(text(), "CORPORATE")]')
        this.addCorpLink=page.locator('//p[contains(text(), "Add Corporate")]')
        
        this.branch=page.locator('//p[contains(text(), "BRANCHES")]')
        this.addBranchLink=page.locator('//p[contains(text(), "Add Braches")]')

        this.admin=page.locator('//p[contains(text(), "ADMIN")]')
        this.addAdminLink=page.locator('//p[contains(text(), "Add Admin")]')

        this.logoutHead=page.locator('//ul[2]/li/a[@class="nav-link"]')
        this.logoutLink=page.locator('//ul[2]/li/div/a[2]')
    }
    async addCorp()
    {
        await this.corp.click()
        await this.addCorpLink.click()
    }
    async addBranch()
    {
        await this.branch.click()
        await this.page.waitForTimeout(2000)
        await this.addBranchLink.click()
        await this.page.waitForTimeout(2000)
    }
    async addAdmin()
    {
        await this.admin.click()
        await this.page.waitForTimeout(4000)
        await this.addAdminLink.click()
        await this.page.waitForTimeout(4000)
    }
    async logout()
    {
        await this.logoutHead.click()
        await this.logoutLink.click()
    }
}
export default CoreHRHomePage