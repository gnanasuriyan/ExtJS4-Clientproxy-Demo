Ext.Loader.setConfig({
	enabled : true
});

var countryData = {
	countryList : [
		{id : 1, country : 'India'},
		{id : 2, country : 'Canada'},
		{id : 3, country : 'Germany'},
		{id : 4, country : 'US'},
		{id : 5, country : 'UK'}
	]
};

Ext.application({
	name : 'MyApp',
	appFolder : 'app',
	//controllers : ['SessionStorageController'],
	//controllers : ['LocalStorageController'],
	controllers : ['MemoryController'],
	launch : function() {
		console.log('Application launch function...!');
	}
});