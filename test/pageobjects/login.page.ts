import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#fxb_1802c92d-1497-48c1-839d-a005c6775e32_Fields_5f485922-2852-4d75-8d8d-a16302980fd3__Value');
    }

    public get inputPassword () {
        return $('#fxb_1802c92d-1497-48c1-839d-a005c6775e32_Fields_50d624a8-3c27-4a0f-9fc0-78e103227d79__Value');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
      
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
