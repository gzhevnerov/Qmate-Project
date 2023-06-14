var listReport = function() {
    const viewNameLR = "sap.suite.ui.generic.template.ListReport.view.ListReport";
    this.clickCreateFromLR = async function(metadata, id) {
        const selector = {
            "elementProperties": {
                "viewName": viewNameLR,
                "metadata": `${metadata}`,
                "id": `*${id}*`
            }
        };
        await ui5.userInteraction.click(selector);
    }
}

module.exports = new listReport();