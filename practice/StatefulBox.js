/*
    Stateful components, demonstrated using a stateful box.
    This example only demonstrates initial state, not changing a state.
*/

// Box has a background color and text
// Both properties are part of the STATE of the box
var Box = React.createClass({
    
    // getInitialState determines what state a component starts in
    getInitialState: function() {
        return {
            text: "Hello REACT World",
            textColor: "white",
            backgroundColor: "darkslategrey"
        }
    },
    
    // Randomly changes text color
        // Need to update the state with the new text color and re-render the box
        // setState automatically re-renders this component AND ALL ITS child components
        // Takes an object as its arg, only specify props that have changed
        // Don't need to include backgroundColor since it hasn't changed
    handleTextColorClick: function() {
        var colors = ['gold', 'lawngreen', 'orangered', 'fuchsia', 'black'];
        var colorIndex = Math.floor(Math.random()*colors.length);
        
        this.setState({
            textColor: colors[colorIndex]             
        });
    },
    
    
    // Randomly changes background color
    handleBackgroundColorClick: function() {
        var colors = ['white', 'blue', 'purple', 'aquamarine', 'indianred'];
        var colorIndex = Math.floor(Math.random()*colors.length);
        
        this.setState({
           backgroundColor: colors[colorIndex] 
        });
    },
    
    
    // Randomly changes both text and background color
    handleBothColorClick: function() {
        var colors = ['white', 'blue', 'purple', 'aquamarine', 'indianred',
                     'gold', 'lawngreen', 'orangered', 'fuchsia', 'black'];
        var textIndex = Math.floor(Math.random()*colors.length);
        var bgIndex = Math.floor(Math.random()*colors.length);
        
        this.setState({
           backgroundColor: colors[textIndex],
            textColor: colors[bgIndex]
        });
    },
        
    
    
    // Object divStyle is all the properties we want to apply to the box
    // access the props from the state variables
    render: function() {
        const divStyle = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor 
        };
        
        // create a box with the styles from divStyle
        return (
            <div>
                <div className="box" style={divStyle}>
                    {this.state.text}
                </div>
            <br/>
                <button className="button" onClick={this.handleTextColorClick}>
                    Change Text Color
                </button>
            <br/><br/>
                <button className="button" onClick={this.handleBackgroundColorClick}>
                    Change Background color
                </button>
            <br/><br/>
                <button className="button" onClick={this.handleBothColorClick}>
                    Change BOTH?!
                </button>
            </div>

        );
    }
    
});

ReactDOM.render(<Box />, document.getElementById('component1'));