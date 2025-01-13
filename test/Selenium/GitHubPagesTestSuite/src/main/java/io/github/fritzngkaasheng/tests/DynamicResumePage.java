package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class DynamicResumePage {
    private final int jsScrollDuration = 1000;

    private void navigateAndVerifyDynamicResumePage(WebDriver driver, String href) throws InterruptedException {
        new Header().navigateTo(driver, href);

        dynamicResumePage(driver);
    }

    private void goToAndVerifyDynamicResumePage(WebDriver driver, String url) throws InterruptedException {
        driver.get(url);

        dynamicResumePage(driver);
    }

    private void goToAndVerifyDynamicResumeErrorPage(WebDriver driver, String errorMsg, String url) throws InterruptedException {
        driver.get(url);

        if (!driver.getPageSource().contains(errorMsg)) {
            throw new AssertionError("Error message not found: " + errorMsg);
        }

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }

    private void checkCheckbox(WebDriver driver, String elemId) throws InterruptedException {
        WebElement checkBox = driver.findElement(By.id(elemId));

        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", checkBox);

        Thread.sleep(java.time.Duration.ofMillis(jsScrollDuration));

        boolean isCheckedBeforeToggle = checkBox.isSelected();

        checkBox.click();

        new SummarySection().findSummarySection(driver);

        boolean isCheckedAfterToggle = checkBox.isSelected();
        Assert.assertNotEquals(isCheckedBeforeToggle, isCheckedAfterToggle, elemId + " is not working");
    }

    public void dynamicResumePages(WebDriver driver, String url) throws InterruptedException {
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/all-details");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/software-engineer");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/integration-engineer");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/cyber-security-analyst");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/system-analyst");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/technical-support-engineer");
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/i-t-consultant");
        goToAndVerifyDynamicResumePage(driver, url + "#/dynamic-resume/c");
        goToAndVerifyDynamicResumePage(driver, url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D");

        // Invalid JSON filter
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Invalid JSON filter",
                url + "#/dynamic-resume/c/invalidjson"
        );

        // Incomplete mandatory JSON values
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 experience",
                url + "#/dynamic-resume/c/%7B%22exprience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 experience",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intrn%22%2C%22webDevloper%22%2C%22intrnii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 education",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22educaton%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 education",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diplma%22%2C%22bachelorDegree%22%2C%22bachelorDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 certification",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certificatons%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 certification",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightingExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitionr%22%2C%22frontEndDevlopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 skill",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22sklls%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 skill",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnwledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "This skill group is empty:",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevlopmentLifeCycleSDLc%22%2C%22logAnlysis%22%2C%22incidentHanding%22%2C%22threatAnlysis%22%2C%22webDevlopment%22%2C%22softwareDevlopment%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "This skill group is empty:",
                url + "#/dynamic-resume/c/%7B%22experience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22education%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certifications%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22skills%22%3A%7B%22toolsTechnologies%22%3A%5B%22%22%5D%7D%7D"
        );
        goToAndVerifyDynamicResumeErrorPage(
                driver,
                "Please provide at least 1 experience",
                url + "#/dynamic-resume/c/%7B%22exprience%22%3A%5B%22intern%22%2C%22webDeveloper%22%2C%22internii%22%5D%2C%22educaton%22%3A%5B%22diploma%22%2C%22bachelorsDegree%22%2C%22bachelorsDegreeii%22%5D%2C%22certificatons%22%3A%5B%22lightningExperienceReportsDashboardsSpecialist%22%2C%22aWSCloudQuestCloudPractitioner%22%2C%22frontEndDevelopmentLibraries%22%5D%2C%22coursework%22%3A%5B%22letsDefendFreeCourses%22%5D%2C%22involvement%22%3A%5B%22committeeMemberOfAPUMerdekaFiesta201viii%22%2C%22participatedInSolarEnergyCarCompetition201viii%22%2C%22participatedInFusionexDataChallenge201ix%22%5D%2C%22sklls%22%3A%7B%22industryKnowledge%22%3A%5B%22softwareDevelopmentLifeCycleSDLc%22%2C%22logAnalysis%22%2C%22incidentHandling%22%2C%22threatAnalysis%22%2C%22webDevelopment%22%2C%22softwareDevelopment%22%5D%2C%22toolsTechnologies%22%3A%5B%22contentManagementSystemsCMs%22%2C%22rESTAPIs%22%2C%22git%22%2C%22laravel%22%2C%22codeIgniter%22%2C%22php%22%2C%22sql%22%2C%22javaScript%22%2C%22jQuery%22%2C%22cascadingStyleSheetsCSs%22%2C%22html%22%2C%22java%22%2C%22nETFramwork%22%2C%22microsoftExcel%22%5D%7D%7D"
        );

        // Resume editor
        navigateAndVerifyDynamicResumePage(driver, "#/dynamic-resume/c/edit");

        WebElement editResumeBtn = driver.findElement(By.id("edit-resume-btn"));
        editResumeBtn.click();

        dynamicResumePage(driver, false);

        checkCheckbox(driver, "experience-internii");
        checkCheckbox(driver, "education-bachelorsDegree");
        checkCheckbox(driver, "certification-frontEndDevelopmentLibraries");
        checkCheckbox(driver, "coursework-letsDefendFreeCourses");
        checkCheckbox(driver, "involvement-participatedInFusionexDataChallenge201ix");
        checkCheckbox(driver, "skill-group-industryKnowledge");

        WebElement doneBtn = driver.findElement(By.id("done-btn"));

        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", doneBtn);

        Thread.sleep(java.time.Duration.ofMillis(jsScrollDuration));

        doneBtn.click();

        dynamicResumePage(driver, true);
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

    public void dynamicResumePage(WebDriver driver, Boolean flagCheckDownloadBtns) throws InterruptedException {
        new SummarySection().findSummarySection(driver);

        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        if (flagCheckDownloadBtns) {
            new DownloadDropstart().downloadDropstart(driver);
        }

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }
}
