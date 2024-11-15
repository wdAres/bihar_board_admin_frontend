import { Modal } from 'antd'
import React from 'react'

import { createPortal } from 'react-dom'

const MyModal = ({ title, modalValue, modalFunc, children, hideOk, handleOk, hideCancel }) => {

  return (
    <Modal
      title={title}
      open={modalValue}
      onCancel={() => modalFunc(!modalValue)}
      okText={'Submit'}
      onOk={handleOk}
      okButtonProps={hideOk ? { style: { display: 'none' } } : {}}
      cancelButtonProps={hideCancel ? { style: { display: 'none' } } : {}}
    >
      {children}
    </Modal>

  )
}

const ModalComp = (props) => {
  return (
    createPortal(<MyModal {...props} />, document.getElementById('modal'))
  )
}

export default ModalComp
