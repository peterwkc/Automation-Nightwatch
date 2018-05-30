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

    'Debtor Page' : function (browser) {
      browser
        .pause(2000) 

        .moveToElement('//*[@id="CallListGridView_DXDataRow0"]/td[2]', 2, 2)
        .doubleClick()
        .pause(3000)
    },

    'Debtor Details' : function (browser) {
      browser
        .pause(2000)
        .expect.element('//*[@id="details"]/h5[1]').text.to.contain('Debtor Details')
    },

    'Case Details' : function (browser) {
      browser
        .pause(2000)
        .expect.element('//*[@id="details"]/h5[2]').text.to.contain('Case Details')
    },

    'Collector History' : function (browser) {
      browser
        // Click Collector History
        .click('//*[@id="debtorTab"]/div[1]/div/div[2]/button[1]')
        .pause(1000)
        .click('//*[@id="volModal"]/div/div/div/div[1]/button')
    }, 
  
    /*'Notes' : function (browser) {
      browser
        // Click Notes
        .click('//*[@id="debtorTab"]/div[1]/div/div[2]/button[2]')
        .setValue('//*[@id="PNotes"]', 'note note 1')
        .click('//*[@id="volModal"]/div/div/div/div[3]/button')
        .pause(2000)
    },*/

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




