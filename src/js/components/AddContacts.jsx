var React = require("react");
var Actions = require("../actions/Actions.js")

var AddContacts = React.createClass({
	
	render: function(){
		return(
			<div className="well">
				<h3>Add Contacts</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group" >
						<input type="text" ref="name" className="form-control" placeholder="Enter Contact Name"/>
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" placeholder="Enter Contact Phone Number"/>
					</div>
					<div className="form-group">
						<input type="text" ref="email" className="form-control" placeholder="Enter Contact Email"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	},

	onSubmit:function(e){
		e.preventDefault()

		var contact = {
			name: this.refs.name.value.trim(),
			email: this.refs.email.value.trim(),
			phone: this.refs.phone.value.trim()
		}

		Actions.keepContact(contact);
	}

})

module.exports = AddContacts;