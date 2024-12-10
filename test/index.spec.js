const { By, Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');
const assert = require("assert");

async function runTests(driver) {
  await driver.get('https://localhost');
  await driver.manage().setTimeouts({ implicit: 500 });

  let helloWorldH1;
  let helloWorldH1Text;
  let miniPageTitleH1;
  let miniPageTitleH1Text;
  let blogsNavLink;

  // Find Hello World
  helloWorldH1 = await driver.findElement(By.id('hello-world'));
  helloWorldH1Text = await helloWorldH1.getText();
  assert.equal("Hello World", helloWorldH1Text);

  // Find the mini page title "Home"
  await helloWorldH1.click();
  miniPageTitleH1 = await driver.findElement(By.css('#react-element div:nth-child(3) h1'));
  miniPageTitleH1Text = await miniPageTitleH1.getText();
  assert.equal("Home", miniPageTitleH1Text);

  // Click on the link "Blogs"
  blogsNavLink = await driver.findElement(By.linkText('Blogs'));
  await blogsNavLink.click();
  miniPageTitleH1 = await driver.findElement(By.css('#react-element div:nth-child(3) h1'));
  miniPageTitleH1Text = await miniPageTitleH1.getText();
  assert.equal("Blog Articles", miniPageTitleH1Text);

  // Refresh the page and find the mini page title "Blog Articles"
  await driver.navigate().refresh();
  helloWorldH1 = await driver.findElement(By.id('hello-world'));
  await helloWorldH1.click();
  miniPageTitleH1 = await driver.findElement(By.css('#react-element div:nth-child(3) h1'));
  miniPageTitleH1Text = await miniPageTitleH1.getText();
  assert.equal("Blog Articles", miniPageTitleH1Text);
}

// Test for Chrome
describe('Main GitHub Pages script for Chrome', function () {
  let driver;

  before(async function () {
    const options = new chrome.Options();
    options.setAcceptInsecureCerts(true);
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  it('Main GitHub Pages Selenium script with Mocha (Chrome)', async function () {
    await runTests(driver);
  });

  after(async () => await driver.quit());
});

// Test for Firefox
describe('Main GitHub Pages script for Firefox', function () {
  let driver;

  before(async function () {
    const options = new firefox.Options();
    options.setAcceptInsecureCerts(true);
    driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  });

  it('Main GitHub Pages Selenium script with Mocha (Firefox)', async function () {
    await runTests(driver);
  });

  after(async () => await driver.quit());
});

// Test for Edge
describe('Main GitHub Pages script for Edge', function () {
  let driver;

  before(async function () {
    const options = new edge.Options();
    options.setAcceptInsecureCerts(true);
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(options)
      .build();
  });

  it('Main GitHub Pages Selenium script with Mocha (Edge)', async function () {
    await runTests(driver);
  });

  after(async () => await driver.quit());
});
