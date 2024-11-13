import { $ } from '@wdio/globals'
import Site from './Website.js';

class VerifyFalse extends Site {
    get LoginBtn () {
        return $('input[class="submit-button btn_action"]');
    }
}

export default new VerifyFalse();