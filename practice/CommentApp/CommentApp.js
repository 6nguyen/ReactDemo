/*
	A commenting web app that allows users to type in a comment and see it displayed
	below.  Comments can be deleted once they are posted.
	UI files are kept in
*/

// Step 1:  Create the Comment component for a single comment
var Comment = React.createClass ({


	// Step 2:  Render the comment box, profile photo, message text, and delete photo
	render: function() {
		return (
			<table className="commentBox">
				<tbody>
					<tr>
						<td className="profilePhoto">
							<img src="images/happyface.png" />
						</td>
						<td className="messageText">
							{this.props.message}	
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
	// <Comment key={1} />
// Step 10: Replace hard coded messages with initialState messages
	// map this.prop.messages to a lambda expression
	// lambda expr turns each element of messages into a Comment component 'message'
	// accepts 'message' as arg, and returns Comment type. 'message' is made up name
	// makes its arg its key since all messages will be unique and sets message=arg
var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList"> {
				this.props.photos.map(
					(tempPicture) => <Comment key={tempPicture} picture={tempPicture} />
				),
				this.props.messages.map(
					(tempMessage) => <Comment key={tempMessage} message={tempMessage} />
				)
			}
			</div>
		);
	}
});


// Step 5:  Create CommentBox component to add a new comment
	// render: commentBox, input, button
	// commentBox contains the new comment/message
	// input is the input field to enter text
	// button is the 'Post' button to post the comment
// Step 12: Add input ref attribute, ref="someName" to access input value 
	// Add addComment func to call CommentApp's addComment func before render func
	// Pass in the comment input value as its arg with this.refs.someName.value
	// Add addComment functionality to post button
var CommentBox = React.createClass({
	addComment: function() {
		this.props.addComment(this.refs.commentInput.value);
	},
	render: function() {

		return (
			<div className="newCommentBox">
				<input ref="commentInput" className="inputText" />
				<button className="postButton" onClick={this.addComment}>
					Post
				</button>
			</div>
		);
	}
});

// Step 7:  Create CommentApp component 
// Step 9:  Specify initial state for messages: values
// Step 11: Create addComment method to change state 'messages' at HIGH level
//		addComment accesses prevState to get the old list of comments and append
// 		the new comment, creating a new list of comments.
// 		A newMessages array is created by copying the prevState messages using .concat()
// 		The new comment is pushed into this new array.
//		setState returns an object of the changed states and their value pairs
//		Then include addComment into render func <CommentBox />
var CommentApp = React.createClass({
	getInitialState: function () {
		return {
			messages: [
				"LMAO this made my day!",
				"I can't even right now...",
				"Literally was just thinking the same thing!",
				"Lol preach girl"
			],
			photos: [
				"images/happyface.png",
				"images/delete.png",
				"images/happyface2.png",
				"images/delete2.png"
			]
		}
	},
	addComment: function(comment) {
		this.setState(function(prevState){
			var newMessages = prevState.messages.concat();
			newMessages.push(comment);
			return {
				messages: newMessages
			}
		});
	},
	render: function() {
		return (
			<div>
				<CommentBox addComment={this.addComment}/>
				<CommentList messages={this.state.messages} 
							 photos={this.state.photos} />
			</div>
		);
	}
});


// Step 2: Render the single Comment component to screen to make sure everything works
// Step 4: Render the CommentList component to see if it works
// Step 6: Render the CommentBox component to see if it works
// Step 8: Render CommentApp and make sure it displays both components.
// 			Delete other ReactDOM.render
ReactDOM.render(<CommentApp />, document.getElementById('component1'));
