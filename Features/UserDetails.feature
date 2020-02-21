@FeatureId=Submit-01 @Positive @Negative
Feature: Submit user deatils functionality on Tell us about yourself page

  @Positive
  Scenario Outline: Verification of Submit button happy path
    Given Open the Chrome browser and launch the application
    When The User landed to Tell us about yourself page
    Then Enter user Address One <Address One> , Address Two <Address two>, City <City>, State <State> and Zip code <Zip code> detail
    Then Enter user Phone <Phone> and Email <Email> information
    Then Enter user DOBMonth <DOBMonth>, DOBDay <DOBDay> and DOBYear <DOBYear> details
    Then click on Submit button
    Then Confirm data Address One <Address One> , Address two <Address two>, City <City>, State <State>, Zip code <Zip code>, Phone <Phone>, Email <Email>, DOBMonth <DOBMonth>, DOBDay <DOBDay>, DOBYear <DOBYear> on Everything look good page and click on continue
    Then verify that user redirected to success page
    Then click on Start over button
    Then verify user redirected back to Tell us about your page

    Examples:

      | Address One        | Address two | City        | State | Zip code | Phone        | Email             | DOBMonth | DOBDay | DOBYear |
      | "980 SW 163rd Ave" | "APT 8312"  | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com"   | 12       | 2      | 2001    |
      | "Sweet home"       | ""          | "Beaverton" | "OR"  | 97006    | "7878787878" | "sweet@gmail.com" | 2        | 2      | 1999    |

  @Negative
  Scenario Outline: Verification of Submit button negative scenario
    Given Open the Chrome browser and launch the application
    When The User landed to Tell us about yourself page
    Then Enter user Address One <Address One> , Address Two <Address two>, City <City>, State <State> and Zip code <Zip code> detail
    Then Enter user Phone <Phone> and Email <Email> information
    Then Enter user DOBMonth <DOBMonth>, DOBDay <DOBDay> and DOBYear <DOBYear> details
    Then click on Submit button

    Examples:

      | Address One        | Address two | City        | State | Zip code | Phone        | Email           | DOBMonth | DOBDay | DOBYear |
      | ""                 | ""          | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 02       | 2      | 2020    |
      | "Sweet home"       | "007"       | ""          | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 02       | 2      | 2020    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 11       | "7878787878" | "abc@gmail.com" | 02       | 2      | 2020    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 97006    | ""           | "abc@gmail.com" | 02       | 2      | 2020    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 97006    | "7878787878" | ""              | 02       | 2      | 2020    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 97006    | "7878787878" | "abcgmail.com"  | 02       | 2      | 2020    |
      | "980 SW 163rd Ave" | "APT 8312"  | "Beaverton" | "OR"  | 97006    | "78787878"   | "abc@gmail.com" | 32       | 2      | 2001    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 02       | 11     | 2020    |
      | "Sweet home"       | "007"       | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 02       | 2      | 2021    |
      | "980 SW 163rd Ave" | "APT 8312"  | "Beaverton" | "OR"  | 97006    | "qwertyui@#" | "abc@gmail.com" | 12       | 2      | 2001    |
      | "980 SW 163rd Ave" | "APT 8312"  | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 12       | 2      | 1234    |
      | ""                 | "APT 8312"  | "Beaverton" | "OR"  | 97006    | "7878787878" | "abc@gmail.com" | 12       | 2      | 1234    |