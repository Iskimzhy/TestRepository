exports.config = {
	framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*spec.js'],
    
    capabilities: {
		browserName: 'chrome'
    },
        
    onPrepare: async function () {
    	browser.manage().window().maximize();
    	browser.manage().timeouts().implicitlyWait(5000);
    	await browser.waitForAngularEnabled(false);
		}
	}
