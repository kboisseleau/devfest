import styled from 'styled-components'
import {IoMdCloseCircle} from 'react-icons/io'

export const Overlay = styled.div `
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`

export const Modal = styled.div `
    width: 100%;
    height: 550px;
    z-index: 5;
`
export const ImgFull = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const BtnClose = styled.button `
 cursor: pointer;
`

function FullImg({show, imgId, urlImg, handleClose}) {
    return (
      <>
        <Overlay/>
        <Modal>
          <BtnClose onClick={() => handleClose()}>
            <IoMdCloseCircle/>
          </BtnClose>
          <ImgFull src={urlImg} />
               
        </Modal>
      </>
      )
}

 
export default FullImg;