package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class TestMiniPageTitleHome {

    public void testMiniPageTitleHome(WebDriver driver) throws InterruptedException {
        WebElement helloWorldH1 = driver.findElement(By.id("hello-world"));
        helloWorldH1.click();

        WebElement miniPageTitleH1 = driver.findElement(By.cssSelector("#react-element div:nth-child(3) h1"));
        String miniPageTitleH1Text = miniPageTitleH1.getText();
        Assert.assertEquals(miniPageTitleH1Text, "Home", "Mini page title mismatch for Home");
    }
}
