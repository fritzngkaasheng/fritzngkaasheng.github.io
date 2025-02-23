package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class HomePage {
    public void homePage(WebDriver driver) throws InterruptedException {
        WebElement nameTitle = driver.findElement(By.id("name"));
        String nameTitleText = nameTitle.getText();
        Assert.assertEquals(nameTitleText, "Fritz Ng", "Name text mismatch");

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
