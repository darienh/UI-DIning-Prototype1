/*
 * What if I just make labels?
 */
var nameLabel = Ti.UI.createLabel({
	color:'#525252',
	text:'MenuItem Name',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'center',
	top:'10%'
}); 

var infoLabel = Ti.UI.createLabel({
	color:'#525252',
	text:'Calories\n\nCalories from Fat\n\nTotal Fat\n\n    Saturated Fat\n\n    Trans Fat\n\nProtein\n\nSodium',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'left',
	top:'20%',
	left:'23%'
}); 

var numberLabel = Ti.UI.createLabel({
	color:'#525252',
	text:'235\n\n322\n\n1g\n\n2g\n\n0g\n\n12%\n\n20g',
	font:{fontSize:16, fontFamily:'Calibri'},
	textAlign:'left',
	top:'20%',
	left:'67%'
});


/*
 * 
 function nutritionView() {
	
	var nutrBackgroundView = Ti.UI.createView({
		backgroundColor:'#ffffff' //'#F2EDCB'
	});
	
	var tableView = Ti.UI.createTableView({
			style: Ti.UI.iPhone.TableViewStyle.GROUPED,
			//backgroundColor:'#F2EDCB',
			scrollable: true
	});
	
	var firstSection = Ti.UI.createTableViewSection({
		headerTitle: 'Nutrition Info'
	});
	var secondSection = Ti.UI.createTableViewSection({
		headerTitle: 'Contains'
	});
													
	var firstRow = Ti.UI.createTableViewRow({
		title: 'Serving Size:                     one portion',
		//backgroundColor: '#ffffff', //color of the row
		color:'#525252', //color of the text
		textAlign:'center'
	});
	
	var secondRow = Ti.UI.createTableViewRow({
		title: 'Calories:                                        345',
		backgroundColor: '#EEEEF3',
		color:'#525252',
		textAlign:'center'
		});
	
	var thirdRow = Ti.UI.createTableViewRow({
		title: 'Total Fat:                              20g',
		backgroundColor: '#EEEEF3',
		color:'#525252'
		});
		
	var fourthRow = Ti.UI.createTableViewRow({
		title: '  Saturated Fat',
		backgroundColor: '#EEEEF3',
		color:'#525252'
	});
	
	var fifthRow = Ti.UI.createTableViewRow({
		title: 'Calcium',
		backgroundColor: '#EEEEF3',
		color:'#525252'
	});
	
	
	

	firstSection.add(firstRow);
	firstSection.add(secondRow);
	firstSection.add(thirdRow);
	firstSection.add(fourthRow);
	firstSection.add(fifthRow);
	tableView.setData([firstSection]);
	tableView.setDate([secondSection]);
	nutrBackgroundView.add(tableView);
	return nutrBackgroundView;
};
*/
