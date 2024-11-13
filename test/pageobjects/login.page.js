import { $ } from '@wdio/globals'
import Site from './Website.js';

class Login extends Site {
    get UsernameEnter () {
        return $('input[placeholder="Username"]');
    }

    get PasswordEnter () {
        return $('input[placeholder="Password"]');
    }

    get loginButton () {
        return $('input[class="submit-button btn_action"]');
    }

    async validLogin (username, password) {
        await this.UsernameEnter.setValue(username);
        await this.PasswordEnter.setValue(password);
        await this.loginButton.click();
    }

    open () {
        return super.open('login');
    }
}

export default new Login();