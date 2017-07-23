/*
	A commenting web app that allows users to type in a comment and see it displayed
	below.  Comments can be deleted once they are posted.
	UI files are kept in
*/

// Step 1:  Create the Comment component
var Comment = React.createClass ({


	// Step 2:  Render the comment box, profile photo, message box, and delete photo
	render: function() {
		return (
			<table className="commentBox">
				<tbody>
					<tr>
						<td className="profilePhoto">
							<img src="images/happyface.png" />
						</td>
						<td className="messageText">
							Write your own comment!
						</td>
						<td className="deleteIcon">
							<img src="images/delete.png" />
						</td>					
					</tr>
				</tbody>
			</table>
		);

	}


});

ReactDOM.render(<Comment />, document.getElementById('component1'));