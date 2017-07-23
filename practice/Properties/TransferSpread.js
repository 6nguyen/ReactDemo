/*
    Transferring Props with Spread Attributes:
    We need to find a better way to pass properties from Parent to Child.
    
*/

// Parent component
// {...this.props} is a Spread Operator
// the Spread Operator passes in ALL props that Student component received, to its children
// Can also override specific prop values by hard-coding after Spread Operator
var Student = React.createClass({
   render: function() {
       return (
        <div className="student">
            <div> Name: {this.props.name}</div>
            <Info {...this.props} school={'UC Tustin'}/>
            <br/>
        </div>
       );
   } 
});

// Child componenet to Student
var Info = React.createClass({
   render: function() {
     return (
         <div className="info">
            <div>School: {this.props.school}</div>
            <div>Grade: {this.props.grade}</div>
            <div>Courses: {this.props.courses}</div>
            <div>Clubs: {this.props.clubs}</div>
         </div>
     );  
   } 
});

ReactDOM.render(<Student
                    name="George Wynn"
                    school="N/A"
                    grade="12"
                    courses="BioEngineering, Artificial Intelligence"
                    clubs="Robotics, Motorcycle" />, document.getElementById("component1"));
ReactDOM.render(<Student
                    name="Ashley Mason"
                    school="N/A"
                    grade="11"
                    courses="Astro Physics, Statistics"
                    clubs="Cure for Cancer" />, document.getElementById("component2"));