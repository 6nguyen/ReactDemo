/* 
    Javascript is NOT a type-specific language, so variables can change type.
    React, however, does support types.  Must be assigned with propTypes:{}
    If a type is incorrect, it will show up in debugger console, but still execute.
    This ONLY WORKS IN DEVELOPER, NOT PRODUCTION, to make sure things work.
*/

var Contents = React.createClass ({
   propTypes: {
       string: React.PropTypes.string,
       int: React.PropTypes.number,
       boolean: React.PropTypes.bool,
       notString: React.PropTypes.string,
       notInt: React.PropTypes.number,
       notBool: React.PropTypes.bool,
   },
    
    getDefaultProps: function() {
        return {
            string: "This is a string",
            int: 4,
            boolean: true,
            
            notString: 4,
            notInt: false,
            notBool: "This is not a boolean"
        };
    },
    
    render: function() {
        return (
            <div className="contents">
                <div>String: {this.props.string}</div>
                <div>Integer: {this.props.int}</div>
                <div>Boolean: {this.props.boolean ? "True" : "False"}</div>
                <br/>
                <div>Not String: {this.props.notString}</div>
                <div>Not Integer: {this.props.notInt ? "false" : "true"}</div>
                <div>Not Boolean: {this.props.notBool}</div>
            </div>
        );
    }
});


ReactDOM.render(<Contents />, document.getElementById('component1'));