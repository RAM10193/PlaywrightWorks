
import {devices, type PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    //testMatch: ["tests/checkbox.test.ts"],
    //testMatch: ["tests/assertion.test.ts"],
    //testMatch: ["tests/login.test.ts"]
    //testMatch: ["tests/recorded.login.test.ts"],    
    testMatch: ["pomtests/registerandLogin.test.ts"],
    
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            
        }
    },
    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
    //the failed test will re-run for n times.
    retries: 1,
    reporter: [["dot"],["json",{
        outputFile: "jsonreports/jsonReport.json"
    }], ["html",{
            open: 'always'
    }]]
};

export default config;
