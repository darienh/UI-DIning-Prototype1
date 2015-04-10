var feedbackMsg = Ti.UI.createLabel({
	color:'#525252',
	text:'We would like to hear from you! Let us know how we are doing.',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'center',
	width:'auto',
	top:'10%',
	left:'10%',
	right:'10%'
}); 


var emailField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  keyboardType: Ti.UI.KEYBOARD_EMAIL,
  retrunKeyType: Titanium.UI.RETURNKEY_NEXT,
  hintText: 'Type your e-mail here',
  top: '20%', 
  width: 270, 
  height: 30
});

var commentArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:16, fontFamily:'Calibri'},
  keyboardType: Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType: Titanium.UI.RETURNKEY_DONE,
  value:'Type your comment here. Date and time of service, venue name, service, food quality, etc...',
  top: '30%', 
  width: 270, 
  height: 250,
  textAlign:'left'
});
//commentArea.setSelection(0, 0);

var submitBtn = Ti.UI.createButton({
	title:'Submit'
});


/*
submitBtn.addEventListener('click', function() {
		alert('Thank you! We have recieved your comment.');
		win4.open();
});
*/