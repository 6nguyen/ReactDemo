/*
    Accessing a components previous state
    We set up a counter that increments by accessing the previous counter value
*/


var Counter = React.createClass({
    
    // In specification, we specify inital counter value is 0
    // counter value is part of our state.
    // changing the counter value will cause a re-render and new value will be displayed
    getInitialState: function() {
        return {
            text: "This counter increases by 1 every 0.05 seconds:",
            counter: 0
        }
    },
    
    // increments the counter by the incrememnt value
    // setState using callback function as arg
    // callback sets new state of counter by accessing previous/current state
    //  at time incrementCounter is called and adds the increment value
    incrementCounter: function() {
        this.setState(function(prevState, props) {
           return {
               counter: prevState.counter + props.increment
           } 
        });
    },
    
    // renders the counter value into a box
    // setTimeout calls arg1 every 1.5 seconds
    render: function() {
        setTimeout(this.incrementCounter, 50);
        
        return (
            <div>
                <div className="box">
                    {this.state.text}
                    <br/>
                    {this.state.counter}
                </div>
            </div>
        );
    }
});

// Sets the counter increment value to 5
ReactDOM.render(<Counter increment={1} />, document.getElementById('component1'));