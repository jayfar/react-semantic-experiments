import React, { Component } from 'react';
import { Button, Label } from 'semantic-ui-react'

class Test1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {clickCount: 0};
  }

  componentDidMount() {
    this.onClick();
  }
  
  onClick = () => {
    var newCount = this.state.clickCount + 1;
    this.setState({clickCount: newCount});
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>
			Add a Dog
		</Button>
        <Label>
            Dogs
            <Label.Detail>{this.state.clickCount}</Label.Detail>
        </Label>
      </div>
    );
  }
}

export default Test1;
