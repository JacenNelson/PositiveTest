import { $ } from '@wdio/globals'
import Site from './Website.js';

class LoginFalse extends Site {
    get UsernameEnter () {
        return $('input[placeholder="Username"]');
    }

    get PasswordEnter () {
        return $('input[placeholder="Password"]');
    }

    get loginButton () {
        return $('input[class="submit-button btn_action"]');
    }
    get hamburgerMenu () {
        return $('button[id="react-burger-menu-btn"]')
    }
    get signoutButton () {
        return $('a[id="logout_sidebar_link"]')
    }
    async logout () {
        await this.hamburgerMenu.click();
        await this.signoutButton.click();
    }
    async invalidLogin (username, password) {
        await this.UsernameEnter.setValue(username);
        await this.UsernameEnter.setValue(password);
        await this.loginButton.click();
    }
    }
    export default new LoginFalse()
