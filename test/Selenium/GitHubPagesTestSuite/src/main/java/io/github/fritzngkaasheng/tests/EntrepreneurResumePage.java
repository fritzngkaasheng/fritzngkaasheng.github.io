package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class EntrepreneurResumePage {

    public void entrepreneurResumePage(WebDriver driver) throws InterruptedException {
        new SummarySection().findSummarySection(driver);

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new DownloadDropstart().downloadDropstart(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
