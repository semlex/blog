import styled from 'styled-components'
import Input from './Input'
import Textarea from './Textarea'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/postsSlice'

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
  width: 500px;
  position: relative;
  background: #fafafa;
  max-width: 600px;
  padding: 15px 10px;
  max-height: calc(100vh - 30px);
  overflow-y: auto;
`

const Form = styled.form``

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px -8px 0 -8px;
`

const Button = styled.button`
  cursor: pointer;
  margin: 0 8px;
  padding: 7px 30px;
  background: #dfe8ff;
  border: 1px solid #80a8ff;
  border-radius: 0;

  &:hover {
    background: #cfdfff;
  }
`

const AddPost = ({ isOpen, setIsOpen }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

   const dispatch = useDispatch()

   const handleSubmit = (e) => {
     e.preventDefault()

     dispatch(
        addPost({
           title,
           text
        })
     )

     setTitle('')
     setText('')
     setIsOpen(false)
   }

   const cancel = (e) => {
     e.preventDefault()

     setTitle('')
     setText('')
     setIsOpen(false)
   }

  return (
     <Container
        isOpen={isOpen}
     >
       <Content>
          <Form onSubmit={handleSubmit}>
             <Input
                type={'text'}
                minlength={'1'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />
             <Textarea
                minlength={'1'}
                value={text}
                onChange={(e) => setText(e.target.value)}
             />
             <ButtonsWrapper>
                <Button
                   type={'button'}
                   onClick={cancel}
                >
                   Отменить
                </Button>
                <Button type={'submit'}>
                   Сохранить
                </Button>
             </ButtonsWrapper>
          </Form>
       </Content>
     </Container>
  )
}

export default AddPost