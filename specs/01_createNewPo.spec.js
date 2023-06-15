require ('dotenv').config();

var standardZPO = require("../data/standardZPO.json");
var elementsData = require("../data/elementsData.json");
var objectPage = require("../module/objectPage.js");
var listReport = require("../module/listReport.js");
const itemObjectPage = require('../module/itemObjectPage');

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
        await util.browser.sleep (5000);
    });

    it ("Step 02: Log in to the system", async function() {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (5000);

    });

    it ("Step 03: Click Create button", async function() {
        await util.browser.sleep (5000);
        await listReport.clickLR (
            elementsData.button.createListReport.metadata,
            elementsData.button.createListReport.id
        );
        await util.browser.sleep (5000);
    });

    it ("Step 04: Select Purchase Order type - Standard Z-PO (ZNB)", async function() {
        
        await objectPage.fillInFields (
            elementsData.combobox.purchaseOrderType.type,
            elementsData.combobox.purchaseOrderType.metadata,
            elementsData.combobox.purchaseOrderType.id,
            standardZPO.generalInformationTab.purchaseOrderType
        );
    });
    
    it ("Step 05: Fill in Supplier field - 50000040", async function() {

        await objectPage.fillInFields (
            elementsData.field.supplier.type,
            elementsData.field.supplier.metadata,
            elementsData.field.supplier.id,
            standardZPO.generalInformationTab.supplier
        );
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
            elementsData.field.purchasingOrganization.type,
            elementsData.field.purchasingOrganization.metadata,
            elementsData.field.purchasingOrganization.id,
            standardZPO.generalInformationTab.purchasingOrganization
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
            elementsData.button.items.metadata,
            elementsData.button.items.id
        );
        await util.browser.sleep (10000);
    });
    
    var itemArr = standardZPO.itemsTab
    for (let [itemIndex, itemValue] of itemArr.entries()) {
        it ("Item " + itemValue.item + " Add Purchase Order Item", async function () {
            await objectPage.addItem (
                elementsData.button.createNewItem.metadata,
                elementsData.button.createNewItem.id
            );
        });      
    it ("Item " + itemValue.item + " Select Item Category - " + itemValue.itemCategory, async function () {
        await objectPage.fillInFields(
            elementsData.field.itemCategory.type,
            elementsData.field.itemCategory.metadata,
            elementsData.field.itemCategory.path,
            itemValue.itemCategory,
            itemValue.item
        );
    });  
    
    it ("Item " + itemValue.item + " Fill in material - " + itemValue.material, async function () {
        await objectPage.fillInFields (
            elementsData.field.itemMaterial.type,
            elementsData.field.itemMaterial.metadata,
            elementsData.field.itemMaterial.path,
            itemValue.material,
            itemValue.item
        );        
    }); 

    it ("Item " + itemValue.item + " Fill in quantity - " + itemValue.orderQuantity, async function () {
        await objectPage.fillInFields (
            elementsData.field.itemQuantity.type,
            elementsData.field.itemQuantity.metadata,
            elementsData.field.itemQuantity.path,
            itemValue.quantity,
            itemValue.item
        );        
    });
    it ("Item " + itemValue.item + " Navigate to item", async function () {
        await objectPage.navigateToItem (
            elementsData.button.navigateToItem.metadata,
            elementsData.button.navigateToItem.path,
            itemValue.item 
        );
    });
    it ("Item " + itemValue.item + " Click Apply", async function () {
        await itemObjectPage.apply (
            elementsData.button.applyItem.metadata,
            elementsData.button.applyItem.id
        );
    });
}
    it ("Step 17: Click Save button", async function() {
        await util.browser.sleep (5000);
        await objectPage.saveObjectPage (
            elementsData.button.createObjectPage.metadata,
            elementsData.button.createObjectPage.id
        );
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
            "purchaseOrderNumber": purchaseOrderId
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
