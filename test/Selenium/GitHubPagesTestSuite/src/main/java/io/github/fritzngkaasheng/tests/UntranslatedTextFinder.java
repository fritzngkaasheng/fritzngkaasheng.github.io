package io.github.fritzngkaasheng.tests;

import com.github.pemistahl.lingua.api.*;
import static com.github.pemistahl.lingua.api.Language.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class UntranslatedTextFinder {
    public void findUntranslatedText(WebDriver driver) throws InterruptedException {
        WebElement languageSwitcherBtn = driver.findElement(By.id("language-switcher-btn"));
        languageSwitcherBtn.click();

        WebElement translateToChineseBtn = driver.findElement(By.cssSelector("#language-switcher > li:nth-child(2) > button"));
        translateToChineseBtn.click();

        WebElement navBarToggler = driver.findElement(By.className("navbar-toggler"));
        navBarToggler.click();

        List<WebElement> textElements = driver.findElements(By.xpath("//*[text()]"));
        List<String> texts = new ArrayList<>();
        for (WebElement element : textElements) {
            String text = element.getText().trim();
            if (!text.isEmpty()) {
                texts.add(text);
            }
        }

        final LanguageDetector detector = LanguageDetectorBuilder.fromLanguages(ENGLISH, CHINESE).build();

        List<String> untranslatedTexts = new ArrayList<>();

        Set<String> ignoredTexts = Set.of(
                "English",
                "中文"
        );

        for (String text : texts) {
            if (ignoredTexts.contains(text)) {
                continue;
            }

            final Language detectedLanguage = detector.detectLanguageOf(text);
            if (!detectedLanguage.equals(CHINESE)) {
                untranslatedTexts.add(text);
            }
        }

        boolean flagUntranslatedTextFound = false;

        if (!untranslatedTexts.isEmpty()) {
            flagUntranslatedTextFound = true;
            System.out.println("Untranslated texts found:");
            for (String untranslatedText : untranslatedTexts) {
                System.out.println("\"" + untranslatedText + "\"");
            }
        } else {
            System.out.println("All texts are translated correctly.");
        }

        Assert.assertFalse(flagUntranslatedTextFound, "Untranslated texts found. Please check the terminal.");

        WebElement closeNavBarBtn = driver.findElement(By.cssSelector("#offcanvasNavbar .btn-close"));
        closeNavBarBtn.click();
    }
}
