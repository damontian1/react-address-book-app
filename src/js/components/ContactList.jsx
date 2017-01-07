var React = require("react");
var Actions = require("../actions/Actions.js")
var Contact = require("./Contact.jsx")

var ContactList = React.createClass({
	
	render: function(){
		return(
			<div>
				<h3>Contacts</h3>
				<table className="table table-striped table-bordered">
					<thead>
						<tr className="success">
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
							{
								this.props.contact.map(function(item, i){
									return(
										<Contact key={i} contact={item}/>
									)
								})
							}
					</tbody>
				</table>

			</div>
		)
	}

})

module.exports = ContactList;