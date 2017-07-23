// Set up a counter func/component

// Step 1:  Create a Counter React element
var Counter = React.createClass({



	// Step 2:  Specify initial state for box
	getInitialState: function() {
		return {
			text1: "Increment counter by clicking the button below.",
			text2: "Hold down 'shift' and 'alt' while clicking to increment by 5 and 100 respectively.",
			counter: 0
		}
	},


	// Step 4: Create function to increment based on event
	handleIncrement: function(event) {
		var increment = 1;

		if (event.shiftKey) {
			increment = 5;
		}
		if (event.altKey) {
			increment = 100;
		}

		this.setState(function (prevState) {
			return {
				counter: prevState.counter + increment
			}
		});
	},


	// Step 3:  Render text and counter into a box
	render: function() {
		return (
			<div>
				<div className="box">
					<div>
						{this.state.text1}
					</div>
					<div>
						{this.state.text2}
					</div>
					<div>
						{this.state.counter}
					</div>
					<button className="button" onClick={this.handleIncrement}>
						Increment
					</button>
				</div>
			</div>

		);
	}


});

// Step 5: Render the component to screen
ReactDOM.render(<Counter />, document.getElementById('component1'));