// Child element function used to create nested components.
    

/* CLEAN CODE *********************************************************** */
/* Commented code below */

// Child function
function Numbers(props) {
    var numberList=[];
    
    for (var i=1; i<=props.upto; i++) {
        numberList.push(props.children(i));
    }
    return <div>{numberList}</div>;
}

// Parent function
function List(props){
    return (
        <Numbers upto={props.upto}>
            {(index) => <div key={index}> {index}. </div>}
        </Numbers>
    );
}

ReactDOM.render(<List upto={10} />, document.getElementById('component1'));

                
                
///* COMMENTED OUT CODE ******************************************************* */
//// CHILD COMPONENT/FUNCTION
//// Displays numbers in a list from 0 up to an input prop value
//    // Holds an array of elements that we will render to screen
//    // Loop props.upto times to display numbers, starting from 1
//    // How does it display?
//    //      calling a function on IT'S CHILD ELEMENTS
//    //      push props.children(i) into numberList
//    //      (i) is the number we will display
//    // return a div that contains numberList
//    // numberList is a React fragment, an array of React nodes
//    // putting it inside {} expands each element and renders them individually
//
//function Numbers(props) {
//    var numberList = [];
//    
//    for (var i=1; i<=props.upto; i++) {
//        numberList.push(props.children(i));
//    }
//    
//    return <div>{numberList}</div>;
//}
//
//
//
//// Displays numbers up to a certain value
//// Parent component List renders a nested Numbers component
//        // instantiates a Numbers component by passing in an upto prop value.
//        // upto={props.upto} expects props.upto to already be specified
//        //  when List was created.
//            // lambda function js expression, child of the Numbers component
//            // takes (index) as its arg, which is the (i) in the Numbers for loop
//            // since numberList is a fragment, each element must have a unique key
//            // i == index == value of key == JSX number to display
//function List(props) {
//    return (
//        <Numbers upto={props.upto}>
//            {(index) => <div key={index}> {index} </div>}
//        </Numbers>
//    );
//}
//
//
//ReactDOM.render(<List upto={10} />, document.getElementById('component1'));




