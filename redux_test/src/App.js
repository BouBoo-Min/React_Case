import React, { Component } from 'react'
import Count from './Containers/Count'
import Person from './Containers/Person'

export default class App extends Component{
  render() {
    return (
        <div>
          <Count/>
          <hr/>
          <Person/>
        </div>
    )
  }
}


