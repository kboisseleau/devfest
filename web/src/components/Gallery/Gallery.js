import styled from 'styled-components'
import {AiFillHeart, AiOutlineHeart, AiOutlineShareAlt} from 'react-icons/ai'
import { useState } from 'react'
import FullImg from '../Modal/FullImg'

export const ContentGallery = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`
export const Btn = styled.button `
border: none;
cursor: pointer;
background-color: transparent;
`
const imgTest = [
  "http://placekitten.com/200/300",
  "http://placekitten.com/200/300",
  "http://placekitten.com/200/300",
  "http://placekitten.com/200/300"
]
function Gallery() {
  const sizeIcon = '2em'
  const [hasVoted, setHasVoted] = useState(0)
  const [showModal, setShowModal] = useState([false, false, false, false])
 //const [countVote, setCountVote] = useState({value: 0})

  const toggleVote = (id, index) => {
    setHasVoted(index)
  }
  const shareImg = () => {
    console.log('share on social media')
  }
  const toggleModal = (index) => {
    showModal[index] = true;
    const newState = showModal[index]
    setShowModal(newState);
  }
  const callbackModal = () => {
    setShowModal(false)
  }
    return (
      <ContentGallery>
        {/* counter {countVote.value} */}

        {imgTest.map((url, id) => {
          return (
            <>
              <ImgContainer>
               {/*  {hasVoted} */}
                {/* open modal where user can vote and share */}
                  <Img src={url} key={id} onClick={() => toggleModal(id)} />
                  <Btn onClick={(e) => toggleVote(e.target.id, id)}>
                    {hasVoted === id ?  <AiFillHeart id={id} size={sizeIcon} /> : <AiOutlineHeart id={id} size={sizeIcon} />}
                    {/* add or remove vote on img id */}
                  </Btn>
                  <Btn onClick={() => shareImg()}><AiOutlineShareAlt size={sizeIcon} /></Btn>
                  {/* open modal of sharing on social media */}
                </ImgContainer>
                {showModal && <FullImg show={showModal[id]} imgId={id} urlImg={url} handleClose={callbackModal} />}
                
            </>


          )
        })}
        
      </ContentGallery>

    )
}

 
export default Gallery;