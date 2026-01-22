Login = require('../pages/logingpage')
data = require('../testData/data.json')

describe('posts',() =>{

    const login = new Login()
    beforeEach(async() => {
        context = await global.browser.newContext()
        page = await context.newPage()
        global.page = page
        await page.goto(data.url)
    })

    test('Sign in',async () =>{
        
        const login_logo_text = await page.$eval('.login_logo',e1=>e1.textContent)
        expect(login_logo_text).toBe("Swag Labs")
        await page.screenshot({path:'D:/Jest/screenshot/saucedemo-login.png'})
        const username = await login.username();
        await username.fill(data.username)
        await login.password_fill(data.password)
        await login.login_button_click()
        await page.waitForSelector('.app_logo')
        await page.screenshot({path:'D:/Jest/screenshot/home.png'})
    }, 30000)

    afterAll(async () => {
        browser.close()
    })
})