import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function AlertModal({open}) {
  return (
    <Modal
    //   trigger={open}
      open={open}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  )
}

export default AlertModal
