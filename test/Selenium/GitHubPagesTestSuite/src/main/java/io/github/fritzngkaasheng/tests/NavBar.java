package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class NavBar {
    public void openNavBar(WebDriver driver) throws InterruptedException {
        WebElement navBarToggler = driver.findElement(By.className("navbar-toggler"));
        navBarToggler.click();
    }

    public void closeNavBar(WebDriver driver) throws InterruptedException {
        WebElement closeNavBarBtn = driver.findElement(By.cssSelector("#offcanvasNavbar .btn-close"));
        closeNavBarBtn.click();
    }
}
