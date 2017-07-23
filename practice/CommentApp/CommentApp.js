/*
	A commenting web app that allows users to type in a comment and see it displayed
	below.  Comments can be deleted once they are posted.
	UI files are kept in
*/

// Step 1:  Create the Comment component for a single comment
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

// Step 3: Create the CommentList component to display list of comments
	// render a commentList div to contain a list of Comment components
	// hardcode the fragment key values first, to test if it displays properly
var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<Comment key={1} />
				<Comment key={2} />
				<Comment key={3} />
				<Comment key={4} />
			</div>
		);
	}
});


// Step 2: Render the single comment component to screen to make sure everything works
ReactDOM.render(<CommentList />, document.getElementById('component1'));