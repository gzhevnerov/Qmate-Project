require ('dotenv').config();
const purchaseOrderType = "Standard Z-PO (ZNB)";
const supplier = "50000040";
const currency = "EUR";
const purchasingGroup = "001";
const purchasingOrg = "1010";
const companyCode = "1010";
const itemCategory = "Standard";
const material = "WM-D03";
const quantity = "10";
const plant = "1010";


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
        await ui5.userInteraction.selectComboBox(selector, purchaseOrderType);
        await util.browser.sleep (5000);
    });

    it ("Step 05: Fill in Supplier field - 50000040", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet1::Supplier::Field-input"
            }
        };
        await ui5.userInteraction.clearAndFill(selector, supplier);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 06: Fill in Currency field - EUR", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
            }
        };
        await ui5.userInteraction.clearAndFill(selector, currency);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });


    it ("Step 07: Fill in Purchasing Group field - 001", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
            }
        };
        await ui5.userInteraction.clearAndFill(selector, purchasingGroup);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });  
    
    it ("Step 08: Fill in Purchasing Organization field - 1010", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
            }
        };
        await ui5.userInteraction.clearAndFill(selector, purchasingOrg);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    }); 

    it ("Step 09: Fill in Company Code field - 1010", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
            }
        };
        await ui5.userInteraction.clearAndFill(selector, companyCode);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    }); 

    it ("Step 10: Navigate to Items section", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep (5000);
    });
        
    it ("Step 11: Create new Purchase Order item - Click Create ", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*ItemsFacet::addEntry"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep (5000);
    });
            
    it ("Step 12: Select item category - Standard", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.ComboBox",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
            }
        };
        await ui5.userInteraction.selectComboBox(selector, itemCategory);
        await util.browser.sleep (5000);
    });  
    
    it ("Step 13: Fill in Material - WM-D03", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
                "value": [{
                    "path": "ManufacturerMaterial"
                }]
            }
        };
        await ui5.userInteraction.clearAndFill(selector, material);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    }); 

    it ("Step 14: Fill in Plant - 1010", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
                "value": [{
                    "path": "Plant"
                }],
                "ariaLabelledBy": ["*ItemsFacet::Table-Plant-header"]
            }
        };
        await ui5.userInteraction.clearAndFill(selector, plant);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 15: Fill in Quantity - 10", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
                "value": [{
                    "path": "OrderQuantity"
                }]
            }
        };
        await ui5.userInteraction.clearAndFill(selector, quantity);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 16: Save Purchase Order - Click Create ", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*activate"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep (5000);
    });

    it ("Step 17: Export Purchase Order Id from document header", async function() {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Title",
                "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        };
        const purchaseOrderId = await ui5.element.getPropertyValue(selector, "text");
        util.console.log (purchaseOrderId);
        const userData = {
            "purchaseOrderId": purchaseOrderId
        };

        browser.config.params.export.purchaseOrder = userData;

        const references = browser.config.params.import.data["references"];
        references.purchaseOrderNumber = purchaseOrderId;
        await util.browser.sleep (5000);
    });

    it ("Step 18: Log out", async function() {
        await ui5.session.logout();
        await util.browser.sleep (5000);
    });    

});
