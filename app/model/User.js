Ext.define('MyApp.model.User',{
	extend : 'Ext.data.Model',
	fields : [
		{name : 'userId',type : 'int'},
		{name : 'userName', type : 'string'},
		{name : 'displayName', type : 'string'}
	]
});
