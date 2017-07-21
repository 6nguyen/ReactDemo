/* 
    Javascript is NOT a type-specific language, so variables can change type.
    
    React, however, does support types.  Must be assigned with propTypes:{}
    If a type is incorrect, it will show up in debugger console, but still execute.
    This ONLY WORKS IN DEVELOPER, NOT PRODUCTION, to make sure things work.
    
    React also supports Prop validation with .isRequired
    If a prop with this validation is not specificed, error message will show in log.
    
    Validation can also be done with a method
*/

var Contents = React.createClass ({
   propTypes: {
       string: React.PropTypes.string,
       int: React.PropTypes.number,
       boolean: React.PropTypes.bool,
       
       notString: React.PropTypes.string,
       notInt: React.PropTypes.number,
       notBool: React.PropTypes.bool,
       
       required: React.PropTypes.string.isRequired,
       
       acceptedValues: function(properties, propertyName, componentName){
           var propertyValue = properties[propertyName];
           if (propertyValue != 'Hello' && propertyValue != 'Hey') {
               throw Error("The only accepted values are 'Hello' and 'Hey'.");
           }
       }
   },
    
    getDefaultProps: function() {
        return {
            string: "This is a string",
            int: 4,
            boolean: true,
            
            notString: 4,
            notInt: false,
            notBool: "This is not a boolean",
            
            acceptedValues: "Good Bye",
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
                <br/>
                <div>Required: {this.props.required}</div>
                <br/>
                <div>Unacceptable Value: {this.props.acceptedValues}</div>
            </div>
        );
    }
});


ReactDOM.render(<Contents />, document.getElementById('component1'));