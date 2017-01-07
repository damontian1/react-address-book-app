var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var AddContacts = require("./AddContacts.jsx");
var api = require("../api/api.js");
var ContactList = require("./ContactList.jsx");
var EditContact = require("./EditContact.jsx");


function updateAppState(){
	return{
		contact: Store.getContacts(),
		contactToEdit: Store.getContactToEdit()
	};
}


var App = React.createClass({

	getInitialState: function(){
		return updateAppState();
	},
	componentDidMount: function(){
		Store.addChangeListener(this._onChange)
	},
	componentUnmount: function(){
		Store.removeChangeListener(this._onChange)
	},

	render: function(){
		{
			if(this.state.contactToEdit === ""){
				var contactForm = <AddContacts />
			}
			else{
				var contactForm = <EditContact contactToEdit={this.state.contactToEdit}/>
			}
		}
		return(
			<div>
				{contactForm}
				<ContactList contact={this.state.contact}/>
			</div>
		)
	},

	_onChange: function(){
		this.setState(updateAppState())

	},


})

module.exports = App;