var Dispatcher = require("../dispatcher/Dispatcher.js");

var Actions = {
	keepContact: function(contact){
		Dispatcher.handleViewAction({
			actionType: "KEEP_CONTACT",
			contact: contact
		});
	},
	receiveContacts: function(contacts){
		Dispatcher.handleViewAction({
			actionType: "RECEIVE_CONTACTS",
			contacts: contacts
		});
	},
	deleteContact: function(id){
		Dispatcher.handleViewAction({
			actionType: "DELETE_CONTACT",
			id: id
		});
	},
	editContact: function(contact){
		Dispatcher.handleViewAction({
			actionType: "EDIT_CONTACT",
			contact: contact
		});
	},
	updateContact: function(contact){
		Dispatcher.handleViewAction({
			actionType: "UPDATE_CONTACT",
			contact: contact
		});
	}
};

module.exports = Actions;