package io.github.fritzngkaasheng.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class WillITakeTheJobQuizPage {
    private void selectDropdown(WebDriver driver, String dropdownId, String targetText) throws InterruptedException {
        WebElement originDropdownElement = driver.findElement(By.id(dropdownId));

        Select originDropdown = new Select(originDropdownElement);

        originDropdown.selectByVisibleText(targetText);
    }

    private void fillTextBox(WebDriver driver, String textBoxId, String value) throws InterruptedException {
        WebElement textBox = driver.findElement(By.id(textBoxId));
        textBox.clear();
        textBox.sendKeys(value);
    }

    private void translation(WebDriver driver) throws InterruptedException {
        final LanguageSwitcher languageSwitcher = new LanguageSwitcher();

        languageSwitcher.switchToChinese(driver);

        new UntranslatedTextFinder().findUntranslatedText(driver);

        new Header().header(driver);

        languageSwitcher.switchToEnglish(driver);
    }

    private String getAnswer(WebDriver driver) throws InterruptedException {
        WebElement probability = driver.findElement(By.id("probability"));
        return probability.getText();
    }

    private void checkAnswer(WebDriver driver, String possibility) throws InterruptedException {
        Assert.assertEquals(getAnswer(driver), possibility, "Unexpected answer");
    }

    private void fillOutForm(WebDriver driver, String origin) throws InterruptedException {
        selectDropdown(driver, "quizOrigin", origin);
    }

    private void fillOutForm(
            WebDriver driver,
            String origin,
            String locationType,
            String salary,
            String salaryCurrency
    ) throws InterruptedException {
        fillOutForm(driver, origin);

        selectDropdown(driver, "quizLocationType", locationType);

        fillTextBox(driver, "quizSalary", salary);

        selectDropdown(driver, "quizSalaryCurrency", salaryCurrency);
    }

    private void fillOutForm(
            WebDriver driver,
            String origin,
            String locationType,
            String salary,
            String salaryCurrency,
            String occupation
    ) throws InterruptedException {
        fillOutForm(
                driver,
                origin,
                locationType,
                salary,
                salaryCurrency
        );

        selectDropdown(driver, "quizOccupation", occupation);
    }

    private void fillOutForm(
            WebDriver driver,
            String origin,
            String locationType,
            String salary,
            String salaryCurrency,
            String occupation,
            String timeSensitivity,
            String monitor
    ) throws InterruptedException {
        fillOutForm(
                driver,
                origin,
                locationType,
                salary,
                salaryCurrency,
                occupation
        );

        selectDropdown(driver, "quizTimeSensitivity", timeSensitivity);

        fillTextBox(driver, "quizMonitor", monitor);
    }

    private double getAnswerByFillOutForm(
            WebDriver driver,
            String origin,
            String locationType,
            String salary,
            String salaryCurrency,
            String occupation,
            String timeSensitivity,
            String monitor
    ) throws InterruptedException {
        fillOutForm(
                driver,
                origin,
                locationType,
                salary,
                salaryCurrency,
                occupation,
                timeSensitivity,
                monitor
        );

        return Double.parseDouble(getAnswer(driver));
    }

    private void compareAnswers(double biggerAnswer, double smallerAnswer) {
        Assert.assertTrue(biggerAnswer > smallerAnswer, "Expected first answer to be greater than second answer");
    }

    public void willITakeTheJobQuizPage(WebDriver driver) throws InterruptedException {
        translation(driver);

        fillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        checkAnswer(driver, "100");

        translation(driver);

        fillOutForm(driver, "mm - Myanmar");

        checkAnswer(driver, "0");

        translation(driver);

        Double answer1 = null;
        Double answer2 = null;

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Hybrid",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Hybrid",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "On-site",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        fillOutForm(
                driver,
                "my - Malaysia",
                "On-site",
                "2799",
                "MYR"
        );

        checkAnswer(driver, "0");

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "my - Malaysia",
                "On-site",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "my - Malaysia",
                "On-site",
                "2800",
                "MYR",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        fillOutForm(
                driver,
                "sg - Singapore",
                "On-site",
                "2999",
                "SGD"
        );

        checkAnswer(driver, "0");

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "3000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "3000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        fillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "2799",
                "MYR"
        );

        checkAnswer(driver, "0");

        translation(driver);

        fillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Crime - Illegal Activities"
        );

        checkAnswer(driver, "0");

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Financial services - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Services - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Manufacturing - Other",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Some Flexibility (e.g. As long as I meet deadlines and communicate any schedule changes)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Some Flexibility (e.g. As long as I meet deadlines and communicate any schedule changes)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Strict Punctuality Required (e.g. Punctuality is very important for this role)",
                "1"
        );

        compareAnswers(answer1, answer2);

        translation(driver);

        answer1 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "1"
        );

        answer2 = getAnswerByFillOutForm(
                driver,
                "sg - Singapore",
                "Remote",
                "4000",
                "SGD",
                "Infocomm technology - Software engineer",
                "Fully Flexible (e.g. Focus more on results than strict hours)",
                "2"
        );

        compareAnswers(answer1, answer2);

        translation(driver);
    }
}
