import {devices, PlaywrightTestConfig } from "@playwright/test";
import { getCdpEndpoint } from './browserstack.config.js';

const config: PlaywrightTestConfig = {
    //testMatch: ["tests/checkbox.test.ts"],
    //testMatch: ["tests/assertion.test.ts"],
    //testMatch: ["tests/login.test.ts"]
    //testMatch: ["tests/recorded.login.test.ts"],    
    //testMatch: ["pomtests/registerandLogin.test.ts"],
    testMatch: ["tests/visualcomparison.test.ts"],

    //Importing BrowserStack setup to Config file
    /*globalSetup: require.resolve('./global-setup'),
    globalTeardown: require.resolve('./global-teardown'),*/
    
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
        /*{
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'MSEdge',
          use: { ...devices['Desktop Edge'] },
      },
        {
            name: 'chrome@latest:Windows 11',
            use: {
              connectOptions: { wsEndpoint: getCdpEndpoint('chrome@latest:Windows 11','test1') },
            },
          }
          ,
          {
            name: 'playwright-webkit@latest:OSX Ventura',
            use: {
              connectOptions: { wsEndpoint: getCdpEndpoint('playwright-webkit@latest:OSX Ventura', 'test2') }
            },
          },
          {
            name: 'playwright-firefox:Windows 11',
            use: {
              connectOptions: { wsEndpoint: getCdpEndpoint('playwright-firefox:Windows 11', 'test3') }
            },
          }*/
    ],
    //the failed test will re-run for n times.
    retries: 0,
    reporter: [["dot"],["json",{
        outputFile: "jsonreports/jsonReport.json"
    }], ["html",{
            open: 'always'
    }]]
};

export default config;
