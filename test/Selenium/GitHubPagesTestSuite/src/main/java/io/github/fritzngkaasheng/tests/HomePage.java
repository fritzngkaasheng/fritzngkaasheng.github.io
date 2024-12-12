package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class HomePage {
    public void homePage(WebDriver driver) throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(500));

        WebElement comingSoonTitle = driver.findElement(By.id("coming-soon-title"));
        String comingSoonTitleText = comingSoonTitle.getText();
        Assert.assertEquals(comingSoonTitleText, "Coming Soon", "Coming Soon text mismatch");
    }
}
