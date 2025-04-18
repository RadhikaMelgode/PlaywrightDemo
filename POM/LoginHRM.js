class LoginHRM{
    constructor(page)
    {
        this.page=page
        this.email=page.locator('//input[@type="Email"]')
        this.pwd=page.locator('//input[@type="password"]')
        this.type=page.locator('#hr_type')
        this.btn=page.locator('//button[@type="submit"]')
    }
    async url(wp){
        this.page.goto(wp)
    }
    async loginPage(e, p, val)
    {
        await this.email.fill(e)
        await this.pwd.fill(p)
        await this.type.selectOption({value: val})
        await this.btn.click()
    }
}
export default LoginHRM