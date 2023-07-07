import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
                {/* first ,render takes default value of state ie count:0 in this case*/}
            </div>
        )
    }
}

export default ClassCounter
