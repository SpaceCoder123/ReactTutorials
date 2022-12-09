import React, { Component } from 'react'

class ComponentLifeCycle extends Component {
    constructor(props){
        super(props)
        console.log("This is the constructor of ComponentLifeCycleA")
    }

    static getDerivedStateFromProps(props,state){
        console.log("This is the getDerivedStateFromProps static method of ComponentLifeCycleA")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA Component Did Mount")
    }
  render() {
    console.log("LifeCycle A render method")
    return (
        
      <div>
        <h3>This program deals with Component Life Cycle</h3>
        <ul>
            <li>
                <h4>Constructor</h4>  <p>A special function that will get called whenever a new component is called</p>
                <p> Helps in initializing a particular component and binding the event handlers</p>
                <p> Prevents unwanted HTTP requests </p>
            </li>
            <li>
                <h4>static getDerivedStateFromProps (props,state) </h4>
                <p>Set the state</p>
                <p>Does not cause any side effects</p>
            </li>
            <li>
                <h4>Render Method</h4>
                <p>Read props and states and returns the JSX</p>
                <p>Child component life cycles are also executed</p>
            </li>
            <li>
                <h4>ComponentDidMount()</h4>
                <p>Invokes immediately after a component and all its children components have been rendered to the DOM </p>
                <p>Note this runs after the render method has been completed and the component has been mounted</p>
            </li>
        </ul>
      </div>
    )
  }
}

export default ComponentLifeCycle
