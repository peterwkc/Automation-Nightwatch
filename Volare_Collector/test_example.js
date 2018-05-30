module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
})(require('./nightwatch.json'));

 var data = require('./data.js') 
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

            .refresh()
            
            //.expect.element('//*[@id="SearchListGridView_DXDataRow0"]/td[4]').text.to.contain('789012345678')

            

    }, 

    


    'Logout' : function (browser) {
        browser
            .pause(7000)
        
            //.click('//*[@id="logout"]')
            .pause(2000)
        
            .verify.elementPresent('/html/body/div/div/div/form/div/div[5]/div[2]/div/div[2]/button', 'Logout successful')
    },
    
    /*'Tear Down' : function(browser) {
        browser
            .deleteCookies(function(){}) 
            .end()
    }*/


};