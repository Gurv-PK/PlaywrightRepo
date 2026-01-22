class LoginPage{
    async username() {
        return await page.$('#user-name')
    }

    async password_fill(test) {
        return await page.fill('#password',test)
    }

    async login_button_click(){
        return await page.click('.submit-button.btn_action')
    }
}
module.exports = LoginPage