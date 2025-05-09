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
import org.testng.annotations.*;

public class BaseTest {
    private static ThreadLocal<WebDriver> driverThreadLocal = new ThreadLocal<>();

    private String browserName = "";

    private String url = "https://localhost";

    public static boolean checkAllPagesTranslation = false;

    public void setUp(String browser) throws InterruptedException {
        WebDriver driver = driverThreadLocal.get();
        if (driver == null) {
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
            driverThreadLocal.set(driver);
        }
        driver.get(url);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(500));
        new UntranslatedTextFinder().addAppVersionToIgnoredTextsList(driver);
    }

    public WebDriver getDriver() {
        return driverThreadLocal.get();
    }

    @DataProvider(name = "browserProvider", parallel = true)
    public Object[][] browserProvider() {
        return new Object[][]{
                {"chrome"},
                {"firefox"},
                {"edge"}
        };
    }

    @Test(priority = 1, dataProvider = "browserProvider")
    public void homePage(String browser) throws InterruptedException {
        setUp(browser);
        new HomePage().homePage(getDriver());
    }

    @Test(priority = 2, dataProvider = "browserProvider")
    public void error404Page(String browser) throws InterruptedException {
        setUp(browser);

        getDriver().get(url + "#/summon/404/error");

        new Error404Page().error404Page(getDriver());
    }

    @Test(priority = 3, dataProvider = "browserProvider")
    public void dynamicResumePage(String browser) throws InterruptedException {
        setUp(browser);
        new DynamicResumePage().dynamicResumePages(getDriver(), url);
    }

    @Test(priority = 4, dataProvider = "browserProvider")
    public void willITakeTheJobQuizPage(String browser) throws InterruptedException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/will-i-take-the-job-quiz");

        new WillITakeTheJobQuizPage().willITakeTheJobQuizPage(getDriver());
    }

    @Test(priority = 5, dataProvider = "browserProvider")
    public void entrepreneurResumePage(String browser) throws InterruptedException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/entrepreneur-resume");

        new EntrepreneurResumePage().entrepreneurResumePage(getDriver());
    }

    @Test(priority = 6, dataProvider = "browserProvider")
    public void academicCVPage(String browser) throws InterruptedException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/academic-cv");

        new AcademicCVPage().academicCVPage(getDriver());
    }

    @Test(priority = 7, dataProvider = "browserProvider")
    public void datingProfilePage(String browser) throws InterruptedException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/dating-profile");

        new DatingProfilePage().datingProfilePage(getDriver());
    }

    @AfterMethod
    public void tearDown() {
        if (driverThreadLocal.get() != null) {
            driverThreadLocal.get().quit();
            driverThreadLocal.remove();
        }
    }
}
