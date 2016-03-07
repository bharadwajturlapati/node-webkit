/*var vizbase = require('./js/nw-core-lib/vizbase.js');
var vizinit =require('./js/nw-core-lib/vizinit.js');
var viztpartyc3 =require('./js/nw-core-lib/viztpartyc3.js');
var vizuigauge =require('./js/nw-core-lib/vizuigauge.js');
var vizuiline =require('./js/nw-core-lib/vizuiline.js');
var vizuipie =require('./js/nw-core-lib/vizuipie.js');
var vizuitable =require('./js/nw-core-lib/vizuitable.js');
var vizutils =require('./js/nw-core-lib/vizutils.js');*/

var loadwindowtools = function(){
	console.log("windowtools");
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var menu = new gui.Menu({'type': 'menubar'});
	// Add some items
	menu.append(new gui.MenuItem({ label: 'File' }));
	menu.append(new gui.MenuItem({ label: 'Tools' }));
	menu.append(new gui.MenuItem({ label: 'About' }));

	// Remove one item
	//menu.removeAt(1);

	// Popup as context menu
	//menu.popup();
	win.menu = menu;
}

var loadframesinwindow = function(){
	// gui related operations. dividing window pane into 3
}

var loadwidgetwindow = function(){
	// load widgets and functionality in left pane
}

var loadpropertywindow = function(){
	// load property window
}

var loadworkspace = function(){
	//load workspace
}