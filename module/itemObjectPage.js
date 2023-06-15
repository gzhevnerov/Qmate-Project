const { path } = require("chromedriver");

var itemObjectPage = function() {
    const viewName = "sap.suite.ui.generic.template.ObjectPage.view.Details";

    this.fillInFields = async function(type, metadata, id, value, index) {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInteraction.clearAndFill(selector, value);
    }
        this.apply = async function(metadata, id) {
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

module.exports = new itemObjectPage();