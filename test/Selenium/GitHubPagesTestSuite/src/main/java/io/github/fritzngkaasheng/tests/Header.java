package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.WebDriver;

public class Header {
    public void navigateTo(WebDriver driver, String href) throws InterruptedException {
        new NavBar().navigateTo(driver, href);
    }

    public void header(WebDriver driver) throws InterruptedException {
        final NavBar navBar = new NavBar();
        navBar.openNavBar(driver);
        navBar.clickResumeDropdown(driver);
        new UntranslatedTextFinder().findUntranslatedText(driver);
        navBar.closeNavBar(driver);
    }
}
