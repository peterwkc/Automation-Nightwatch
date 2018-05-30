module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
})(require('./nightwatch.json'));

const data = require('./data.js');
  
// ===================================================================================================

module.exports = {

    'Login' : function (browser) {
        browser
            .url(data.volare_collector_url)
            .useXpath()
            .maximizeWindow()
            .pause(3000)

            // Body
            .waitForElementVisible('/html/body', 5000)
            .setValue('//*[@id="inputName"]', data.username)
            .pause(2000)
            .setValue('//*[@id="inputPassword"]', data.password)
            .pause(2000)

            .click('/html/body/div/div/div/form/div/div[5]/div[2]/div/div[2]/button')
            .waitForElementVisible('//*[@id="logout"]', 5000)
            
            .verify.elementPresent('//*[@id="logout"]', 'Login successful')
    }, 


    'All' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="filter_all"]/a')

            .pause(2000)
    }, 

    'Today' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="filter_today"]/a')

            .pause(2000)
    },

    'Next Call Now' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="filter_nextcall-today"]/a')

            .pause(2000)
    },

    'Future With PTP' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="filter_future-ptp"]/a')

            .pause(2000)
    },

    'No Next calls' : function (browser) {
        browser
            .pause(2000)
  
            .click('//*[@id="filter_no-calls"]/a')
  
            .pause(2000)
    },

    'Future w/o PTP' : function (browser) {
        browser
            .pause(2000)
            .click('//*[@id="filter_future-no-ptp"]/a')
            .pause(2000) 
            .click('//*[@id="filter_all"]/a')
            .pause(2000)
    },

    'Logout' : function (browser) {
        browser
            .pause(2000)
        
            .click('//*[@id="logout"]')
            .pause(2000)
        
            .verify.elementPresent('/html/body/div/div/div/form/div/div[5]/div[2]/div/div[2]/button', 'Logout successful')
      },
    
    'Tear Down' : function(browser) {
        browser
            .deleteCookies(function(){}) 
            .end()
    }


};