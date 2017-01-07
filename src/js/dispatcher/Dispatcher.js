var Dispatcher = require("flux").Dispatcher;
var assign = require("object-assign");

var Dispatcher = assign(new Dispatcher(), {
	handleViewAction:function(action){
		var data = {
			source: "VIEW_ACTION",
			action: action
		}
		this.dispatch(data);
	}


});

module.exports = Dispatcher;