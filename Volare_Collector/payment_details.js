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

    'Debtor Page' : function (browser) {
        browser
          .pause(2000) 
  
          .moveToElement('//*[@id="CallListGridView_DXDataRow0"]/td[2]', 2, 2)
          .doubleClick()
          .pause(3000)
    },

    'Payment Tab' : function (browser) {
        browser
          // Click Payment Tab
          .click('//*[@id="DebtorTab"]/li[2]/a')
          .pause(4000)
    },

    'Finance List' : function (browser) {
        browser
          .pause(2000)
          .expect.element('//*[@id="finance-tab"]/h5').text.to.contain('FINANCE DETAILS')
    },

    'Installment List' : function (browser) {
        browser
          .click('//*[@id="installment"]/a')
          .pause(3000)

          .expect.element('//*[@id="pnlipdetail"]/div[1]/div/h5').text.to.contain('Note')
    },

    'Breakdown List' : function (browser) {
        browser
          .click('//*[@id="payment"]/div/div[1]/ul/li[3]/a')
          .pause(3000)  

          .expect.element('//*[@id="BreakdownTable"]/thead/tr/th[2]/b').text.to.contain('Amount')
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