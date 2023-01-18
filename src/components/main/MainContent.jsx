import React, { useState } from "react"
import Button from "../button/Button"
import styled from "styled-components"
import ModalForm from "../modal-form/ModalForm"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 0 50px 0 0;
  box-shadow: 0px 0px 34px -1px rgb(34 60 80 / 40%);
  margin: 20px;
`

const Img = styled.img`
  width: 150px;
  height: 110px;
  border-radius: 10px 0 0 10px;
  margin-right: 15px;
`
const Buttons = styled.h3`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const Span = styled.span``

const MainContent = ({ id, title, rating, img, deleteMovie, setAddMovie }) => {
  const [isModalVisible, setIsVisible] = useState(false)

  const toggleModalHandler = () => {
    setIsVisible((prevState) => !prevState)
  }

  const confirmHandler = () => {
    setIsVisible(false)
  }
  return (
    <>
      {isModalVisible ? (
        <ModalForm
          setAddMovie={setAddMovie}
          onDelete={deleteMovie}
          onClose={toggleModalHandler}
          onConfirm={confirmHandler}
          id={id}
        />
      ) : null}
      <MainContainer>
        <Container>
          <Img src={img} alt={title} />
          <div>
            <div>
              <h3>{title}</h3>
            </div>
            <Buttons>
              <Span>{rating}/5 stars</Span>
              <Button
                bgcolor={"red"}
                color={"#fff"}
                title={"DELETE"}
                onClick={toggleModalHandler}
              />
              <Button bgcolor={"blue"} color={"#fff"} title={"EDIT"} />
            </Buttons>
          </div>
        </Container>
      </MainContainer>
    </>
  )
}

export default MainContent
