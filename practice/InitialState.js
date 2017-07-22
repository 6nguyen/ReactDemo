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
            textColor: "white",
            backgroundColor: "darkslategrey"
        }
    },
    
    // Randomly changes text color
    handleTextColorClick: function() {
        var colors = ['gold', 'lawngreen', 'orangered', 'fuchsia', 'black'];
        var colorIndex = Math.floor(Math.random()*colors.length);
        this.setState({
            textColor: colors[colorIndex]             
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
                    Hello REACT World!
                </div>
            
                <button className="button" onClick={this.handleTextColorClick}>
                    Change Text Color
                </button>
            </div>

        );
    }
    
});

ReactDOM.render(<Box />, document.getElementById('component1'));