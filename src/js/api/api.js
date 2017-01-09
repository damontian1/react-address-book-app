var Firebase = require("firebase");
var Actions = require("../actions/Actions.js");

module.exports = {
	keepContact: function(contact){
		this.firebaseRef = new Firebase("address-book-app-8ad80.firebaseio.com/contacts");
		this.firebaseRef.push({contact: contact});
		console.log(this.firebaseRef)
	},
	getContacts: function(){
		this.firebaseRef = new Firebase("address-book-app-8ad80.firebaseio.com/contacts");
		this.firebaseRef.once("value", function(snapshot){
			var contacts = [];
			snapshot.forEach(function(snap){
				var contact = {
					id: snap.key(),
					name: snap.val().contact.name,
					phone: snap.val().contact.phone,
					email: snap.val().contact.email
				};
				contacts.push(contact);
				Actions.receiveContacts(contacts);
			});


		});
	},
	removeContact: function(id){
		this.firebaseRef = new Firebase("address-book-app-8ad80.firebaseio.com/contacts/"+id);
		this.firebaseRef.remove();
	},
	updateContact: function(contact){
		var id = contact.id
		var updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		}
		this.firebaseRef = new Firebase("address-book-app-8ad80.firebaseio.com/contacts/"+id+"/contact");
		this.firebaseRef.update(updatedContact);
	}

};