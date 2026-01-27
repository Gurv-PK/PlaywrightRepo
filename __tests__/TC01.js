Login = require('../pages/logingpage')
data = require('../testData/data.json')

describe('login',() =>{

    let login;
    beforeEach(async() => {
        context = await global.browser.newContext()
        page = await context.newPage()
        global.page = page
        login = new Login(page);
        await page.goto(data.url,{ waitUntil: 'domcontentloaded' })
    })

    test('Sign in',async () =>{
        
        const login_logo_text = await page.$eval('.login_logo',e1=>e1.textContent)
        expect(login_logo_text).toBe("Swag Labs")
        await page.screenshot({path:`./screenshot/login-${Date.now()}.png`})
        await login.enter_username(data.username);
        await login.enter_password(data.password);
        await login.clickLoginButton();
        await page.waitForSelector('.app_logo')
        await page.screenshot({path:`./screenshot/home-${Date.now()}.png`})
    }, 60000)

    afterAll(async () => {
        await page.context().browser().close();
    })
})