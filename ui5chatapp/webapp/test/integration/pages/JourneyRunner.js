sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/mycompany/ui5chatapp/test/integration/pages/ProductsMain"
], function (JourneyRunner, ProductsMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/mycompany/ui5chatapp') + '/index.html',
        pages: {
			onTheProductsMain: ProductsMain
        },
        async: true
    });

    return runner;
});

