var Dispatcher = require("../dispatcher/Dispatcher.js");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var api = require("../api/api.js");

var _contacts = [];
var _contactToEdit = "";

var Store = assign({},EventEmitter.prototype, {
	
	// updates contact state on client-side
	getContacts: function(){
		return _contacts;
	},
	// updates contactToEdit state on client-side
	getContactToEdit:function(){
		return _contactToEdit;
	}, 
	keepContact: function(contact){
		_contacts.push(contact);
	},
	keepContacts:function(contacts){
		_contacts = contacts;
	},
	setContactToEdit:function(contact){
		_contactToEdit = contact;
	},
	updateContact:function(contact){
		for(var i = 0; i < _contacts.length; i++){
			if(_contacts[i].id === contact.id){
				_contacts.splice(i,1);
				_contacts.push(contact)
			}
		}
	},
	removeContact:function(id){
		var index = _contacts.findIndex(function(element){
			return element.id === id;
		});
		_contacts.splice(index,1);
	},
	emitChange: function(callback){
		this.emit("change");
	},
	addChangeListener: function(callback){
		this.on("change", callback);
	},
	removeChangeListener: function(callback){
		this.removeListener("change", callback);
	}

});

Dispatcher.register(function(data){
	switch(data.action.actionType){
		case "KEEP_CONTACT":
			// save to state
				Store.keepContact(data.action.contact);

			// save to firebase API
				api.keepContact(data.action.contact);
			// emit
				Store.emitChange(data.action.contact);
				break;

		case "RECEIVE_CONTACTS":

			// save api to store
				Store.keepContacts(data.action.contacts);
			// emit
				Store.emitChange(data.action.contact);
				break;

		case "DELETE_CONTACT":
			// remove from store
				Store.removeContact(data.action.id);
				
			// remove from api
				api.removeContact(data.action.id);
			// emit
				Store.emitChange(data.action.id);
				break;

		case "EDIT_CONTACT":
			// remove from store
				Store.setContactToEdit(data.action.contact);
			
			// emit EDIT ACTION trigger to client-side
				Store.emitChange(data.action.contact);
				break;

		case "UPDATE_CONTACT":
				// update store
				Store.updateContact(data.action.contact);
				// update api
				api.updateContact(data.action.contact);
			
			// emit EDIT ACTION trigger to client-side
				Store.emitChange(data.action.contact);
				break;

	}	

	return true;
});

module.exports = Store;