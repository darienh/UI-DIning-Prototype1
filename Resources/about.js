/* This is the About Page, include info about the app and provider of UI campus dining */

var appInfo = Ti.UI.createLabel({
	color:'#525252',
	text:'App Version:\n0.0.0\n\nApp Prototype Created By:\nEverett Boker\nJessica Greene\nDarien Huang\nClair Johnson',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'center',
	width:'auto',
	top:'10%'
}); 

var diningInfo = Ti.UI.createLabel({
	color:'#525252',
	text:'Dining service at University of Idaho\nis provided by Sodexo\nContact:\nemail@sample.com\n1080 W 6th St. Room 231\nMoscow, ID 83843',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'center',
	width:'auto',
	top:'45%'
}); 

var mealplanInfo = Ti.UI.createLabel({
	color:'#525252',
	text:'Vandals Dining meal plan is managed by\nVandal Card Office\nContact:\nemail: campusdining@uidaho.edu\nphone: (208) 885-6070',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'center',
	width:'auto',
	top:'75%'
}); 


