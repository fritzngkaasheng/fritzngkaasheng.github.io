package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class NavBar {
    public void waitUntilNavBarClosed(WebDriver driver) throws InterruptedException {
        new WebDriverWait(
                driver,
                java.time.Duration.ofMillis(2000)
        ).until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("#offcanvasNavbar")));
    }

    public void clickResumeDropdown(WebDriver driver) throws InterruptedException {
        WebElement resumeDropdown = driver.findElement(By.id("resume-dropdown"));

        new WebDriverWait(
                driver,
                java.time.Duration.ofMillis(2000)
        ).until(ExpectedConditions.elementToBeClickable(resumeDropdown));

        resumeDropdown.click();
    }

    public void navigateTo(WebDriver driver, String href) throws InterruptedException {
        openNavBar(driver);

        if (href.contains("dynamic-resume")) {
            clickResumeDropdown(driver);
        }

        WebElement nextPageLink = driver.findElement(By.cssSelector("[href=\"" + href + "\"]"));
        nextPageLink.click();

        waitUntilNavBarClosed(driver);
    }

    public void openNavBar(WebDriver driver) throws InterruptedException {
        WebElement navBarToggler = driver.findElement(By.className("navbar-toggler"));
        navBarToggler.click();
    }

    public void closeNavBar(WebDriver driver) throws InterruptedException {
        WebElement closeNavBarBtn = driver.findElement(By.cssSelector("#offcanvasNavbar .btn-close"));
        closeNavBarBtn.click();

        waitUntilNavBarClosed(driver);
    }
}
