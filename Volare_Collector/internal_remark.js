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

    'Internal Remark' : function (browser) {
        browser
            .pause(2000)
            
            .click('//*[@id="DebtorTab"]/li[5]/a')

            .setValue('//*[@id="inttxt"]', 'asdasd asda')

            .click('//*[@id="btnInternalRemark"]')
    },

    'Internal Remark Invalid' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="btnInternalRemark"]')
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

