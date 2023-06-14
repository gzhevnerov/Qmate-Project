require ('dotenv').config();
var standardZPO = require("../data/standardZPO.json");
var elementsData = require("../data/elementsData.json");
var objectPage = require("../module/objectPage.js");
var listReport = require("../module/listReport.js");

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
    });

    it ("Step 02: Log in to the system", async function() {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (10000);

    });

    it ("Step 03: Click Create button", async function() {
        await listReport.clickCreateFromLR (
            elementsData.button.createListReport.metadata,
            elementsData.button.createListReport.id
        );
        await util.browser.sleep (10000);
    });

    it ("Step 04: Select Purchase Order type - Standard Z-PO (ZNB)", async function() {
        
        await objectPage.fillInFields (
            elementsData.combobox.purchaseOrderType.type,
            elementsData.combobox.purchaseOrderType.metadata,
            elementsData.combobox.purchaseOrderType.id,
            standardZPO.generalInformationTab.purchaseOrderType
        );
        await util.browser.sleep (5000);

    });

    it ("Step 05: Fill in Supplier field - 50000040", async function() {
        await objectPage.fillInFields (
            elementsData.field.supplier.type,
            elementsData.field.supplier.metadata,
            elementsData.field.supplier.id,
            standardZPO.generalInformationTab.supplier
        );
        console.log (elementsData.button.supplier.metadata);
        console.log (elementsData.button.supplier.type);
        console.log (elementsData.button.supplier.id);
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });

    it ("Step 06: Fill in Currency field - EUR", async function() {
        await objectPage.fillInFields (
            elementsData.field.currency.type,
            elementsData.field.currency.metadata,
            elementsData.field.currency.id,
            standardZPO.generalInformationTab.currency
        );
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });


    it ("Step 07: Fill in Purchasing Group field - 001", async function() {
        await objectPage.fillInFields (
            elementsData.field.purchasingGroup.type,
            elementsData.field.purchasingGroup.metadata,
            elementsData.field.purchasingGroup.id,
            standardZPO.generalInformationTab.purchasingGroup
        );
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    });  
    
    it ("Step 08: Fill in Purchasing Organization field - 1010", async function() {
        await objectPage.fillInFields (
            elementsData.field.purchasingOrg.type,
            elementsData.field.purchasingOrg.metadata,
            elementsData.field.purchasingOrg.id,
            standardZPO.generalInformationTab.purchasingOrg
        );
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    }); 

    it ("Step 09: Fill in Company Code field - 1010", async function() {
        await objectPage.fillInFields (
            elementsData.field.companyCode.type,
            elementsData.field.companyCode.metadata,
            elementsData.field.companyCode.id,
            standardZPO.generalInformationTab.companyCode
        );
        await common.userInteraction.pressEnter();
        await util.browser.sleep (5000);
    }); 

    it ("Step 10: Navigate to Items section", async function() {
        await objectPage.navigateTo (
            elementsData.section.items
        );
    });
    
//     var itemArr = standardZPO.items
//     for (let [itemIndex, itemValue] of itemArr.Entries()) {
//         it ("Item" + itemValue.item + "Add Purchase Order Item", async function () {
//             await objectPage.addItem (
//                 elementsData.button.createNewItem.metadata,
//                 elementsData.button.createNewItem.id
//             );
//         });
//     }       
//     it ("Item" + itemValue.item + "Select Item Category - " + itemValue.itemCategory, async function () {
//         await objectPage.fillInFields(
//             elementsData.field.itemCategory.type,
//             elementsData.field.itemCategory.metadata,
//             elementsData.field.itemCategory.path,
//             itemValue.itemCategory,
//             itemValue.item
//         );
//     });  
    
//     it ("Item" + itemValue.item + "Fill in material - " + itemValue.material, async function () {
//         await objectPage.fillInFields (
//             elementsData.field.itemCategory.type,
//             elementsData.field.itemCategory.metadata,
//             elementsData.field.itemCategory.path,
//             itemValue.itemCategory,
//             itemValue.item
//         );        
//     }); 

//     it ("Item" + itemValue.item + "Fill in quantity - " + itemValue.orderQuantity, async function () {
//         await objectPage.fillInFields (
//             elementsData.field.itemQuantity.type,
//             elementsData.field.itemQuantity.metadata,
//             elementsData.field.itemQuantity.path,
//             itemValue.itemQuantity,
//             itemValue.item
//         );        
//     }); 

//     it ("Step 16: Save Purchase Order - Click Create ", async function() {
//         const selector = {
//             "elementProperties": {
//                 "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//                 "metadata": "sap.m.Button",
//                 "id": "*activate"
//             }
//         };
//         await ui5.userInteraction.click(selector);
//         await util.browser.sleep (5000);
//     });

//     it ("Step 17: Export Purchase Order Id from document header", async function() {
//         const selector = {
//             "elementProperties": {
//                 "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
//                 "metadata": "sap.m.Title",
//                 "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
//             }
//         };
//         const purchaseOrderId = await ui5.element.getPropertyValue(selector, "text");
//         util.console.log (purchaseOrderId);
//         const userData = {
//             "purchaseOrderId": purchaseOrderId
//         };

//         browser.config.params.export.purchaseOrder = userData;

//         const references = browser.config.params.import.data["references"];
//         references.purchaseOrderNumber = purchaseOrderId;
//         await util.browser.sleep (5000);
//     });

//     it ("Step 18: Log out", async function() {
//         await ui5.session.logout();
//         await util.browser.sleep (5000);
//     });    
// });
});