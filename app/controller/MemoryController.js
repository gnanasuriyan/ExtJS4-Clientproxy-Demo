Ext.define('MyApp.controller.MemoryController',{
	extend : 'Ext.app.Controller',
	models : ['Country'],
	stores : ['CountryStore'],
	views : ['Country'],
	init : function() {
		Ext.create("MyApp.view.Country",{
			renderTo : Ext.getBody()
		})
	}
});
