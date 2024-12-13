package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class HomePage {
    public void homePage(WebDriver driver) throws InterruptedException {
        new ComingSoonSection().findComingSoonSection(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);
    }
}
