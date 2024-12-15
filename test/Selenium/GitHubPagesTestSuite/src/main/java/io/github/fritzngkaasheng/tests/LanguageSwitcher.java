package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LanguageSwitcher {
    public void clickLanguageSwitcherBtn(WebDriver driver) throws InterruptedException {
        WebElement languageSwitcherBtn = driver.findElement(By.id("language-switcher-dropstart"));
        languageSwitcherBtn.click();
    }

    public void switchToChinese(WebDriver driver) throws InterruptedException {
        clickLanguageSwitcherBtn(driver);

        WebElement translateToChineseBtn = driver.findElement(By.cssSelector("#language-switcher > li:nth-child(2) > button"));
        translateToChineseBtn.click();
    }

    public void switchToEnglish(WebDriver driver) throws InterruptedException {
        clickLanguageSwitcherBtn(driver);

        WebElement translateToChineseBtn = driver.findElement(By.cssSelector("#language-switcher > li:nth-child(1) > button"));
        translateToChineseBtn.click();
    }
}
