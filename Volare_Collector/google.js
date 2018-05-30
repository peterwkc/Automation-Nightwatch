module.exports = {

  'main': browser => {

    browser.url('http://google.com')
      .waitForElementVisible('body', 1000)

    browser.assert.elementPresent('input[value="Google Search"]')
    // Take one screenshot at the homepage and save it as homepage.png
      .saveScreenshot('./reports/homepage.png')

    browser.setValue('#lst-ib', 'Nightwatch')

    browser.click('input[value="Google Search"]')
      .waitForElementVisible('#resultStats', 1000)
      // Take another screenshot at the search result page and save it as search-result.png
      .saveScreenshot('./reports/search-result.png')

    browser.end()
  }
}

        /*

        .assert.containsText('#main', 'The Night Watch')
        .waitForElementVisible('button[name=btnG]', 1000)
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .saveScreenshot('./reports/homepage.png')
        .assert.containsText('#main', 'Night Watch')
		.keys(browser.Keys.ENTER)

		
		http://nightwatchjs.org/api/#assertions
		
        */