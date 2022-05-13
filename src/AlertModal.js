import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function AlertModal({open, setOpen, text}) {
  return (
    <Modal
      dimmer='blurring'
      size='mini'
      open={open}
    >
      <Modal.Content image>
        <Modal.Description>
          <p>{text}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          OK!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AlertModal
