
var topLabel = Titanium.UI.createLabel({
	text:'Vandal Dining',
	backgroundColor:'#444444',
	color:'#b18e5f',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'25',
	top:'20',
	width:'100%',
	textAlign:'center',
});

//win3.add(topLabel); COPIED to app.js

var ulabel = Titanium.UI.createLabel({
	text:'Username',
	color:'#444444',
	font:{fontSize:20,fontFamily:'Times New Roman'},
	height:'20',
	top:'55',
	left:'20',
});

//win3.add(ulabel); COPIED to app.js

var username = Titanium.UI.createTextField({
	text:'Enter your Net ID',
	font:{fontSize:18,fontFamily:'Times New Roman'},
	backgroundColor:'#fff',
	height:'20',
	width:'90%',
	top:'80',
	textAlign:'center',	
});

//win3.add(username); COPIED to app.js

var plabel = Titanium.UI.createLabel({
	text:'Password',
	color:'#444444',
	font:{fontSize:20,fontFamily:'Times New Roman'},
	height:'20',
	top:'105',
	left:'20',
});

//win3.add(plabel); COPIED to app.js

var password = Titanium.UI.createTextField({
	text:'Enter your password',
	font:{fontSize:18,fontFamily:'Times New Roman'},
	backgroundColor:'#fff',
	height:'20',
	width:'90%',
	top:'130',
	textAlign:'center',	
});

//win3.add(password); COPIED to app.js

var signin = Ti.UI.createButton({
	title:'Sign In',
	color:'#b18e5f',
	backgroundColor:'#444444',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'25',
	width:'35%',
	top:'160',
	textAlign:'center',
});

//win3.add(signin); COPIED to app.js

//win2 changed to winProfile
signin.addEventListener('click', function() {
	winProfile.open();
});

var winProfile = Titanium.UI.createWindow({
	title:'Profile',
	backgroundColor:'#fff'
});

var topLabel2 = Titanium.UI.createLabel({
	text:'Vandal Dining',
	backgroundColor:'#444444',
	color:'#b18e5f',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'25',
	top:'20',
	width:'100%',
	textAlign:'center',
});

winProfile.add(topLabel2);

var signout = Ti.UI.createButton({
	title:'Sign Out',
	color:'#b18e5f',
	backgroundColor:'#444444',
	font:{fontSize:12,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'12',
	width:'60',
	top:'55',
	left:'5',
	textAlign:'center',
});

winProfile.add(signout);

signout.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	winProfile.close();
});

var profile = Ti.UI.createImageView({
	image:'/images/profile.jpg',
	top:'67',
	height:'85%',
	width:'100%',
});

winProfile.add(profile);

