/* Accessing component properties from a parent container

    Container is the parent container which DOES NOT use the getDefaultProps method.
    Instead, it creates a few properties INTO Contents, the child
*/
// Container1 creates properties into Contents
var Container1 = React.createClass({
    render: function () {
        return (
            <div className="container">
                <Contents text = "These properties are in the parent container" />
                <Contents text = "But they're being accessed by the child container"/>
                <Contents text = "Hard-coded text child" />
            </div>
        );
    }
});


// Container 2 simply has a property, "thing", and creates javascript expressions into Context
var Container2 = React.createClass({
    thing: "This text is just a property of Container2",
    render: function() {
       return (
            <div className="container2">
                <Contents text = {"This container contains javascript expressions"} />
                <Contents text = {this.thing} />
                <Contents text = {1+2+3+4+5} />
            </div>
       );
   } 
});


// Contents inherits all the properties from Container1 and Container2 and displays
// its parents' properties onto the screen.
var Contents = React.createClass({
   render: function() {
       return (
           <div className="contents">
                {this.props.text}     
           </div>
       );
   } 
});


ReactDOM.render(<Container1 />, document.getElementById('component1'));
ReactDOM.render(<Container2 />, document.getElementById('component2'));