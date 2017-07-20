/* Accessing component properties from a parent container

    Container is the parent container which DOES NOT use the getDefaultProps method.
    Instead, it creates a few properties INTO Contents, the child
*/

var Container = React.createClass({
   
    render: function() {
        return (
            <div className="container">
                <Contents text = "These properties are in the parent container" />
                <Contents text = "But they're being accessed by the child container"/>
                <Contents text = "Hard-coded text child" />
                <Contents text = {"Javascript expression text child"} />
            </div>
        );
    }
    
});



var Contents = React.createClass({
   render: function() {
       return (
           <div className="outer">
                {this.props.text}           
           </div>
       );
   } 
});


ReactDOM.render(<Container />, document.getElementById('container'));