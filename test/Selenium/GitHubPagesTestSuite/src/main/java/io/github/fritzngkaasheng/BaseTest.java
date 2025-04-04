package io.github.fritzngkaasheng;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.fritzngkaasheng.tests.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public abstract class BaseTest {
    protected WebDriver driver;
    private String browserName = "";

    private String url = "https://localhost";

    public static boolean checkAllPagesTranslation = false;

    @BeforeTest
    @Parameters("browser")
    public void setUp(String browser) throws InterruptedException {
        if (browser.equalsIgnoreCase("chrome")) {
            WebDriverManager.chromedriver().setup();
            ChromeOptions options = new ChromeOptions();
            options.setAcceptInsecureCerts(true);
            driver = new ChromeDriver(options);
            browserName = "Chrome";
        } else if (browser.equalsIgnoreCase("firefox")) {
            WebDriverManager.firefoxdriver().setup();
            FirefoxOptions options = new FirefoxOptions();
            options.setAcceptInsecureCerts(true);
            driver = new FirefoxDriver(options);
            browserName = "Firefox";
        } else if (browser.equalsIgnoreCase("edge")) {
            WebDriverManager.edgedriver().setup();
            EdgeOptions options = new EdgeOptions();
            options.setAcceptInsecureCerts(true);
            driver = new EdgeDriver(options);
            browserName = "Edge";
        } else {
            throw new IllegalArgumentException("Invalid browser type: " + browser);
        }
        driver.get(url);
        driver.manage().window().maximize();

        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(500));

        new UntranslatedTextFinder().addAppVersionToIgnoredTextsList(driver);
    }

    @Test(priority = 1)
    public void homePage() throws InterruptedException {
        new HomePage().homePage(driver);
    }

    @Test(priority = 2)
    public void error404Page() throws InterruptedException {
        driver.get(url + "#/summon/404/error");

        new Error404Page().error404Page(driver);
    }

    @Test(priority = 3)
    public void dynamicResumePage() throws InterruptedException {
        new DynamicResumePage().dynamicResumePages(driver, url);
    }

    @Test(priority = 4)
    public void willITakeTheJobQuizPage() throws InterruptedException {
        new Header().navigateTo(driver, "#/will-i-take-the-job-quiz");

        new WillITakeTheJobQuizPage().willITakeTheJobQuizPage(driver);
    }

    @Test(priority = 5)
    public void entrepreneurResumePage() throws InterruptedException {
        new Header().navigateTo(driver, "#/entrepreneur-resume");

        new EntrepreneurResumePage().entrepreneurResumePage(driver);
    }

    @Test(priority = 6)
    public void academicCVPage() throws InterruptedException {
        new Header().navigateTo(driver, "#/academic-cv");

        new AcademicCVPage().academicCVPage(driver);
    }

    @Test(priority = 7)
    public void datingProfilePage() throws InterruptedException {
        new Header().navigateTo(driver, "#/dating-profile");

        new DatingProfilePage().datingProfilePage(driver);
    }

    @AfterTest
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
