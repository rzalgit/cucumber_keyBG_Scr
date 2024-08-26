import Page from "./page";
import {$,expect,browser} from '@wdio/globals'

class LoginPage extends Page {

    get usernameField(){
        return $('//*[@id="user-name"]');
    }
    get passwordField(){
        return $('//*[@id="password"]');
    }
    get loginButton(){
        return $('//*[@id="login-button"]');
    }

    get errorMessage(){
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

    async inputUsername(username){
        await this.usernameField.setValue(username)
    }
    
    async inputPassword(password){
        await this.passwordField.setValue(password)
    }
    
    async ClickButton(){
        await this.loginButton.click()
    }

    async login(username,password){
       await this.inputUsername(username)
       await this.inputPassword(password)
       await this.ClickButton()
    }

    async validateWrongPassword(errorMessage){
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining(errorMessage)
        )
    }

    async validateOnHalamanLogin() {
        await expect(this.usernameField).toBeExisting();
        await expect(this.passwordField).toBeExisting();
        await expect(this.loginButton).toBeExisting();
    }

    open(){
        return super.open("")
    }

}

export default new LoginPage();
