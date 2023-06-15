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
  {id: 1, photo:"https://images.unsplash.com/photo-1686594108849-dcaba26cdf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=916&q=80"},
  {id: 2, photo: "https://images.unsplash.com/photo-1686407449898-79cd2d0eba4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"},
  {id: 3, photo: "https://images.unsplash.com/photo-1686668240087-c1b3f39e68d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"},
  {id: 4, photo: "https://images.unsplash.com/photo-1686610620643-0ba20d31b6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
]
function Gallery() {
  const sizeIcon = '2em'
  const [hasVoted, setHasVoted] = useState([])
  const [showModal, setShowModal] = useState([])
  const [modalId, setModalId] = useState(null)
  const [imgSrc, setImgSrc] = useState('')

 //const [countVote, setCountVote] = useState({value: 0})

  const toggleVote = (item) => {
    let index = hasVoted.findIndex((i) => i === item.id)

    if (index >= 0) {
      hasVoted.splice(index, 1)
    }
    else {
      hasVoted.push(item.id)
    }
    setHasVoted([...hasVoted])
  }
  const shareImg = () => {
    console.log('share on social media')
  }
  const toggleModal = (index) => {
    let indexOpen = index
    let arrayIndex = indexOpen
    let test = showModal[arrayIndex]
    let isOpen = true
    setShowModal(isOpen);
  }
  const callbackModal = (index) => {
    let isOpen = showModal[index]
    isOpen = false;
    setShowModal(isOpen)
  }
    return (
      <ContentGallery>
        {/* counter {countVote.value} */}

        {imgTest.map((item, index) => {
          return (
            <>
              <ImgContainer>
               vote {hasVoted}
                {/* open modal where user can vote and share */}
                  <Img src={item.photo} key={index} onClick={() => {toggleModal(index); setModalId(index); setImgSrc(item.photo)}} />
                  {/* hasVoted.includes(id) */}
                  <Btn onClick={() => toggleVote(item)}>
                    { hasVoted.findIndex(i => i === item.id) >= 0 ?  <AiFillHeart id={index} size={sizeIcon} /> : <AiOutlineHeart id={index} size={sizeIcon} />}
                    {/* add or remove vote on img id */}
                  </Btn>
                  <Btn onClick={() => shareImg()}><AiOutlineShareAlt size={sizeIcon} /></Btn>
                  {/* open modal of sharing on social media */}
                </ImgContainer>         
            </>
          )
        })}
        {showModal && <FullImg show={showModal[modalId]} imgId={modalId} urlImg={imgSrc} handleClose={callbackModal} />}
      </ContentGallery>

    )
}

 
export default Gallery;