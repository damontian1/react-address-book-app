var React = require("react");
var Actions = require("../actions/Actions.js");

var Contact = React.createClass({

	render: function(){
		return(
			<tr>
				<td>
					{this.props.contact.name}
				</td>
				<td>
					{this.props.contact.phone}
				</td>
				<td>
					{this.props.contact.email}
				</td>
				<td>
					{/* bind will pass up to handleDelete the current iteration's value which is an object */} 
					<a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>EDIT</a>
					<a href="#" className="btn btn-danger btn-spacing" onClick={this.handleDelete.bind(this, this.props.contact.id)}>DELETE</a>
				</td>
			</tr>
		)
	},

	handleDelete: function(id, event){
		Actions.deleteContact(id);
	},
	handleEdit: function(contact, event){
		Actions.editContact(contact);
	}

})

module.exports = Contact;