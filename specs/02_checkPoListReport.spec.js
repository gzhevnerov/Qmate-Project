require ('dotenv').config();
var standardZPO = require("../data/standardZPO.json");
var elementsData = require("../data/elementsData.json");
var objectPage = require("../module/objectPage.js");
var listReport = require("../module/listReport.js");

describe("Check purchase order created in step 01_createNewPo on List report of Manage Purchase Order app", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
        await util.browser.sleep (2000);
    });

    it ("Step 02: Log in to the system", async function() {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (5000);

    });

    it ("Step 03: Fill in Purchase Order field", async function() {
        
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined (references);
        await common.assertion.expectDefined (references.purchaseOrderNumber);
        await listReport.fillInFields (
            elementsData.field.purchaseOrderLR.metadata,
            elementsData.field.purchaseOrderLR.id,
            references.purchaseOrderNumber
        );
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 04: Click Go button", async function() {
        await listReport.clickLR (
            elementsData.button.goListReport.metadata,
            elementsData.button.goListReport.id
        );
        await util.browser.sleep (5000);
    });

    it ("Step 05: Open Purchase Order that was found", async function() {
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined (references);
        await common.assertion.expectDefined (references.purchaseOrderNumber);
        await listReport.selectPO (
            elementsData.button.selectItemListReport.metadata
        );
        await util.browser.sleep (5000);
    });

    it ("Step 06: Validate purchase order is correct", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Title",
                "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        };
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined (references);
        await common.assertion.expectDefined (references.purchaseOrderNumber);
        await ui5.assertion.expectAttributeToBe(selector, "text", references.purchaseOrderNumber);
    });
});