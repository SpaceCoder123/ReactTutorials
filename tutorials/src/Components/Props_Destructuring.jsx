
function sendText(){
    alert("You have triggered this Send Text button ")
}

function Destructuring(props){

    return(
        <>
            <h1>This is a prop passed from app with value = <i>{props.value}</i> and name = <i>{props.name}</i></h1>
            <button onClick={sendText}>Send Text</button>
        </>
    )

}



export default Destructuring;