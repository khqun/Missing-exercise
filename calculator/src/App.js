import React from 'react';
class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    firstValue: "",
    secondValue: "",
    result:""
  }
  
}
  handleChangeFirstValue = (e)=>{
    this.setState({
      firstValue: e.target.value
    })
}
  handleChangeSecondValue = (e)=>{
  this.setState({
    secondValue: e.target.value
  })
}
  plus = ()=>{
  this.setState({
    result: parseInt(this.state.firstValue) + parseInt(this.state.secondValue) 
  })
}
minus = ()=>{
  this.setState({
    result: parseInt(this.state.firstValue) - parseInt(this.state.secondValue) 
  })
}
times = ()=>{
  this.setState({
    result: parseInt(this.state.firstValue) * parseInt(this.state.secondValue) 
  })
}
divide = ()=>{
  this.setState({
    result: parseInt(this.state.firstValue) / parseInt(this.state.secondValue) 
  })
}
  render() {
    return ( 
      <div style={{border: "1px black solid", width: "300px", textAlign: "center", marginLeft: "40%"}}>
        <input type="number" onChange={this.handleChangeFirstValue}></input>
        <input type="number" onChange={this.handleChangeSecondValue}></input>
        <p>Result: {this.state.result}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.times}>X</button>
        <button onClick={this.divide}>/</button>
      </div>
    )
  }
}
export default App