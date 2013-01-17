Ext.define('MyApp.store.CountryStore',{
	extend : 'Ext.data.Store',
	model : 'MyApp.model.Country',
	data : countryData,
	proxy : {
		type : 'memory',
		reader : {
			type : 'json',
			root : 'countryList'
		}
	}
});