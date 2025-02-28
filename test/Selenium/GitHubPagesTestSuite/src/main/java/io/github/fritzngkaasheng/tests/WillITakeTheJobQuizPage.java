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

    private void answer(WebDriver driver, String possibility) throws InterruptedException {
        WebElement quizAnswer = driver.findElement(By.id("quizAnswer"));
        String quizAnswerText = quizAnswer.getText();
        Assert.assertEquals(quizAnswerText, "Possibility of me choosing this job: " + possibility + "%", "Unexpected answer");
    }

    public void willITakeTheJobQuizPage(WebDriver driver) throws InterruptedException {
        translation(driver);

        selectDropdown(driver, "quizOrigin", "sg - Singapore");
        selectDropdown(driver, "quizLocationType", "Remote");

        fillTextBox(driver, "quizSalary", "4000");

        selectDropdown(driver, "quizSalaryCurrency", "SGD");
        selectDropdown(driver, "quizOccupation", "Infocomm technology - Software engineer");
        selectDropdown(driver, "quizTimeSensitivity", "Fully Flexible (e.g. Focus more on results than strict hours)");

        fillTextBox(driver, "quizMonitor", "1");

        answer(driver, "100");

        translation(driver);

        selectDropdown(driver, "quizOrigin", "mm - Myanmar");

        answer(driver, "0");

        translation(driver);
    }
}
