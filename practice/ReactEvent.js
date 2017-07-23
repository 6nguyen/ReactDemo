// Set up a counter func/component

// Step 1:  Create a Counter React element
var Counter = React.createClass({

	// Step 2:  Specify initial state for box
	getInitialState: function() {
		return {
			text: "This counter can be incremented: ",
			counter: 0
		}
	},



	// Step 4: Create function to detect Events
	logEvent: function(e) {
		console.log("Event type: " + e.type + "  Counter value: " + this.state.counter);
	},


	// Step 5:  Create function to handle button click
	// Accepts a Synthetic Event as arg
	// Synthetic events wrap all React events 
	handleIncrementClick: function(e) {
		this.logEvent(e);
		this.setState(function(prevState, props) {
			return {
				counter: prevState.counter + 1
			}
		});	
	},


	// Step 3:  Render text and counter into a box
	render: function() {
		return (
			<div>
				<div className="box">
					{this.state.text}
					<br/>
					{this.state.counter}
				</div>

				<button classNme="button" 
				onClick={this.handleIncrementClick}
				onMouseOverCapture={this.logEvent}>
					Increment Counter
				</button>
			</div>
		);
	}
});

// Step 5: Render the component to screen
ReactDOM.render(<Counter />, document.getElementById('component1'));