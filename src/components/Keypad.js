function Keypad(){
    let change = () => {console.log("Entering password...")}
    return (
        <input onChange={change} type="password"></input>
    )
}

export default Keypad