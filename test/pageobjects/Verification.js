import { $ } from '@wdio/globals'
import Site from './Website.js';

class VerifyLogin extends Site {
    get Inventory () {
        return $('#inventory_container');
    }
}

export default new VerifyLogin();
