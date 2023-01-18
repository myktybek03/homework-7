import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

export const Backdrop = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <BackdropStyled onClick={onClose} />,
        document.getElementById("backdrop")
      )}
    </>
  )
}

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClose={onClose} />
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  )
}

export default Modal

const Card = styled.div`
  padding: 30px;
  min-width: 350px;
  min-height: 110px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 100;
`

const BackdropStyled = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`
