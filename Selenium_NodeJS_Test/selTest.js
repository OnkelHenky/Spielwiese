/**
 * Created by WebStorm.
 * User: Henka
 * Date: 11.05.14
 */


var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('Spiegel');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title === 'Spiegel - Google Search';
  });
}, 1000);

driver.quit();