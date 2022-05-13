import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function AlertModal({open, setOpen}) {
  return (
    <Modal
      open={open}
    >
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          OK!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AlertModal
