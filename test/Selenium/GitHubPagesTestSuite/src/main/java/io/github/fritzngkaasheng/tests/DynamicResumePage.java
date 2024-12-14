package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.WebDriver;

public class DynamicResumePage {
    public void dynamicResumePage(WebDriver driver) throws InterruptedException {
        new ComingSoonSection().findComingSoonSection(driver);

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new DownloadDropstart().downloadDropstart(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
