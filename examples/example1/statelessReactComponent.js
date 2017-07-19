// React.createClass creates a reusable component
// takes in a "specification object" as its arg
// the spec object contains all the characteristics of the component
// every createClass must contain a render to tell the component what to display
var helloWorld = React.createClass({
	render: function() {
		return React.createElement('h3', {className: 'highlight'}, 'Hello world, from a component!');
	}
});