Ext.define('MyApp.controller.SessionStorageController',{
	extend : 'Ext.app.Controller',
	models : ['User'],
	stores : ['SessionStorageUser'],
	init : function() {
		//Storing information to session storage
		var sessionStore = this.getStore('SessionStorageUser');
		sessionStore.load();
		sessionStore.add({userId:1,userName : 'suriyan',displayName : 'Suriya'});
		sessionStore.sync();
		
		//Reading information from session storage
		sessionStore.load(function(records,operation,success) {
			//Here records is a array type. For testing purpose, I took first record.
			console.log('User name : ' + records[0].get('userName') + ', display name : ' + records[0].get('displayName'));
		});
		
		console.log('Session storage operation has completed');
	}
});
 