require ('dotenv').config();

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
        await util.browser.sleep (2000);
    });

    it ("Step 02: Log in to the system", async function() {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (2000);

    });

    it ("Step 03: Click Create button", async function() {
        const selector = {
                "elementProperties": {
                    "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                    "metadata": "sap.m.Button",
                    "id": "*addEntry"
                }
            };
            await ui5.userInteraction.click(selector);
            await util.browser.sleep (5000);
        });

    it ("Step 04: Select Purchase Order type - Standard Z-PO (ZNB)", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.ComboBox",
                "id": "*GeneralInformationFacet1::PurchaseOrderType::Field-comboBoxEdit"
            }
        };
        await ui5.userInteraction.selectComboBox(selector, "Standard Z-PO (ZNB)");
        await util.browser.sleep (5000);
        });
    });
