const { browser } = require("protractor");
const helpers = require('../helper-files/helpers');
const variables = require('../helper-files/variables');
const elements = require('../helper-files/elements');

describe('Fresno 5 test', function() {

    beforeEach(async function() {
        browser.get(variables.url);
        await helpers.login(variables.username, variables.password);
        await helpers.open_fresno_5();
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });

    it('24 hours rainfall is displayed', async function(){
        await helpers.wait_for_visibility(elements.day_rainfall);

        expect(elements.day_rainfall.isDisplayed()).toBe(true);
        expect(elements.three_days_rainfall.isDisplayed()).toBe(true);
    });

    it('Direction and fault status are displayed', async function(){
        await helpers.wait_for_visibility(elements.pivot_card_direction);

        expect(elements.pivot_card_direction.isDisplayed()).toBe(true);
        expect(elements.pivot_card_status.isDisplayed()).toBe(true);
    });

    it('Only one device in Pivot card is displayed', async function(){
        await helpers.wait_for_visibility(elements.pivot_card_direction);

        expect(elements.pivot_device.count()).toBe(1);
    });

    it('Status and last status update is displayed on the Equipment card', async function(){
        let south_pump_status = elements.status.get(0);
        let south_pump_last_updated = elements.status.get(1);
        let north_pump_status = elements.status.get(2);
        let north_pump_last_updated = elements.status.get(3);
        await helpers.wait_for_visibility(south_pump_status);

        expect(south_pump_status.isDisplayed()).toBe(true);
        expect(south_pump_last_updated.isDisplayed()).toBe(true);
        expect(north_pump_status.isDisplayed()).toBe(true);
        expect(north_pump_last_updated.isDisplayed()).toBe(true);
    });

    it('Two device rows on the Equipment card is displayed', async function(){
        await helpers.wait_for_visibility(elements.pivot_card_status);

        expect(elements.equipment_list.count()).toBe(2);
    });

    it('Current level on the Ponds card is displayed', async function(){
        await helpers.wait_for_visibility(elements.current_level_block)

        expect(elements.current_level_block.isDisplayed()).toBe(true);
    });

    it('Only one device in Ponds card is displayed', async function(){
        await helpers.wait_for_visibility(elements.pivot_card_status);

        expect(elements.pond_devices_list.count()).toBe(1);
    });

})
