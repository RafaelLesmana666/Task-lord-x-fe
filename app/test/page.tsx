'use client'

import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.elementRef = React.createRef();
  }

  componentDidMount() {
    // Get a reference to the element with the ID "myElement".
    const element = this.elementRef.current;

    // Change the element's inner HTML.
    element.innerHTML = "This is the new inner HTML.";
  }

  render() {
    return (
      <div>
        <div id="myElement" ref={this.elementRef} />
      </div>
    );
  }
}