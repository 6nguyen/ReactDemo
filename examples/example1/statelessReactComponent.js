
// Using Javascript to render components *****************************************



// React.createClass creates a reusable component
// takes in a "specification object" as its arg
// the spec object contains all the characteristics of the component
// every createClass must contain a render to tell the component what to display
var helloWorld = React.createClass({
	render: function() {
		return React.createElement('h3', {className: 'highlight'}, 'Hello world, from a component!');
	}
});





// Using JSX to render components ***********************************************
var helloWorldJSX = React.createClass({
	render: function() {
		return <h3 className='highlight-jsx'>
            Hello world, from a component using JSX!
        </h3>
    }
});



// Creates the element above and renders it to screen
var reactComponentElement = React.createElement(helloWorld);
ReactDOM.render(reactComponentElement, document.getElementById('reactClass1'));

ReactDOM.render(<helloWorld/> , document.getElementById('reactClass2'));
ReactDOM.render(<helloWorldJSX/> , document.getElementById('reactClass3'));