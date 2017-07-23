// createClass compatable with all browsers, even those that don't support ES6
var Contents = React.createClass({
    
    // getDefaultProps is a React method
    // the properties set up can be accessed and used by the component
    // returns an object of properties and functions
    getDefaultProps: function() {
        return {
            text1: "This is the first text of this container",
            text2: "This is the second text of this container",
            text3: "This is the third and last text of the container"
        }
    },
    
    
    // {} denotes javascript expression
    // accesses props "text" value above
    render: function() {
        return (
            <div className="contents">
                {this.props.text1}
                <br/>
                {this.props.text2}
                <br/>    
                {this.props.text3}
            </div>
        );
    }
});

ReactDOM.render(<Contents />, document.getElementById('outer'));