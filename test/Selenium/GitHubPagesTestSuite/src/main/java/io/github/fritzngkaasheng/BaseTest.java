package io.github.fritzngkaasheng;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.fritzngkaasheng.tests.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import java.net.MalformedURLException;
import java.net.URL;

public class BaseTest {
    private static ThreadLocal<WebDriver> driverThreadLocal = new ThreadLocal<>();

    private String browserName = "";

    private String url = "https://localhost";

    public static boolean checkAllPagesTranslation = false;

    public void setUp(String browser) throws InterruptedException, MalformedURLException {
        /*if (browser.equalsIgnoreCase("safari")) {
            synchronized (BaseTest.class) {
                if (driverThreadLocal.get() == null) {
                    SafariOptions options = new SafariOptions();
                    options.setAcceptInsecureCerts(true);
                    WebDriver driver = new SafariDriver(options);
                    browserName = "Safari";
                    driverThreadLocal.set(driver);
                    driver.get(url);
                    driver.manage().window().maximize();
                    driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(5000));
                    new WebDriverWait(driver, java.time.Duration.ofMillis(2000))
                            .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".navbar-toggler-icon")));
                    new UntranslatedTextFinder().addAppVersionToIgnoredTextsList(driver);
                }
            }
        } else {*/
        String remoteUrl = "http://localhost:4444/wd/hub";
        WebDriver driver = null;

        try {
            if (browser.equalsIgnoreCase("chrome")) {
                ChromeOptions options = new ChromeOptions();
                options.setAcceptInsecureCerts(true);
                driver = new RemoteWebDriver(new URL(remoteUrl), options);
                browserName = "Chrome";
            } else if (browser.equalsIgnoreCase("firefox")) {
                FirefoxOptions options = new FirefoxOptions();
                options.setAcceptInsecureCerts(true);
                driver = new RemoteWebDriver(new URL(remoteUrl), options);
                browserName = "Firefox";
            } else if (browser.equalsIgnoreCase("edge")) {
                EdgeOptions options = new EdgeOptions();
                options.setAcceptInsecureCerts(true);
                driver = new RemoteWebDriver(new URL(remoteUrl), options);
                browserName = "Edge";
            } else if (browser.equalsIgnoreCase("safari")) {
                SafariOptions options = new SafariOptions();
                options.setAcceptInsecureCerts(true);
                driver = new RemoteWebDriver(new URL(remoteUrl), options);
                browserName = "Safari";

                /*SafariOptions options = new SafariOptions();
                options.setAcceptInsecureCerts(true);
                driver = new SafariDriver(options);
                browserName = "Safari";*/
            } else {
                throw new IllegalArgumentException("Invalid browser type: " + browser);
            }
            driverThreadLocal.set(driver);

            driver.get(url);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(java.time.Duration.ofMillis(5000));

            new WebDriverWait(
                    driver,
                    java.time.Duration.ofMillis(2000)
            ).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".navbar-toggler-icon")));

            new UntranslatedTextFinder().addAppVersionToIgnoredTextsList(driver);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to initialize remote WebDriver", e);
        }
        //}
    }

    public WebDriver getDriver() {
        return driverThreadLocal.get();
    }

    @DataProvider(name = "browserProvider", parallel = true)
    public Object[][] browserProvider() {
        String osName = System.getProperty("os.name").toLowerCase();

        if(osName.contains("mac")) {
            return new Object[][]{
                    {"chrome"},
                    {"firefox"},
                    {"edge"},
                    {"safari"}
            };
        } else if(osName.contains("windows") || osName.contains("linux")) {
            return new Object[][]{
                    {"chrome"},
                    {"firefox"},
                    {"edge"}
            };
        } else {
            System.out.println("Operating system not recognized!");
            return new Object[][]{};
        }
    }

    @Test(priority = 1, dataProvider = "browserProvider")
    public void homePage(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);
        new HomePage().homePage(getDriver());
    }

    @Test(priority = 2, dataProvider = "browserProvider")
    public void error404Page(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);

        getDriver().get(url + "#/summon/404/error");

        new Error404Page().error404Page(getDriver());
    }

    @Test(priority = 3, dataProvider = "browserProvider")
    public void dynamicResumePage(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);
        new DynamicResumePage().dynamicResumePages(getDriver(), url);
    }

    @Test(priority = 4, dataProvider = "browserProvider")
    public void willITakeTheJobQuizPage(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/will-i-take-the-job-quiz");

        new WillITakeTheJobQuizPage().willITakeTheJobQuizPage(getDriver());
    }

    @Test(priority = 5, dataProvider = "browserProvider")
    public void entrepreneurResumePage(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/entrepreneur-resume");

        new EntrepreneurResumePage().entrepreneurResumePage(getDriver());
    }

    @Test(priority = 6, dataProvider = "browserProvider")
    public void academicCVPage(String browser) throws InterruptedException, MalformedURLException {
        setUp(browser);

        new Header().navigateTo(getDriver(), "#/academic-cv");

        new AcademicCVPage().academicCVPage(getDriver());
    }

    @Test(priority = 7, dataProvider = "browserProvider")
    public void datingProfilePage(String browser) throws InterruptedException, MalformedURLException {
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
