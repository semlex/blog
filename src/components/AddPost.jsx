import styled from 'styled-components'
import Input from './Input'
import Textarea from './Textarea'
import Modal from './Modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/postsSlice'

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

     if (!title || !text) {
        if (!title) {
           e.target.querySelector('input').setAttribute('data-error', 'true')
        }
        if (!text) {
           e.target.querySelector('textarea').setAttribute('data-error', 'true')
        }
     } else {
        e.target.querySelectorAll('[data-error="true"]').forEach(item => {
           item.setAttribute('data-error', 'false')
        })

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
   }

   const cancel = (e) => {
     e.preventDefault()

      document.querySelectorAll('[data-error="true"]').forEach(item => {
         item.setAttribute('data-error', 'false')
      })

     setTitle('')
     setText('')
     setIsOpen(false)
   }

  return (
     <Modal
        isOpen={isOpen}
        handleClick={cancel}
     >
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
     </Modal>
  )
}

export default AddPost