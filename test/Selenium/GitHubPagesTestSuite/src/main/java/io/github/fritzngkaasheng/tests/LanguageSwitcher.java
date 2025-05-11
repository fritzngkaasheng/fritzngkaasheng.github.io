package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LanguageSwitcher {
    public void clickLanguageSwitcherBtn(WebDriver driver) throws InterruptedException {
        WebElement languageSwitcherBtn = driver.findElement(By.id("language-switcher-dropstart"));
        languageSwitcherBtn.click();
    }

    public void switchToChinese(WebDriver driver) throws InterruptedException {
        clickLanguageSwitcherBtn(driver);

        WebElement translateToChineseBtn = driver.findElement(By.cssSelector("#language-switcher > li:nth-child(2) > button"));
        translateToChineseBtn.click();

        new NavBar().openNavBar(driver);
        // Wait for the translation JSON file to load by checkNaing for a specific element or text
        new WebDriverWait(driver, java.time.Duration.ofSeconds(5))
                .until(ExpectedConditions.textToBePresentInElementLocated(
                        By.cssSelector("[href=\"#/\"]"), // Replace with an element that reflects the translation
                        "首页" // Replace with expected Chinese text
                ));
        new NavBar().closeNavBar(driver);
    }

    public void switchToEnglish(WebDriver driver) throws InterruptedException {
        clickLanguageSwitcherBtn(driver);

        new WebDriverWait(
                driver,
                java.time.Duration.ofMillis(2000)
        ).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#language-switcher > li:nth-child(1) > button")));

        WebElement translateToChineseBtn = driver.findElement(By.cssSelector("#language-switcher > li:nth-child(1) > button"));

        translateToChineseBtn.click();
    }
}
