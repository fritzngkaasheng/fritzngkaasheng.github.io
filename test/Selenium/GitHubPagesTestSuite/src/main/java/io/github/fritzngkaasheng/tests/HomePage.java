package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.*;
import org.testng.Assert;

public class HomePage {
    public void homePage(WebDriver driver) throws InterruptedException {
        WebElement nameTitle = driver.findElement(By.id("name"));
        String nameTitleText = nameTitle.getText();
        Assert.assertEquals(nameTitleText, "Fritz Ng", "Name text mismatch");

        WebElement linkedInBtn = driver.findElement(By.cssSelector(".btn-linkedin"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", linkedInBtn);
        linkedInBtn.click();

        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertTrue(alertText.contains("Do you really want to leave this website and go to "), "Alert text does not contain the expected phrase");
        alert.dismiss();

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
