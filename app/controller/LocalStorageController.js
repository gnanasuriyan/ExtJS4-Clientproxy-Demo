Ext.define('MyApp.controller.LocalStorageController',{
	extend : 'Ext.app.Controller',
	model : ['User'],
	stores : ['LocalStorageUser'],
	init : function() {
		//Getting handle of local storage store.
		var localStore = this.getStore('LocalStorageUser');
		
		//Adding information to local storage
		localStore.add({userId:1,userName : 'suriyan',displayName : 'suriya'});
		localStore.sync();
		
		//Reading information from local storage
		localStore.load(function(records,operation,success){
			console.log('User name : ' + records[0].get('userName') + ', display name : ' + records[0].get('displayName'));
		});
		console.log('Local storage operation has completed');
	}
})
