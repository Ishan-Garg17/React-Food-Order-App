import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
// We are not using context here instead we are using props because then on adding context and we bind the click on the backdrop to close a cart then we will not be able to use the modal for other kinds of content 
const Backdrop = (props)=>{
    return <div onClick={()=>props.onClose(false)} className={classes.backdrop}></div>
}
const ModalOverlay = (props)=>{
    return <div  className={classes.modal}>
      <div>{props.children}</div>
      </div>
}
function Modal(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById('overlay'))} 
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlay'))}
    </>
  )
}

export default Modal