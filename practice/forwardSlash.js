function GreenBox(props){
    return <Box color="green"></Box>
}

function BlueBox(props){
    return <Box color="blue"></Box>
}

function RedBox(props){
    return <Box color="red"></Box>
}

const aquaBoxDOM = (
    <div>
        <Box color="aqua"></Box>
    </div>
);

// Randomly chooses a blue or red box to display
function MysteryBox(props) {
    const Boxes = [BlueBox, RedBox, GreenBox];
    const ChosenBox = Boxes[props.randomIndex];
    return <ChosenBox />;
}

// Sets the background color attribute of the box
function Box(props) {
    const divStyle = {backgroundColor: props.color};
    return (
        <div className="box" style={divStyle}></div>
    );
}
// Display a Green box
ReactDOM.render(<GreenBox />, document.getElementById("component1"));
ReactDOM.render(aquaBoxDOM, document.getElementById("component2"));
// Randomly display a Blue or Red box
ReactDOM.render(<MysteryBox randomIndex=
                {Math.floor(Math.random()*3)}/>,document.getElementById("component3"));
