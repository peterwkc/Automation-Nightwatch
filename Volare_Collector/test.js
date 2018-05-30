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

    'Make Call' : function (browser) {
      browser
        .pause(2000)

        .click('//*[@id="activity_makecall"]')
        .pause(1000)
        .click('//*[@id="actionButton"]/div[1]/div/a[2]')
        .pause(1000)

        .click('//*[@id="SPStatus"]/option[2]')
        .pause(1000)

        .click('//*[@id="SPContactability"]/option[4]')
        .pause(1000)

        .click('//*[@id="SPRemarks"]')
        .setValue('//*[@id="SPRemarks"]', 'asdasd')
        .pause(1000)

        .click('//*[@id="chat_window_1"]/div/div[1]/div/div[2]/button')
        .pause(1000)

        .click('//*[@id="FUPSubmitButton"]')

    },


    'Send SMS' : function (browser) {
      browser 
        .pause(4000)

        .click('//*[@id="btnGroupDrop2"]/a')
        .pause(2000)

        .click('//*[@id="actionButton"]/div[3]/div/a[2]')
        .pause(2000)

        .click('//*[@id="SMSTemplate"]/option[2]')
        .pause(2000)

        .click('//*[@id="btnSendSMS"]')
        .pause(2000)

        .click('/html/body/div[13]/div/div[10]/button[1]')
    }, 

    'Send SMS Invalid' : function (browser) {
      browser
        .pause(2000)
         
        .click('//*[@id="btnGroupDrop2"]/a')
        .pause(2000)

        .click('//*[@id="actionButton"]/div[3]/div/a[2]')
        .pause(2000)

        .click('//*[@id="btnSendSMS"]')
        .pause(2000)

        .click('//*[@id="chat_window_1"]/div/div/div[1]/div/div[2]/button')

        .verify.elementPresent('//*[@id="btnGroupDrop22"]/a')

    },


    'Mail and Report' : function (browser) {
      browser
        .pause(2000)
        
        .click('//*[@id="actionButton"]/button[1]/a')
        .pause(1000)

        .click('//*[@id="form0"]/table/tbody/tr[1]/td/div/label[2]/input')
        .pause(1000)

        .click('//*[@id="dllReportEmail"]/option[2]')
        .pause(1000)

        .click('//*[@id="form0"]/button')
    }, 

/*
    'Follow Up Remark Invalid' : function (browser) {
      browser
        .pause(2000)

        .click('//*[@id="actionButton"]/button[2]/a')
        .pause(20000)

        .click('//*[@id="FUcontact"]/option[4]')
        .pause(1000)

        .click('//*[@id="SPStatus"]/option[8]')
        .pause(1000)

        .click('//*[@id="SPContactability"]/option[4]')
        .pause(1000)

        .click('//*[@id="FUPSubmitButton"]')
    },
*/

  

    'Address Tab' : function (browser) {
      browser 
        // Click Address Tab
        .click('//*[@id="DebtorTab"]/li[4]/a')
        .pause(2000)
    },  
    



    
  };
