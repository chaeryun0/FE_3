function One(){
  return <h1>hello world</h1>
}

function Two(props){
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default function App() {
  return (
    <div>
      {console.log(<One/>)}
      <Two>
        <h2 className="twoclass" key="100">hello world</h2>
        {/* key 값을 넣어주면 null -> 넣어준 값으로 변경된다. */}
        <p>hello world</p>
      </Two>
    </div>
  )
}