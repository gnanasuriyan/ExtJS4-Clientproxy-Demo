Ext.define('MyApp.store.SessionStorageUser',{
	extend : 'Ext.data.Store',
	model : 'MyApp.model.User',
	proxy : {
		type : 'sessionstorage',
		id : 'userPreferences'
	}
})
