import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalSimple extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  onBtnShowModalClick = () => this.open();

  render() {
    const { open } = this.state

    return (
        <div>
          <Modal
            dimmer={true}
            open={open}
            onOpen={this.open}
            onClose={this.close}
            size='small'
          >
            <Modal.Header>Simple Modal Test</Modal.Header>
            <Modal.Content>
              <p>My Modal Content</p>
            </Modal.Content>
            <Modal.Actions>

              <Button icon='remove' content='Cancel' onClick={this.close} />
              <Button icon='check' content='All Done' onClick={this.close} />
            </Modal.Actions>
          </Modal>

          <Button onClick={this.onBtnShowModalClick}> Test My Modal</Button>
          
          </div>
    )
  }
}

export default ModalSimple