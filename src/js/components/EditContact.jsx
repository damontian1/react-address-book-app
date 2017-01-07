var React = require("react");
var Actions = require("../actions/Actions.js")

var EditContact = React.createClass({

	render: function(){
		return(
			<div className="well">
				<h3>Edit Contact</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group" >
						<input type="text" ref="name" className="form-control" value={this.props.contactToEdit.name} onChange={this.handleChange.bind(this, "name")}/>
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" value={this.props.contactToEdit.phone} onChange={this.handleChange.bind(this, "phone")}/>
					</div>
					<div className="form-group">
						<input type="text" ref="email" className="form-control" value={this.props.contactToEdit.email} onChange={this.handleChange.bind(this, "email")}/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	},
	handleChange: function(field,e){
		var selected = this.props.contactToEdit
		selected[field] = e.target.value
		this.setState({
			selected: selected
		})
	},

	onSubmit:function(e){
		e.preventDefault()

		var contact = {
			id: this.props.contactToEdit.id,
			name: this.refs.name.value.trim(),
			email: this.refs.email.value.trim(),
			phone: this.refs.phone.value.trim()
		}
		Actions.updateContact(contact)
	}


})

module.exports = EditContact;