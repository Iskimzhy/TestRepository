const EC = protractor.ExpectedConditions;
const timing = 10000;
const elements = require('./elements');

module.exports = {
    wait_for_visibility: function(element){
        browser.wait(EC.visibilityOf(element), timing);
    },

    login: async function(email, password){
        let password_field = elements.password_field_locator;
        let submit_button = elements.submit_button_locator;
        let email_field = elements.email_field_locator;

        await email_field.sendKeys(email);
        await password_field.sendKeys(password);
        await submit_button.click();
    },

    open_fresno_5: function(){
        this.wait_for_visibility(elements.fresno_field_5);
        elements.fresno_field_5.click();
    }
}
