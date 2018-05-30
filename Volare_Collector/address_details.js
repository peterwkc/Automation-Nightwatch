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

    'Address Detail' : function (browser) {
        browser
            .pause(2000)

            .click('//*[@id="DebtorTab"]/li[4]/a')

            .click('//*[@id="AddressList"]/div[1]/ul/li/a/div/div[2]/p[1]')

            .expect.element('//*[@id="addressdetails_1"]/div[1]/div').text.to.contain('Address Details')
    },

    'Delete Address' : function (browser) {
        browser
            .pause(2000)
            
            .click('//*[@id="AddressList"]/div[1]/ul/li[2]/a/div/div[2]')
            .click('  //*[@id="deleteAddressContactbtn"]')
            .click('/html/body/div[14]/div/div[10]/button[1]')
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