import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: "Hello"
        }

        this.changeMessageProps = this.changeMessageProps.bind(this)
    }

    changeMessageProps(val){
        this.setState({
            message:val
        })
        // alert(this) // this => undefined since we are trying to set state and this is the reason event binding is required in React JS
    }
  render() {
    return (
      <div>
        <h1>This is event bind </h1>
        <p> This is the first method of binding the data and getting through the props</p>

        <h1>Using Arrow Functions</h1>
        <p> </p>


        <div>{this.state.message}</div>
        <button onClick={this.changeMessageProps.bind(this)}>Click</button> 
        {/* as we bound this method with the event handler we can change the text value after the press of a button */}
        <h3> Here we understand the arrow functions method of changing a state using Event Handler</h3>
        <button onClick={()=>this.changeMessageProps("ArrowFunction")}>Using Arrow Functions </button> 

        <p> Note that this too has some performance implications and many problems using large scale applications or scaling </p>

        <h3>Binding in the constructor rather than the event handler is best approach recommended by React documentation as well</h3>
        <button onClick={this.changeMessageProps}>Using binding in constructor </button>
      </div>
    )
  }
}

export default EventBind




