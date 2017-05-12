import React, { Component } from 'react';
import Test1 from './components/Test1.js';
import ModalSimple from './components/ModalSimple.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



class App extends Component {

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  // https://reacttraining.com/react-router/web/example/basic
  render() {
    
    const { activeItem } = this.state

    return (
      <Router>

        <div>
            <Menu fixed="top">
                <Menu.Item header>Our Company</Menu.Item>
                <Menu.Item
                  name='dogs'
                  active={activeItem === 'dogs'}
                  as={Link} to='/dogs'
                >
                  Dogs
                </Menu.Item>

                <Menu.Item
                  name='modal'
                  active={activeItem === 'modal'}
                  as={Link} to='/modal'
                >
                  Modal
                </Menu.Item>

            </Menu>

            <div style={{height:"50"}}/>
            
        
            <Route exact  path="/" component={ModalSimple} />
            <Route path="/dogs" component={Test1}/>
            <Route path="/modal" component={ModalSimple} />
        </div>
        
      </Router>
    );
  }
}

export default App;
