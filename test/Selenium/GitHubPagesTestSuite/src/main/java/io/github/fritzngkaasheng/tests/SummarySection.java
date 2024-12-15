package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class SummarySection {
    public void findSummarySection(WebDriver driver) throws InterruptedException {
        WebElement summaryTitle = driver.findElement(By.id("summary-title"));
        String summaryTitleText = summaryTitle.getText();
        Assert.assertEquals(summaryTitleText, "SUMMARY", "Summary text mismatch");
    }
}
