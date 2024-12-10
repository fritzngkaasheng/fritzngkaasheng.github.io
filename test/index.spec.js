const {By, Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); // Import Chrome-specific options
const assert = require("assert");

describe('Main GitHub Pages script', function () {
  let driver;

  before(async function () {
    const options = new chrome.Options(); // Create an instance of Chrome options
    options.setAcceptInsecureCerts(true); // Set the desired option

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  it('Main GitHub Pages Selenium script with mocha', async function () {
    await driver.get('https://localhost');

    await driver.manage().setTimeouts({implicit: 500});

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
  });

  after(async () => await driver.quit());
});
