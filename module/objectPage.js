var objectPage = function() {
    const viewName = "sap.suite.ui.generic.template.ObjectPage.view.Details";

    this.fillInFields = async function(type, metadata, id, value, index) {
        if (type === "ID") {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInterection.clearAndFill(selector, value, index);

        } else if (type === "Combobox") {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInterection.selectComboBox(selector, value);
        } else if (type === "Item") {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='${index}'*`,
                    "value": [{
                        "path": `*${id}*`
                    }]
                }
            };
        }
    }
        this.addItem = async function(type, metadata, id) {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInteraction.click(selector);
        };

        this.navigateTo = async function(type, metadata, id) {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInteraction.click(selector);
        };
}

module.exports = new objectPage();