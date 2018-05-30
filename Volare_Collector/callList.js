module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));

const data = require('./data.js');

// =====================================================================================================================================================

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

    'Navigate List' : function (browser) {
      browser
        .pause(5000)

        .click('//*[@id="NextDebtor"]')
        .pause(1000)
        .click('//*[@id="PrevDebtor"]')
        .pause(1000)
        .click('//*[@id="NextDebtor"]')
        .pause(1000)
        .click('//*[@id="NextDebtor"]')
        .pause(1000)
        .click('//*[@id="NextDebtor"]')
        .pause(1000)
        .click('//*[@id="PrevDebtor"]')
        .pause(1000)
    },
  
    'No Next calls' : function (browser) {
      browser
        .pause(2000)

        .click('//*[@id="filter_no-calls"]/a')

        .pause(2000)
    },

    'All' : function (browser) {
      browser
        .pause(2000)

        .click('//*[@id="filter_all"]/a')

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

    'Inventory Filter' : function (browser) {
      browser
        .pause(3000)

        .setValue('//*[@id="CallListGridView_DXFREditorcol1_I"]', 'DEBBIE A/P EKU')
        .keys(browser.Keys.ENTER)
        .pause(2000)
 
    },

    'Inventory Filter Restore' : function (browser) {
      browser
        .pause(1000)

        .click('//*[@id="CallListGridView_DXFREditorcol1_I"]')
        .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE)
        .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE)
        .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE)
        .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) 
        .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) .keys(browser.Keys.BACK_SPACE) 
        .keys(browser.Keys.ENTER)

        .pause(2000)
    },

    'Today Invalid' : function (browser) {
      browser
        .pause(2000)
        .expect.element('//*[@id="filter_today"]/a').text.to.contain("Today0")
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

