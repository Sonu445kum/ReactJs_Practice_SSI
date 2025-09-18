import React, { Component } from 'react'
// here i have created the classComponents that is CounterClass
// CounterClass inherit (ya extend) kar raha hai React ke Component class ko
// CounterClass React ke saare features use kar sakta hai
//  (state, lifecycle methods, render method).
export default class CounterClass extends Component {
    // this is a constructor
    constructor(props){
        // it call the parent
        super(props);
        // here i m initialize the initial State as count with value is 0
        this.state={count:0};
    }
    // componenetsDidMount()-->like birth
    componentDidMount(){
        console.log("Componenents Did Mount:")
    }
    // ComponenentsDidUpdate-->when the state is change 
    componentDidUpdate(){
        console.log("Componeents Did Update")
    }
    // this is the render method
    //this is always return the jsx and null
    // whatever we return from the render it show in the react dom
  render() {
    console.log("Render Call...!!!") // for the debugging purpose
    return (
      <div>
        <h1>CounterClass</h1>
        {/* Count Value */}
        <p>Count:{this.state.count}</p>
        {/* Here i M create the button for the Increment the count */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        {/* Here i M create the button for the Decrement the count */}
        <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
        {/* Here i M create the button for the Reset the count */}
        <button onClick={()=>this.setState({count:0})}>Reset</button>
      </div>
    )
  }
}
