
function EyesOnMe(){
    let focus = () => {console.log("Good!")}
    let blur = () => {console.log("Hey! Eyes on me!")}
    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
    
}

export default EyesOnMe