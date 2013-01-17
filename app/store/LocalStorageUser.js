Ext.define('MyApp.store.LocalStorageUser',{
	extend : 'Ext.data.Store',
	model : 'MyApp.model.User',
	proxy : {
		type : 'localstorage',
		id : 'userPreferences'
	}
})
