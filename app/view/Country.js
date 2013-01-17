Ext.define('MyApp.view.Country',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.country',
	title : 'Memory proxy testing',
	layout : {
		type : 'vbox'
	},
	height : 400,
	width : 400,
	items : [
		{
			xtype : 'combobox',
			store : 'CountryStore',
			fieldLabel : 'Select a country',
			displayField : 'country',
			valueField : 'country',
			queryMode : 'local',
			typeAhed : false
		}
	]
});
