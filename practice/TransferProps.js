/* 
    Component properties can be transferred to child components.
    The Name prop is displayed by the Student component.
    The Grade and Courses props are displayed by the Academic component.
    The Clubs prop is displayed by the Extras componenet.
*/

// Outer/Parent component that contains TWO nested components (Academic & Extras)
// Student component retrieves property values from ReactDOM.render on bottom of page.
// Then it passes the corresponding prop values to its children
var Student = React.createClass({       
   render: function() {
       return (
            <div className="student">
                <div>
                    Name: {this.props.name}
                </div>
                <Academic   grade={this.props.grade}
                            courses={this.props.courses} />
                <Extras     clubs={this.props.clubs} />
                <br/>
            </div>
       );
   } 
});

// Child component of Student.  Sibling of Extras
// Expects the grade and courses properties from Student parent component
// 
var Academic = React.createClass({
   render: function() {
       return (
            <div className="academic">
                <div>
                    Grade: {this.props.grade}
                </div>
                <div>
                    Courses: {this.props.courses}
                </div>
            </div>
       );
   } 
});

// Child component of Student. Sibling of Academic
// Expects the clubs property from Student parent component
var Extras = React.createClass({
   render: function() {
       return (
            <div className="extras">
                <div>
                    Clubs: {this.props.clubs}
                </div>
            </div>
       );
   } 
});

// Assigning property values to Student objects
ReactDOM.render(<Student 
                    name="John"
                    grade="9"
                    clubs="BCEC"
                    courses="Human Biology, Physics"
                />, document.getElementById('component1'));
ReactDOM.render(<Student
                    name="Liz"
                    grade="12"
                    clubs="Chess, Science"
                    courses="Statistics, Literature"
            />, document.getElementById('component2'));