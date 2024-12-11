package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class TestHelloWorld {

    public void testHelloWorld(WebDriver driver) throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(500));

        WebElement helloWorldH1 = driver.findElement(By.id("hello-world"));
        String helloWorldH1Text = helloWorldH1.getText();
        Assert.assertEquals(helloWorldH1Text, "Hello World", "Hello World text mismatch");
    }
}
