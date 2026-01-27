class LoginPage{
    constructor(page){
        this.page = page;
    }
    
    async enter_username(username){
        await this.page.getByPlaceholder('Username').fill(username);
    }

    async enter_password(password){
        await this.page.getByPlaceholder('Password').fill(password);
    }

    async clickLoginButton(){
        const loginButton = this.page.getByRole('button', { name: 'Login' });
        await loginButton.waitFor({state: 'visible'});
        await loginButton.click();
    }
}
module.exports = LoginPage