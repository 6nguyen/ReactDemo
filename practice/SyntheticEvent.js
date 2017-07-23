// Set up a counter func/component

// Step 1:  Create a Counter React element
var Counter = React.createClass({



	// Step 2:  Specify initial state for box
	getInitialState: function() {
		return {
			text: "Increment counter by clicking the button below, or pressing the 'alt' or 'shift' keys:",
			counter: 0
		}
	},


	// Step 4: Create function to increment based on event
	handleIncrement: function() {
		var increment = 1;

		this.setState(function (prevState) {
			return {
				counter: prevState.counter + increment
			}
		});
	},



	// Step 5:  Create function to handle button click




	// Step 3:  Render text and counter into a box
	render: function() {
		return (
			<div>
				<div className="box">
					<div>
						{this.state.text}
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

// Step 6: Render the component to screen
ReactDOM.render(<Counter />, document.getElementById('component1'));