import React, { Component } from 'react'
import MultiSelectComponent from './MultiSelectComponent';
import BacklogComponent from './BacklogComponent';
import BodyComponent from './BodyComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <BodyComponent />
          <MultiSelectComponent />
          <BacklogComponent />        
      </div>
    )
  }
}
