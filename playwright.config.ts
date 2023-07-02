
import type {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    //testMatch: ["tests/checkbox.test.ts"],
    //testMatch: ["tests/assertion.test.ts"],
    //testMatch: ["tests/login.test.ts"]
    //testMatch: ["tests/recorded.login.test.ts"],    
    testMatch: ["pomtests/registerandLogin.test.ts"],
    
    use: {
        headless: false,
        screenshot: "on",
        video: "on"
    },
    //the failed test will re-run for n times.
    retries: 1,
    reporter: [["dot"],["json",{
        outputFile: "jsonreports/jsonReport.json"
    }], ["html",{
            open: 'always'
    }]]
};

export default config;
