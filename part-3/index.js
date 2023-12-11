const Person = (props) =>{
    return (
        <div>
            <p> Learn some information about this person </p>
            <p> {props.name.length > 8 ? props.name.slice(0,6) : props.name} </p> 
            <h3>{props.age > 18 ? "please go vote!" : "you must be 18!" }</h3> 
            <ul>
                {props.hobbies.map(item => <li> {item} </li>)}
            </ul>
        </div>
       
    )
}

const App = () => {
return(
    <div>
        <Person name="pauljrisgay" age="21" hobbies = {["dancing", "spearfishing", "hunting"]}/> 
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))