
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
var helloUniverse = React.createClass({
    render: function() {
      return (
          <p className='highlight-jsx'>Hello, Universe</p>
          );
    }
  });

var helloWorldJSX = React.createClass({
	render: function() {
		return ( 
            <h3> Hello world, from a component using JSX! </h3>   
        );
    }
});

var helloJSX = React.createClass ({
   render: function() {
       return (
            <h3> Hello, I'm using JSX right now!</h3> 
       );
   }   
});


// Creates the element above and renders it to screen ***************
var reactComponentElement = React.createElement(helloWorld);
var reactComponentElement2 = React.createElement(helloUniverse);
var reactComponentElement3 = React.createElement(helloWorldJSX);
ReactDOM.render(reactComponentElement, document.getElementById('reactClass1'));
ReactDOM.render(reactComponentElement2, document.getElementById('reactClass2'));
ReactDOM.render(reactComponentElement3, document.getElementById('reactClass3'));


// Render elements by directly calling var name **********
// ********** BUG NOT WORKING **********************************
ReactDOM.render(<helloJSX />, document.getElementById("reactClass4"));
ReactDOM.render(<helloWorldJSX />, document.getElementById('reactClass5'));




