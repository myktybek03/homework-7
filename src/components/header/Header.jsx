import { useRef, useState } from "react"
import Modal from "../../UI/Modal"
import Button from "../button/Button"
import styled from "styled-components"
import { v4 } from "uuid"

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: blue;
`
const Title = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`

const Header = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const movieTitle = useRef()
  const url = useRef()
  const rating = useRef()

  const MovieAddedHandler = (event) => {
    event.preventDefault()
    const enteredMovieTitle = movieTitle.current.value
    const enteredUrl = url.current.value
    const enteredMovieRating = rating.current.value

    const addMovie = {
      title: enteredMovieTitle,
      img: enteredUrl,
      rating: enteredMovieRating,
      id: v4(),
    }
    props.onAddMovie(addMovie)
    toggleModalHandler()
  }

  const toggleModalHandler = () => {
    setIsModalVisible((prevState) => !prevState)
  }
  return (
    <>
      <HeaderStyled>
        <Title>Favorite movies</Title>
        <Button
          bgcolor={"orange"}
          color={"#fff"}
          title={"ADD MOVIE"}
          onClick={toggleModalHandler}
        />

        <>
          {isModalVisible ? (
            <Modal onClose={toggleModalHandler}>
              <Forma onSubmit={MovieAddedHandler}>
                <label htmlFor="title">Movie Title</label>
                <input type="text" ref={movieTitle} />
                <label htmlFor="url">Image URL</label>
                <input type="url" ref={url} />
                <label htmlFor="rating">Your Rating</label>
                <input type="number" ref={rating} />
                <ButtonStyled>
                  <Button title={"Cancler"} onClick={toggleModalHandler} />
                  <Button
                    title={"Add"}
                    type="submit"
                    width={"80px"}
                    bgcolor={"blue"}
                    color={"white"}
                  />
                </ButtonStyled>
              </Forma>
            </Modal>
          ) : null}
        </>
      </HeaderStyled>
    </>
  )
}

export default Header

const Forma = styled.form`
  display: grid;
  width: 500px;
  height: 200px;
`

const ButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 1rem;
`
