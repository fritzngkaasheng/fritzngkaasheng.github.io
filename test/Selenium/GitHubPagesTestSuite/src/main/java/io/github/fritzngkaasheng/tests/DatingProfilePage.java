package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class DatingProfilePage {

    public void datingProfilePage(WebDriver driver) throws InterruptedException {
        WebElement contactCard = driver.findElement(By.cssSelector("#contact-card h2"));
        String contactCardText = contactCard.getText();
        Assert.assertEquals(contactCardText, "Fritz", "Text mismatch");

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
