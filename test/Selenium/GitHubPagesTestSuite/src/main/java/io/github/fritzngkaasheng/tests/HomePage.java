package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.WebDriver;

public class HomePage {
    public void homePage(WebDriver driver) throws InterruptedException {
        new ComingSoonSection().findComingSoonSection(driver);

        new LanguageSwitcher().switchToChinese(driver);

        final DownloadDropstart downloadButtons = new DownloadDropstart();
        downloadButtons.openDownloadDropstart(driver);
        new UntranslatedTextFinder().findUntranslatedText(driver);
        downloadButtons.toggleDownloadDropstart(driver);

        final NavBar navBar = new NavBar();
        navBar.openNavBar(driver);
        new UntranslatedTextFinder().findUntranslatedText(driver);
        navBar.closeNavBar(driver);
    }
}
