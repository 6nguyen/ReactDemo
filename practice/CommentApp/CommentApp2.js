/*
	A commenting web app that allows users to type in a comment and see it displayed
	below.  Comments can be deleted once they are posted.
	UI files are kept in
*/

// Step 1:  Create the Comment component for a single comment
var Comment = React.createClass({
    
	// Step 2:  Render the comment box that holds profile photo, message text, and delete photo
    render: function() {
        return (
            <table className="commentBox">
                <tbody>
                    <tr>
                        <td className="profilePhoto" >
                            <img src = "images/happyface.png" />
                        </td>
                        <td className="messageText" >
                            Placeholder comment...
                        </td>
                        <td className="deleteIcon" >
                            <img src="images/delete.png" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
});

// Step 4: Create the CommentList component to display list of comments
	// render a commentList div to contain a list of Comment components
	// hardcode the fragment key values first, to test if it displays properly
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment key={1}/>
                <Comment key={2}/>
                <Comment key={3}/>
                <Comment key={4}/>
            </div>
        );
    }
});


// Step 6:  Create CommentBox component to add a new comment
	// render: newCommentBox, inputText, postButton
	// commentBox contains the new comment/message
	// input is the input field to enter text
	// button is the 'Post' button to post the comment
var CommentBox = React.createClass({
    render: function() {
        return(
            <div className="newCommentBox" >
                <input className="inputText" />
                <button className="postButton" >
                    post
                </button>
            </div>
        );
    }
    
});

// Step 8:  Create CommentApp component to combine CommentBox & CommentList components
var CommentApp = React.createClass({
    render: function() {
        return (
            <div>
                <CommentBox />
                <CommentList />
            </div>
        );
    }
})
    

// Step 3: Render the single Comment component to screen to make sure everything works
// Step 5: Render the CommentList component to see if displays a list of comments
// Step 7: Render the CommentBox component to see if it displays a comment posting box
// Step 9: Render the CommentApp component to see if it displays both comment box and list
ReactDOM.render(<CommentApp />, document.getElementById('component1'));



