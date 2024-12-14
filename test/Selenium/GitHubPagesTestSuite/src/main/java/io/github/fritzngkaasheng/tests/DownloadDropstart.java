package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DownloadDropstart {
    public void openDownloadDropstart(WebDriver driver) throws InterruptedException {
        toggleDownloadDropstart(driver);
    }

    public void toggleDownloadDropstart(WebDriver driver) throws InterruptedException {
        WebElement downloadDropstart = driver.findElement(By.id("download-dropstart"));
        downloadDropstart.click();
    }
}
