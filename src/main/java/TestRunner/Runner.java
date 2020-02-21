package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",
        glue={"StepDefinition"},
        format = {"pretty", "html:Result"},
        monochrome = true,
        dryRun = false,
        strict = true
        )
public class Runner {

}
