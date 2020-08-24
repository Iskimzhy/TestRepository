const { element, by } = require('protractor')

module.exports = {
    email_field_locator: element(by.name('email')),
    password_field_locator: element(by.name('password')),
    submit_button_locator: element(by.buttonText('Log in')),
    organization_name_locator: element(by.css('.sc-pRtcU')),
    map_view_locator: element(by.css('div.full-screen-map')),
    side_bar_list_locator: element(by.css('div.sidebar-list')),
    fresno_field_5: element(by.cssContainingText('.sc-qZtVr', 'Fresno State Demo Field 5')),
    day_rainfall: element(by.css('div.card-details-grid > .pb-1:nth-child(1)')),
    three_days_rainfall: element(by.css('div.card-details-grid > .pb-1:nth-child(2)')),
    pivot_card_direction: element(by.cssContainingText('.flex-column', 'Direction')),
    pivot_card_status: element(by.cssContainingText('.flex-column', 'Fault Status')),
    pivot_device: element.all(by.css('div.col .sidebar-list')),
    status: element.all(by.css('div.equipment-info div :nth-child(2)')),
    equipment_list: element.all(by.css('div.sidebar-list #on_off_monitor')),
    current_level_block: element(by.css('div.linear-block')),
    pond_devices_list: element.all(by.css('.icon-container #float_icon')),
}
