const {By, Builder, until} = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://yahoo.com");

  setInterval(function(){
    driver.quit();
  }, 10000)
}

module.exports = test_case;