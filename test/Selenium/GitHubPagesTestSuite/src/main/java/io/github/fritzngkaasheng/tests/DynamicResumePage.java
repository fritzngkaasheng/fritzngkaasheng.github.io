package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.WebDriver;

public class DynamicResumePage {
    private void navigateAndVerifyDynamicResumePage(WebDriver driver, String href) throws InterruptedException {
        new Header().navigateTo(driver, href);

        dynamicResumePage(driver);
    }

    public void dynamicResumePages(WebDriver driver) throws InterruptedException {
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/software-engineer");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/integration-engineer");
    }

    public void dynamicResumePage(WebDriver driver) throws InterruptedException {
        new SummarySection().findSummarySection(driver);

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new DownloadDropstart().downloadDropstart(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
