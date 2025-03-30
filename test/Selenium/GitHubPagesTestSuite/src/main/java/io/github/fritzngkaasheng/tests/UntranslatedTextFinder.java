package io.github.fritzngkaasheng.tests;

import com.github.pemistahl.lingua.api.*;
import static com.github.pemistahl.lingua.api.Language.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

public class UntranslatedTextFinder {
    private static Set<String> ignoredTexts = new HashSet<>(Set.of(
        "English",
        "中文",
        "in/fritzngkaasheng",
        "B2BE",
        "Ideaone System Solutions Sdn. Bhd.",
        "AWS Cloud Quest: Cloud Practitioner",
        "Lightning Experience Reports & Dashboards Specialist",
        "Trailhead • 2023",
        "freeCodeCamp • 2024",
        "LetsDefend • 2024",
        "IBM • 2024",
        "IBM MQ on AWS Cloud Developer Essentials（AWS 云上的 IBM MQ 开发人员要点）",
        "freeCodeCamp",
        "\"industryKnowledge\"",
        "\"toolsTechnologies\"",
        "MYR",
        "SGD",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "FOK",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KID",
        "KMF",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SHP",
        "SLE",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL",
        "Exchange Rate API 的汇率",
        "Fritz",
        "172cm",
        "Youtube",
        "A型",
        "REST API",
        "Git",
        "Laravel",
        "CodeIgniter",
        "SQL",
        "JavaScript",
        "jQuery",
        "CSS",
        "HTML",
        "Java",
        ".NET Framework",
        "XCG"
    ));

    // For more details, refer: https://stackoverflow.com/questions/1102891/how-to-check-if-a-string-is-numeric-in-java
    public static boolean isNumeric(String str) {
        return str.matches("-?\\d+(\\.\\d+)?");  //match a number with optional '-' and decimal.
    }

    public void addAppVersionToIgnoredTextsList(WebDriver driver) throws InterruptedException {
        new NavBar().openNavBar(driver);

        WebElement appVersion = new WebDriverWait(
                driver,
                java.time.Duration.ofMillis(2000)
        ).until(ExpectedConditions.visibilityOfElementLocated(By.id("app-version")));

        String appVersionText = appVersion.getText();

        ignoredTexts.add(appVersionText);

        new NavBar().closeNavBar(driver);
    }

    public void findUntranslatedText(WebDriver driver) throws InterruptedException {
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

        for (String text : texts) {
            if (ignoredTexts.contains(text)) {
                continue;
            }

            if (isNumeric(text)) {
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
        }

        Assert.assertFalse(flagUntranslatedTextFound, "Untranslated texts found. Please check the terminal.");
    }
}
