var leaving = false;

function Hi() {
    return (
        <div className="blue">Hello world!</div>
    );
}

function Hi () {
    var now = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
            <div className="blue">
                Hey, today is {days[now.getDay()]}
            </div>
    );
}

function Bye() {
    return (
        <div className="pink">
            See you later
        </div>
    );
}

var Greeting = React.createClass({
   render: function() {
       if (leaving) {
           return <Bye/>
       } else {
           return <Hi/>
       }
   } 
});
       

       
ReactDOM.render(<Greeting />, document.getElementById("reactClass1"));