package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class ComingSoonSection {
    public void findComingSoonSection(WebDriver driver) throws InterruptedException {
        WebElement comingSoonTitle = driver.findElement(By.id("coming-soon-title"));
        String comingSoonTitleText = comingSoonTitle.getText();
        Assert.assertEquals(comingSoonTitleText, "Coming Soon", "Coming Soon text mismatch");
    }
}
