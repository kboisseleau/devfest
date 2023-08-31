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

  const [hasLiked, setHasLiked] = useState([])
  const [showModal, setShowModal] = useState([])
  const [modalId, setModalId] = useState(null)
  const [imgSrc, setImgSrc] = useState('')
  const [count, setCount] = useState([])

  const counterLike = (index) => {
    console.log(Number(count))
    return count[index]
  }

  const increment = (i) => {
    let newCount = count  + 1
    console.log(newCount)
    setCount([...newCount])
  }

  const decrement = (i) => {
    let newCount = count - 1
    setCount([...newCount])
  }

  const toggleLike = (item, index) => {
    let likedIndex = hasLiked.findIndex((i) => i === item.id)
    
    if (likedIndex >= 0) {
      hasLiked.splice(likedIndex, 1)
      decrement(index)
      
    }
    else {
      hasLiked.push(item.id)
      increment(index)
    }
    setHasLiked([...hasLiked])
  }
  const shareImg = () => {
    console.log('share on social media')
  }
  const toggleModal = (index) => {
    let indexOpen = index
    let arrayIndex = indexOpen
    //let test = showModal[arrayIndex]
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
        {imgTest.map((item, index) => {
          return (
            <>
              <ImgContainer>
                  <Img src={item.photo} key={index} onClick={() => {toggleModal(index); setModalId(index); setImgSrc(item.photo)}} />
                  <Btn onClick={() => toggleLike(item, index)}>
                    { hasLiked.findIndex(i => i === item.id) >= 0 ?  <AiFillHeart id={index} size={sizeIcon} /> 
                    : <AiOutlineHeart id={index} size={sizeIcon} />}
                  </Btn>
                  <span>{counterLike(index)}</span>
                  <Btn onClick={() => shareImg()}><AiOutlineShareAlt size={sizeIcon} /></Btn>
                </ImgContainer>         
            </>
          )
        })}
        {showModal && <FullImg show={showModal[modalId]} imgId={modalId} urlImg={imgSrc} handleClose={callbackModal} />}
      </ContentGallery>

    )
}

 
export default Gallery;