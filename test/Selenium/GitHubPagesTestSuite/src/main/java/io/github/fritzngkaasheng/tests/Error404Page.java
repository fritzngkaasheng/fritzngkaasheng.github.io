package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class Error404Page {
    public void error404Page(WebDriver driver) throws InterruptedException {
        WebElement error404Title = driver.findElement(By.id("error-404-title"));
        String error404TitleText = error404Title.getText();
        Assert.assertEquals(error404TitleText, "404 Page not found", "404 text mismatch");

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
