package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class TestBlogsNavigation {

    public void testBlogsNavigation(WebDriver driver) throws InterruptedException {
        WebElement blogsNavLink = driver.findElement(By.linkText("Blogs"));
        blogsNavLink.click();

        WebElement miniPageTitleH1 = driver.findElement(By.cssSelector("#react-element div:nth-child(3) h1"));
        String miniPageTitleH1Text = miniPageTitleH1.getText();
        Assert.assertEquals(miniPageTitleH1Text, "Blog Articles", "Mini page title mismatch for Blog Articles");
    }
}
