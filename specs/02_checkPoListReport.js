require ('dotenv').config();

describe("Check purchase order created in step 01_createNewPo on List report of Manage Purchase Order app", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
        await util.browser.sleep (2000);
    });

    it ("Step 02: Log in to the system", async function() {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (2000);

    });

    it ("Step 03: Fill in Supplier field", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.ui.comp.smartfilterbar.SFBMultiInput",
                "id": "*listReportFilter-filterItemControl_BASIC-PurchaseOrder"
            }
        };

        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined (references);
        await common.assertion.expectDefined (references.purchaseOrderNumber);
        const valueToEnter = references.purchaseOrderNumber;
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 04: Click Go button", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.m.Button",
                "id": "*listReportFilter-btnGo"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep (5000);
    });

    it ("Step 05: Open Purchase Order that was found", async function() {
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined (references);
        await common.assertion.expectDefined (references.purchaseOrderNumber);

        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.m.ColumnListItem"
            }
        };
        await ui5.userInteraction.click(selector);
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