import {expect, test} from "@playwright/test"
import { assert } from "console"
import { type } from "os"

test("Handle Single frames", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
    let frame1=await page.frameLocator("//iframe[@class='w-full h-96']")
    await frame1.locator('#username').fill("abcd")
    await page.waitForTimeout(3000)
    await frame1.locator('#password').fill("abcde23")
    await frame1.locator('#submitButton').click()
})

test("Hangle multiple frames", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2')
    let frame1=await page.frameLocator('//div[1]/iframe')
    let fullEmail=await page.locator("//article[contains(@class, 'mt-2')]/p[contains(text(), 'Email')]").textContent()
    let email= await fullEmail.split(':')[1];
    let fullPwd=await page.locator("//article[contains(@class, 'mt-2')]/p[contains(text(), 'Password')][1]").textContent()
    let pwd= fullPwd.split(':')[1].trim();
    let fullConfpwd=await page.locator("//article[contains(@class, 'mt-2')]/p[contains(text(), 'Password')][2]").textContent()
    let confPwd=fullConfpwd.split(':')[1].trim();
    await frame1.locator('#email').fill(email)
    await page.waitForTimeout(2000)
    await frame1.locator('#password').fill(pwd)
    await page.waitForTimeout(2000)
    await frame1.locator('#confirm-password').fill(confPwd)
    await page.waitForTimeout(2000)
    await frame1.locator('#submitButton').click()
    await page.waitForTimeout(2000)

    let frame2= await page.frameLocator("(//div/iframe)[2]")
    let fullUsn= await page.locator("//article[contains(@class, 'mt-6')]/p[contains(text(), 'Email')]").textContent()
    let usn= await fullUsn.split(':')[1]
    let fullpwd=await page.locator("//article[contains(@class, 'mt-6')]/p[contains(text(), 'Password')]").textContent()
    let pword= await fullpwd.split(':')[1].trim()
    await frame2.locator('#username').fill(usn)
    await page.waitForTimeout(2000)
    await frame2.locator('#password').fill(pword)
    await page.waitForTimeout(2000)
    await frame2.locator('#submitButton').click()
    await page.waitForTimeout(2000)
})

test.only("Nested frames", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
    let frame1= await page.frameLocator("//div/iframe[@class]")
    let defemail=await frame1.locator("//div/p[contains(text(), 'Email')]/following-sibling::p[1]").textContent()
    let defPwd=await frame1.locator("(//div/p[contains(text(), 'Password')]/following-sibling::p)[1]").textContent()
    let defConfpwd=await frame1.locator("//div/p[contains(text(), 'Confirm Password')]/following-sibling::p[1]").textContent()

    let nestFrame=await frame1.frameLocator("//div[@class='form_container']/iframe")
    await nestFrame.locator('#email').fill(defemail)
    await page.waitForTimeout(2000)
    await nestFrame.locator('#password').fill(defPwd)
    await page.waitForTimeout(2000)
    await nestFrame.locator('#confirm-password').fill(defConfpwd)
    await page.waitForTimeout(1000)
    await nestFrame.locator('#submitButton').click()
    await page.waitForTimeout(1000)
    // if (await page.locator("//div[text()='Sign up successful!']").isVisible())
    // {
    //     console.log("Success");
    // }
    await expect(page.locator("//div[text()='Sign up successful!']")).toBeVisible()
})
