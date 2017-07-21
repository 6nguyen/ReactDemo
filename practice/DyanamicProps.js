// Step 2:
// What if we use a lot of blue boxes?
// Instead of retreiving the prop value from ReactDOM.render, we can assign it like so
function BlueBox(props){
    return <Box color="blue"></Box>
}

function GreenBox(props){
    return <Box color="green"></Box>
}

function RedBox(props){
    return <Box color="red"></Box>
}

// Step 3:
// We can also make a randomized box
function MysterBox(props) {
    const Boxes = [
        BlueBox,
        RedBox,
        GreenBox
    ];
    const ChosenBox = Boxes[props.randomIndex];
    return <ChosenBox />;
}

// Step 1:
// Components with "random methods(?) can be created like this
// receives the prop value as an arg when ReactDOM.render is called
// Style attributes must be set using an object with all the style specs in it
function Box(props) {
    const divStyle = {
        backgroundColor: p rops.color
    };
    
    return (
        <div className="box" style={divStyle}></div>
    );
}


ReactDOM.render(<Box color="aquamarine" />, document.getElementById("component1"));
ReactDOM.render(<BlueBox />, document.getElementById("component2"));
ReactDOM.render(<MysteryBox 
                    randomIndex={Math.floor(Math.random()*3}/>
                    , document.getElementById("component3)")); 