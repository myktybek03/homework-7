import React from "react"
import Modal from "../../UI/Modal"
import Button from "../button/Button"
import styled from "styled-components"

const ModalForm = ({ onClose, onDelete, setAddMovie, id }) => {
  const removeMovie = () => {
    const remove = onDelete.filter((item) => item.id !== id)

    setAddMovie(remove)
  }
  return (
    <Modal onClose={onClose}>
      <h4>Are you sure you wanna delete?</h4>
      <Buttons>
        <Button onClick={onClose} title={"No"} color={"blue"} width={"70px"} />
        <Button
          onClick={removeMovie}
          title={"Yes"}
          bgcolor={"blue"}
          color={"white"}
          width={"70px"}
        />
      </Buttons>
    </Modal>
  )
}

export default ModalForm

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`
