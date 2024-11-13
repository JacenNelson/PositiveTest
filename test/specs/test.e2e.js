import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js'
import VerifyLogin from '../pageobjects/Verification.js'
import LoginFalse from '../pageobjects/loginfalse.js'
import VerifyFalse from '../pageobjects/VerificationFalse.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Login.open()
        await Login.validLogin('standard_user', 'secret_sauce')
        await expect(VerifyLogin.Inventory).toBeExisting()
        await Login.open()
        await Login.validLogin('locked_out_user', 'secret_sauce')
        await expect(VerifyFalse.LoginBtn).toBeExisting()
        await Login.open()
        await Login.validLogin('problem_user', 'secret_sauce')
        await expect(VerifyLogin.Inventory).toBeExisting()
        await Login.open()
        await Login.validLogin('performance_glitch_user', 'secret_sauce')
        await expect(VerifyLogin.Inventory).toBeExisting()
        await Login.open()
        await Login.validLogin('error_user', 'secret_sauce')
        await expect(VerifyLogin.Inventory).toBeExisting()
        await Login.open()
        await Login.validLogin('visual_user', 'secret_sauce')
        await expect(VerifyLogin.Inventory).toBeExisting()
        await LoginFalse.logout()
        await LoginFalse.invalidLogin('standsrd_user', 'srcret_sauce')
        await expect(VerifyFalse.LoginBtn).toBeExisting()
    })
})