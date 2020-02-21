$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserDetails.feature");
formatter.feature({
  "line": 2,
  "name": "Submit user deatils functionality on Tell us about yourself page",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    },
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verification of Submit button happy path",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter user Address One \u003cAddress One\u003e , Address Two \u003cAddress two\u003e, City \u003cCity\u003e, State \u003cState\u003e and Zip code \u003cZip code\u003e detail",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter user Phone \u003cPhone\u003e and Email \u003cEmail\u003e information",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter user DOBMonth \u003cDOBMonth\u003e, DOBDay \u003cDOBDay\u003e and DOBYear \u003cDOBYear\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Confirm data Address One \u003cAddress One\u003e , Address two \u003cAddress two\u003e, City \u003cCity\u003e, State \u003cState\u003e, Zip code \u003cZip code\u003e, Phone \u003cPhone\u003e, Email \u003cEmail\u003e, DOBMonth \u003cDOBMonth\u003e, DOBDay \u003cDOBDay\u003e, DOBYear \u003cDOBYear\u003e on Everything look good page and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify that user redirected to success page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify user redirected back to Tell us about your page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;",
  "rows": [
    {
      "cells": [
        "Address One",
        "Address two",
        "City",
        "State",
        "Zip code",
        "Phone",
        "Email",
        "DOBMonth",
        "DOBDay",
        "DOBYear"
      ],
      "line": 19,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;;1"
    },
    {
      "cells": [
        "\"980 SW 163rd Ave\"",
        "\"APT 8312\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "12",
        "2",
        "2001"
      ],
      "line": 20,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;;2"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"sweet@gmail.com\"",
        "2",
        "2",
        "1999"
      ],
      "line": 21,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8980658600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verification of Submit button happy path",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter user Address One \"980 SW 163rd Ave\" , Address Two \"APT 8312\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter user DOBMonth 12, DOBDay 2 and DOBYear 2001 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Confirm data Address One \"980 SW 163rd Ave\" , Address two \"APT 8312\", City \"Beaverton\", State \"OR\", Zip code 97006, Phone \"7878787878\", Email \"abc@gmail.com\", DOBMonth 12, DOBDay 2, DOBYear 2001 on Everything look good page and click on continue",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify that user redirected to success page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify user redirected back to Tell us about your page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 2001480600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 29534800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980 SW 163rd Ave",
      "offset": 24
    },
    {
      "val": "APT 8312",
      "offset": 57
    },
    {
      "val": "Beaverton",
      "offset": 74
    },
    {
      "val": "OR",
      "offset": 93
    },
    {
      "val": "97006",
      "offset": 110
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2308506000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1277442900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2001",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1479091200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 8820969100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980 SW 163rd Ave",
      "offset": 26
    },
    {
      "val": "APT 8312",
      "offset": 59
    },
    {
      "val": "Beaverton",
      "offset": 76
    },
    {
      "val": "OR",
      "offset": 95
    },
    {
      "val": "97006",
      "offset": 109
    },
    {
      "val": "7878787878",
      "offset": 123
    },
    {
      "val": "abc@gmail.com",
      "offset": 143
    },
    {
      "val": "12",
      "offset": 168
    },
    {
      "val": "2",
      "offset": 179
    },
    {
      "val": "2001",
      "offset": 190
    }
  ],
  "location": "Steps.confirm_data_Address_One_Address_two_City_State_Zip_code_Phone_Email_DOBMonth_DOBDay_DOBYear_on_Everything_look_good_page_and_click_on_continue(String,String,String,String,int,String,String,int,int,int)"
});
formatter.result({
  "duration": 347833000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_user_redirected_to_success_page()"
});
formatter.result({
  "duration": 51499900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Start_over_button()"
});
formatter.result({
  "duration": 171804100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_user_redirected_back_to_Tell_us_about_your_page()"
});
formatter.result({
  "duration": 21003000,
  "status": "passed"
});
formatter.after({
  "duration": 1446159400,
  "status": "passed"
});
formatter.before({
  "duration": 5830440900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verification of Submit button happy path",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-happy-path;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter user Phone \"7878787878\" and Email \"sweet@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter user DOBMonth 2, DOBDay 2 and DOBYear 1999 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Confirm data Address One \"Sweet home\" , Address two \"\", City \"Beaverton\", State \"OR\", Zip code 97006, Phone \"7878787878\", Email \"sweet@gmail.com\", DOBMonth 2, DOBDay 2, DOBYear 1999 on Everything look good page and click on continue",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify that user redirected to success page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify user redirected back to Tell us about your page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1574180000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 22613200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 60
    },
    {
      "val": "OR",
      "offset": 79
    },
    {
      "val": "97006",
      "offset": 96
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2427231200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "sweet@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 892831600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 30
    },
    {
      "val": "1999",
      "offset": 44
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1644867500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 9020073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 26
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "Beaverton",
      "offset": 62
    },
    {
      "val": "OR",
      "offset": 81
    },
    {
      "val": "97006",
      "offset": 95
    },
    {
      "val": "7878787878",
      "offset": 109
    },
    {
      "val": "sweet@gmail.com",
      "offset": 129
    },
    {
      "val": "2",
      "offset": 156
    },
    {
      "val": "2",
      "offset": 166
    },
    {
      "val": "1999",
      "offset": 177
    }
  ],
  "location": "Steps.confirm_data_Address_One_Address_two_City_State_Zip_code_Phone_Email_DOBMonth_DOBDay_DOBYear_on_Everything_look_good_page_and_click_on_continue(String,String,String,String,int,String,String,int,int,int)"
});
formatter.result({
  "duration": 214151400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_that_user_redirected_to_success_page()"
});
formatter.result({
  "duration": 33707800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Start_over_button()"
});
formatter.result({
  "duration": 106015100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_user_redirected_back_to_Tell_us_about_your_page()"
});
formatter.result({
  "duration": 14752200,
  "status": "passed"
});
formatter.after({
  "duration": 1012017300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \u003cAddress One\u003e , Address Two \u003cAddress two\u003e, City \u003cCity\u003e, State \u003cState\u003e and Zip code \u003cZip code\u003e detail",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \u003cPhone\u003e and Email \u003cEmail\u003e information",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth \u003cDOBMonth\u003e, DOBDay \u003cDOBDay\u003e and DOBYear \u003cDOBYear\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;",
  "rows": [
    {
      "cells": [
        "Address One",
        "Address two",
        "City",
        "State",
        "Zip code",
        "Phone",
        "Email",
        "DOBMonth",
        "DOBDay",
        "DOBYear"
      ],
      "line": 34,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;1"
    },
    {
      "cells": [
        "\"\"",
        "\"\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "02",
        "2",
        "2020"
      ],
      "line": 35,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;2"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "02",
        "2",
        "2020"
      ],
      "line": 36,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;3"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "11",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "02",
        "2",
        "2020"
      ],
      "line": 37,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;4"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"\"",
        "\"abc@gmail.com\"",
        "02",
        "2",
        "2020"
      ],
      "line": 38,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;5"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"\"",
        "02",
        "2",
        "2020"
      ],
      "line": 39,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;6"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abcgmail.com\"",
        "02",
        "2",
        "2020"
      ],
      "line": 40,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;7"
    },
    {
      "cells": [
        "\"980 SW 163rd Ave\"",
        "\"APT 8312\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"78787878\"",
        "\"abc@gmail.com\"",
        "32",
        "2",
        "2001"
      ],
      "line": 41,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;8"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "02",
        "11",
        "2020"
      ],
      "line": 42,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;9"
    },
    {
      "cells": [
        "\"Sweet home\"",
        "\"007\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "02",
        "2",
        "2021"
      ],
      "line": 43,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;10"
    },
    {
      "cells": [
        "\"980 SW 163rd Ave\"",
        "\"APT 8312\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"qwertyui@#\"",
        "\"abc@gmail.com\"",
        "12",
        "2",
        "2001"
      ],
      "line": 44,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;11"
    },
    {
      "cells": [
        "\"980 SW 163rd Ave\"",
        "\"APT 8312\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "12",
        "2",
        "1234"
      ],
      "line": 45,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;12"
    },
    {
      "cells": [
        "\"\"",
        "\"APT 8312\"",
        "\"Beaverton\"",
        "\"OR\"",
        "97006",
        "\"7878787878\"",
        "\"abc@gmail.com\"",
        "12",
        "2",
        "1234"
      ],
      "line": 46,
      "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4904317800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"\" , Address Two \"\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1528832400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 41334000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "",
      "offset": 41
    },
    {
      "val": "Beaverton",
      "offset": 50
    },
    {
      "val": "OR",
      "offset": 69
    },
    {
      "val": "97006",
      "offset": 86
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2656835200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1360396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1736214700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1114562000,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 978950100,
  "status": "passed"
});
formatter.before({
  "duration": 5758564300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1707033000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 17516600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 73
    },
    {
      "val": "97006",
      "offset": 90
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2789847400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1566744700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1334975500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 2602078000,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1369785400,
  "status": "passed"
});
formatter.before({
  "duration": 5885073000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 11 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1640991600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 24045100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "11",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2311177100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1399208700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1557610800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1669074100,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 766327400,
  "status": "passed"
});
formatter.before({
  "duration": 5547293600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1320867000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 37592700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "97006",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2769319200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 31
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 913548600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 937377700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1663702400,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 851691200,
  "status": "passed"
});
formatter.before({
  "duration": 5657806700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1686554700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 57805700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "97006",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2466307200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 984610700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1665631800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 2310087400,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 650620800,
  "status": "passed"
});
formatter.before({
  "duration": 5633008000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abcgmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1570232000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 19453800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "97006",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2553230200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abcgmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 998001400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1406521500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 2588502000,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 812744800,
  "status": "passed"
});
formatter.before({
  "duration": 5919040900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"980 SW 163rd Ave\" , Address Two \"APT 8312\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"78787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 32, DOBDay 2 and DOBYear 2001 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1565966300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 26813400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980 SW 163rd Ave",
      "offset": 24
    },
    {
      "val": "APT 8312",
      "offset": 57
    },
    {
      "val": "Beaverton",
      "offset": 74
    },
    {
      "val": "OR",
      "offset": 93
    },
    {
      "val": "97006",
      "offset": 110
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2681199700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 39
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1308245000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2001",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1497858800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1998749100,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1143963000,
  "status": "passed"
});
formatter.before({
  "duration": 5249282800,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 11 and DOBYear 2020 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1247331700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 18875800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "97006",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2697947500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 817741400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "11",
      "offset": 31
    },
    {
      "val": "2020",
      "offset": 46
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 770745900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1909839100,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 862201200,
  "status": "passed"
});
formatter.before({
  "duration": 4903125700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"Sweet home\" , Address Two \"007\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 02, DOBDay 2 and DOBYear 2021 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1404704700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 29667800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweet home",
      "offset": 24
    },
    {
      "val": "007",
      "offset": 51
    },
    {
      "val": "Beaverton",
      "offset": 63
    },
    {
      "val": "OR",
      "offset": 82
    },
    {
      "val": "97006",
      "offset": 99
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2880191100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1538026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2021",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1451288400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1891826800,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1358951300,
  "status": "passed"
});
formatter.before({
  "duration": 5145367200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"980 SW 163rd Ave\" , Address Two \"APT 8312\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"qwertyui@#\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 12, DOBDay 2 and DOBYear 2001 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1779552400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 21455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980 SW 163rd Ave",
      "offset": 24
    },
    {
      "val": "APT 8312",
      "offset": 57
    },
    {
      "val": "Beaverton",
      "offset": 74
    },
    {
      "val": "OR",
      "offset": 93
    },
    {
      "val": "97006",
      "offset": 110
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2817025700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwertyui@#",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1387050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2001",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 786614600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1122947200,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 704377000,
  "status": "passed"
});
formatter.before({
  "duration": 5543483500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"980 SW 163rd Ave\" , Address Two \"APT 8312\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 12, DOBDay 2 and DOBYear 1234 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1681252400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 31545800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980 SW 163rd Ave",
      "offset": 24
    },
    {
      "val": "APT 8312",
      "offset": 57
    },
    {
      "val": "Beaverton",
      "offset": 74
    },
    {
      "val": "OR",
      "offset": 93
    },
    {
      "val": "97006",
      "offset": 110
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 3399826900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 964130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "1234",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1155539900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 2151521300,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2504101900,
  "status": "passed"
});
formatter.before({
  "duration": 5165929000,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verification of Submit button negative scenario",
  "description": "",
  "id": "submit-user-deatils-functionality-on-tell-us-about-yourself-page;verification-of-submit-button-negative-scenario;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Positive"
    },
    {
      "line": 1,
      "name": "@Negative"
    },
    {
      "line": 1,
      "name": "@FeatureId\u003dSubmit-01"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the Chrome browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User landed to Tell us about yourself page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter user Address One \"\" , Address Two \"APT 8312\", City \"Beaverton\", State \"OR\" and Zip code 97006 detail",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter user Phone \"7878787878\" and Email \"abc@gmail.com\" information",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter user DOBMonth 12, DOBDay 2 and DOBYear 1234 details",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Chrome_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 1301148200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_User_landed_to_Tell_us_about_yourself_page()"
});
formatter.result({
  "duration": 30678300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "APT 8312",
      "offset": 41
    },
    {
      "val": "Beaverton",
      "offset": 58
    },
    {
      "val": "OR",
      "offset": 77
    },
    {
      "val": "97006",
      "offset": 94
    }
  ],
  "location": "Steps.enter_user_Address_One_Address_Two_City_State_and_Zip_code_detail(String,String,String,String,int)"
});
formatter.result({
  "duration": 2605740500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7878787878",
      "offset": 18
    },
    {
      "val": "abc@gmail.com",
      "offset": 41
    }
  ],
  "location": "Steps.enter_user_contact_information(String,String)"
});
formatter.result({
  "duration": 1266067500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "1234",
      "offset": 45
    }
  ],
  "location": "Steps.enter_user_DOBMonth_DOBDay_and_DOBYear_details(int,int,int)"
});
formatter.result({
  "duration": 1235089900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Submit_button()"
});
formatter.result({
  "duration": 1584850700,
  "error_message": "java.lang.AssertionError: Please enter valid user information\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepDefinition.Steps.click_on_Submit_button(Steps.java:90)\r\n\tat ✽.Then click on Submit button(UserDetails.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 852533800,
  "status": "passed"
});
});