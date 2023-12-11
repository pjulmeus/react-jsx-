const Tweet = (props) => {
    return (
        <div >
  <div >{props.username}</div>
  <div >
    <h5 >{props.name}</h5>
    <h6>{props.date}</h6>
    <p >{props.message}</p>
  </div>
  </div>
    )
}

const App = () => {
    return (<div>
        <Tweet username="pbjcomedy" name="paul" date="12/01/1989" message="Let's eat cake "/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))