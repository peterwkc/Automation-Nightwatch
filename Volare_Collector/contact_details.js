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

    'Contact Us Tab' : function (browser) {
        browser
            // Click Contact Us Tab
            .click('//*[@id="DebtorTab"]/li[3]/a')
            .pause(2000)
            
            // Contact Number List
            .click('//*[@id="ContactList"]/div[1]/ul/li[2]/a/div/div')
            .pause(2000)
      },
  
    'Edit Contact' : function (browser) { 
    browser 
        .pause(2000)

        .setValue('//*[@id="editno"]', '457896320')
        .pause(1000)

        .setValue('//*[@id="editname"]', 'Tester')
        .pause(1000)

        .click('//*[@id="contactdetails_4"]/div[1]/button[1]')
    }, 

    'Delete Contact' : function (browser) {
    browser
        .pause(2000)

        .click('/html/body/div[16]/div/div[10]/button[2]')
        .click('/html/body/div[16]/div/div[10]/button[1]')

    },


    'Add Contact Invalid' : function (browser) {
    browser
        .pause(3000)

        // Add Contact button
        .click('//*[@id="contact-tab"]/h5/button')
        .pause(1000)
        
        .click('//*[@id="addContact_Contact"]')
        .setValue('//*[@id="addContact_Contact"]', data.contactNum)
        .pause(1000)

        .click('//*[@id="con1"]')
        .pause(1000)
        
        .click('//*[@id="addContact_Type"]/option[7]')
        .pause(1000)
        
        .setValue('//*[@id="addContact_Desc"]', 'test')
        .pause(2000)

        // Create button
        .click('//*[@id="btnCreateContact"]')
        .pause(2000)

        // OK button
        //.click('/html/body/div[15]/div/div[10]/button[1]')

        .verify.elementNotPresent('/html/body/div[15]/div', 'Add Contact Us Validation Failed')
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

