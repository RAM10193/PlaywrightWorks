
import type {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    //testMatch: ["tests/login.test.ts"]
    testMatch: ["tests/recorded.login.test.ts"],
    use: {
        headless: false,
        screenshot: "on",
        video: "on"
    },
    reporter: [["dot"],["json",{
        outputFile: "jsonreports/jsonReport.json"
    }], ["html",{
            open: 'never'
    }]]
};

export default config;
