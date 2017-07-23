
// renders the ToDo list to screen
// expects an item property to be passed into TODO component
function ToDo(props) {
    return <div> Task: {props.item}</div>
}

// List component to contain the list of to do items
// displays ul using a javascript expression.
// map() accepts a single function as its arg and applies its body to every list element
// a lambda expression (compact function) is passed into map()
/*
 (lambda function input arg) => < body of lambda function />
 body: <returnType attributeName={attributeValue} propertyName = {propToDisplay} />
 
 - list is the array of to do items.  map is applied to every element of the list array
 - map applies a lambda expression to each item in the to do list
 - lambda returns a ToDo component
 - ToDo takes in an attribute value 'key', and prop "item"
 - since we are displaying these elements in a list, each needs its own unique key
 - item is the prop (to do element) that will be displayed
*/
function List(props) {
    var list = ["learn ReactJS", "build React web page", "build React mobile app"];
    
    return (
        <ul>
            {list.map((todo) => <ToDo key={todo} item={todo}/>)}
        </ul>
    );
}

ReactDOM.render(<List />, document.getElementById('component1'));