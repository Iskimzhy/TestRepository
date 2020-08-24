const { browser } = require("protractor");
const helpers = require('../helper-files/helpers');
const variables = require('../helper-files/variables');
const elements = require('../helper-files/elements')

describe('Main page test', function() {

    beforeEach(async function() {
        browser.get(variables.url);
        await helpers.login(variables.username, variables.password);
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });


    it('Organization name is correct', async function(){
        let organization_name = elements.organization_name_locator;
        helpers.wait_for_visibility(organization_name);

        expect(organization_name.getText()).toEqual(variables.organization);
    });

    it('Map view is shown', async function(){
        let map_view = elements.map_view_locator;        
        helpers.wait_for_visibility(map_view);

        expect(map_view.isDisplayed()).toBe(true); 
    });

    it('Side bar is shown', async function(){
        let side_bar_list = elements.side_bar_list_locator;
        helpers.wait_for_visibility(side_bar_list);

        expect(side_bar_list.isDisplayed()).toBe(true);
    });
})
