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
	var mgetPlatform = getPlatform();
	window[IloadwindowToolsByPlatform[mgetPlatform]]();
}

var loadWinWindowTools = function(){
	console.log("loading window tools for windows");
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var menu = new gui.Menu({'type': 'menubar'});
	var File_menuitems = new gui.Menu();
	File_menuitems.append(new gui.MenuItem({ label: 'New' }));
	File_menuitems.append(new gui.MenuItem({ label: 'Open' }));
	File_menuitems.append(new gui.MenuItem({ label: 'Save' }));
	var Edit_menuitems = new gui.Menu();
	Edit_menuitems.append(new gui.MenuItem({ label: 'Undo' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Redo' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Cut' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Copy' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Paste' }));
	var Tools_menuitems = new gui.Menu();
	Tools_menuitems.append(new gui.MenuItem({ label: 'R' }));
	Tools_menuitems.append(new gui.MenuItem({ label: 'Python' }));
	Tools_menuitems.append(new gui.MenuItem({ label: 'Java' }));
	var About_menuitems = new gui.Menu();
	About_menuitems.append(new gui.MenuItem({ label: 'About RTP Visualization platorm' }));
	menu.append(new gui.MenuItem({ label: 'File' ,submenu: File_menuitems}));
	menu.append(new gui.MenuItem({ label: 'Edit',submenu:Edit_menuitems  }));
	menu.append(new gui.MenuItem({ label: 'Tools',submenu:Tools_menuitems  }));
	menu.append(new gui.MenuItem({ label: 'About' ,submenu: About_menuitems}));
	win.menu = menu;
}

var loadDarwinWindowTools = function(){
	console.log("loading window tools for mac");
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var menu = new gui.Menu({'type': 'menubar'});
	menu.createMacBuiltin('RTP Visualization Platform',{
		hideEdit: true,
		hideWindow: true
	});
	var File_menuitems = new gui.Menu();
	File_menuitems.append(new gui.MenuItem({ label: 'New' }));
	File_menuitems.append(new gui.MenuItem({ label: 'Open' }));
	File_menuitems.append(new gui.MenuItem({ label: 'Save' }));
	var Edit_menuitems = new gui.Menu();
	Edit_menuitems.append(new gui.MenuItem({ label: 'Undo' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Redo' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Cut' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Copy' }));
	Edit_menuitems.append(new gui.MenuItem({ label: 'Paste' }));
	var Tools_menuitems = new gui.Menu();
	Tools_menuitems.append(new gui.MenuItem({ label: 'R' }));
	Tools_menuitems.append(new gui.MenuItem({ label: 'Python' }));
	Tools_menuitems.append(new gui.MenuItem({ label: 'Java' }));
	var About_menuitems = new gui.Menu();
	About_menuitems.append(new gui.MenuItem({ label: 'About RTP Visualization platorm' }));
	menu.append(new gui.MenuItem({ label: 'File' ,submenu: File_menuitems}));
	menu.append(new gui.MenuItem({ label: 'Edit',submenu:Edit_menuitems  }));
	menu.append(new gui.MenuItem({ label: 'Tools',submenu:Tools_menuitems  }));
	menu.append(new gui.MenuItem({ label: 'About' ,submenu: About_menuitems}));
	win.menu = menu;
}

var IloadwindowToolsByPlatform = {
	"win32":"loadWinWindowTools",
	"darwin":"loadDarwinWindowTools"
}
var getPlatform = function(){
	var mplatformName = process.platform;
	return mplatformName;
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