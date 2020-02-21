package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;

public class Steps {
    public static WebDriver driver;
    public static String ADDR1 = "//input[@name='address1']";
    public static String ADDR2 = "//input[@name='address2']";
    public static String CITY = "//input[@name='city']";
    public static String STATE = "//select[@name='state']";
    public static String ZIPCODE = "//input[@name='zipCode']";
    public static String PHONE = "//input[@name='phone']";
    public static String EMAIL = "//input[@name='email']";
    public static String DOBMONTH = "//input[@name='dobMonth']";
    public static String DOBDAY = "//input[@name='dobDay']";
    public static String DOBYEAR = "//input[@name='dobYear']";
    public static String BTSUBMIT = "//button[@type='submit']";
    public static String BTCONTINUE = "//button[text()='Continue']";
    public static String BTSTARTOVER = "//button[text()='Start over']";


    @Before
    public void launchBrower(){
        ChromeOptions optionsd = new ChromeOptions();
        optionsd.setExperimentalOption("useAutomationExtension", false);
        optionsd.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\resources\\chromedriver.exe");
        // Initialize browser
        driver = new ChromeDriver(optionsd);
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
    }

    @Given("^Open the Chrome browser and launch the application$")
    public void open_the_Chrome_browser_and_launch_the_application() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        driver.get("https://csb-idv4r.netlify.com/");
    }

    @When("^The User landed to Tell us about yourself page$")
    public void enter_the_User_landed_to_Tell_us_about_yourself_page() throws Throwable {

        Assert.assertTrue(driver.getPageSource().contains("Tell us about yourself"));
    }

    @Then("^Enter user Address One \"([^\"]*)\" , Address Two \"([^\"]*)\", City \"([^\"]*)\", State \"([^\"]*)\" and Zip code (\\d+) detail$")
    public void enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String addr1, String addr2, String city, String state, int zip) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(ADDR1)).sendKeys(addr1.trim());
        driver.findElement(By.xpath(ADDR2)).sendKeys(addr2.trim());
        driver.findElement(By.xpath(CITY)).sendKeys(city.trim());

        Select obj = new Select(driver.findElement(By.xpath(STATE)));
        obj.selectByVisibleText(state.trim());

        driver.findElement(By.xpath(ZIPCODE)).sendKeys(String.valueOf(zip));

    }

    @Then("^Enter user Phone \"([^\"]*)\" and Email \"([^\"]*)\" information$")
    public void enter_user_contact_information(String phone, String email) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(PHONE)).sendKeys(phone.trim());
        driver.findElement(By.xpath(EMAIL)).sendKeys(email.trim());
    }

    @Then("^Enter user DOBMonth (\\d+), DOBDay (\\d+) and DOBYear (\\d+) details$")
    public void enter_user_DOBMonth_DOBDay_and_DOBYear_details(int dobMonth, int dobday, int dobyear) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(DOBMONTH)).sendKeys(String.valueOf(dobMonth));
        driver.findElement(By.xpath(DOBDAY)).sendKeys(String.valueOf(dobday));
        driver.findElement(By.xpath(DOBYEAR)).sendKeys(String.valueOf(dobyear));
    }

    @Then("^click on Submit button$")
    public void click_on_Submit_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(BTSUBMIT)).click();
        Assert.assertTrue("Please enter valid user information", driver.getPageSource().contains("Everything look good?"));
    }

    @Then("^Confirm data Address One \"([^\"]*)\" , Address two \"([^\"]*)\", City \"([^\"]*)\", State \"([^\"]*)\", Zip code (\\d+), Phone \"([^\"]*)\", Email \"([^\"]*)\", DOBMonth (\\d+), DOBDay (\\d+), DOBYear (\\d+) on Everything look good page and click on continue$")
    public void confirm_data_Address_One_Address_two_City_State_Zip_code_Phone_Email_DOBMonth_DOBDay_DOBYear_on_Everything_look_good_page_and_click_on_continue(String arg1, String arg2, String arg3, String arg4, int arg5, String arg6, String arg7, int arg8, int arg9, int arg10) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        Assert.assertTrue("Please enter valid user information", driver.getPageSource().contains("Everything look good?"));
        Assert.assertTrue(driver.getPageSource().contains(arg1));
        Assert.assertTrue(driver.getPageSource().contains(arg2));
        Assert.assertTrue(driver.getPageSource().contains(arg3));
        Assert.assertTrue(driver.getPageSource().contains(arg4));
        Assert.assertTrue(driver.getPageSource().contains(String.valueOf(arg5)));
        Assert.assertTrue(driver.getPageSource().contains(arg6));
        Assert.assertTrue(driver.getPageSource().contains(arg7));
        Assert.assertTrue(driver.getPageSource().contains(String.valueOf(arg8)));
        Assert.assertTrue(driver.getPageSource().contains(String.valueOf(arg9)));
        Assert.assertTrue(driver.getPageSource().contains(String.valueOf(arg10)));

        driver.findElement(By.xpath(BTCONTINUE)).click();
    }

    @Then("^verify that user redirected to success page$")
    public void verify_that_user_redirected_to_success_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getPageSource().contains("Success"));
        Assert.assertTrue(driver.getPageSource().contains("You have successfully verified your information."));
    }

    @Then("^click on Start over button$")
    public void click_on_Start_over_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(BTSTARTOVER)).click();
    }

    @Then("^verify user redirected back to Tell us about your page$")
    public void verify_user_redirected_back_to_Tell_us_about_your_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getPageSource().contains("Tell us about yourself"));
        //driver.close();
    }

    @After
    public void after() {
        driver.close();
    }

}
