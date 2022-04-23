import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  ${({isOpen}) => isOpen && `
    visibility: visible;
    opacity: 1;
    pointer-events: auto
  `}
`

const Content = styled.div`
  flex: 1;
  max-width: 500px;
  position: relative;
  background: #fafafa;
  padding: 15px 10px;
  max-height: calc(100vh - 30px);
  overflow-y: auto;
`

const Modal = ({ isOpen, handleClick, children }) => {
   return (
      <Container
         isOpen={isOpen}
         onClick={handleClick}
      >
         <Content
            onClick={(e) => e.stopPropagation()}
         >
            {children}
         </Content>
      </Container>
   )
}

export default Modal