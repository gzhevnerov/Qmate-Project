const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

  
    baseUrl: 'https://us4.leverx.local:44302/sap/bc/ui2/flp',

    specs: [
        [
            "C:/Qmate Project/specs/01_createNewPo.spec.js"
        ],
    ],

    maxInstances: 3,

    capabilities: [{
        // capabilities for local browser web tests
        browserName: "chrome", // or "firefox", "microsoftedge", "safari",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                "--output=/dev/null",
                "--log-level=3",
                "--no-sandbox",
                "--incognito",
                "--ignore-certificate-errors",
                "--window-size=1920,1200",
                "--whitelisted-ips",
                "--disable-dev-shm-usage",
                // "--headless",
                "--disable-gpu",
                "--disable-web-security",
                "--disable-infobars",
                "--disable-extensions",
                "--disable-logging",
                "--lang=en-US"
            ]
        }
    }],

    services: [[QmateService],['chromedriver']],

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000,
        bail: true
    },

    reporters: [
        [
            'spec',
            {
                symbols: {
                    passed: '[PASS]',
                    failed: '[FAIL]',
                },
            },
        ]
    ],
    
};