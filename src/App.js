import React, { Component } from 'react';
import Test1 from './components/Test1.js';
import ModalSimple from './components/ModalSimple.js';

import { Menu } from 'semantic-ui-react'

class App extends Component {

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>

        <Menu fixed="top">
            <Menu.Item header>Our Company</Menu.Item>
            <Menu.Item
              name='editorials'
              active={activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
              Editorials
            </Menu.Item>

            <Menu.Item
              name='reviews'
              active={activeItem === 'reviews'}
              onClick={this.handleItemClick}
            >
              Reviews
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
              active={activeItem === 'upcomingEvents'}
              onClick={this.handleItemClick}
            >
              Upcoming Events
            </Menu.Item>
        </Menu>

        <div style={{height:"50"}}/>

		<Test1/>
        <hr/>
        <ModalSimple />
        
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default App;
