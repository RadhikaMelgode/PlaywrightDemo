class Login{
    constructor(page)
    {
        this.page=page
        this.un=page.locator('//input[@name="username"]')
        this.pwd=page.locator('//input[@name="password"]')
        this.lgnBtn=page.locator('//button[@id="submit"]')
    }
    async url()
    {
        this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }
    async loginPage(u, p)
    {
        await this.un.fill(u)
        await this.pwd.fill(p)
        await this.lgnBtn.click()
    }
}
export default Login