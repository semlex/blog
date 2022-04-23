import styled from 'styled-components'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Modal from '../components/Modal'
import { editPost, deletePost } from '../redux/postsSlice'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 15px 20px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 7px 30px;
  background: #dfe8ff;
  border: 1px solid #80a8ff;
  border-radius: 0;

  &:hover {
    background: #cfdfff;
  }
`

const RedButton = styled(Button)`
  background: #ffc3c3;
  border-color: #ff9898;

  &:hover {
    background: #ffbebe;
  }
`

const Title = styled.h1`
  margin: 25px 0 15px 0;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: '…"';
`

const Form = styled.form``

const BigTextarea = styled(Textarea)`
  height: 300px;
  padding: 130px 0;
`

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const ConfirmDelete = styled.div``

const ConfirmDeleteTitle = styled.h2`
  text-align: center;
  margin: 10px 0 40px 0;
`

const ConfirmDeleteButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

const PostEdit = () => {
   const { id } = useParams()

   const navigate = useNavigate()

   const post = useSelector(state => state.posts.posts.find(post => post.id == id))

   const [title, setTitle] = useState(post ? post.title : '')
   const [text, setText] = useState(post ? post.text : '')

   const [modalOpen, setModalOpen] = useState(false)

   const dispatch = useDispatch()

   useEffect(() => {
      if (!post) {
         navigate(-1)
      }
   }, [post])

   const handleDelete = () => {
      dispatch(
         deletePost({
            id: post.id
         })
      )

      navigate(-1)
   }

   const handleSave = (e) => {
      e.preventDefault()

      if (!title || !text) {
         if (!title) {
            e.target.querySelector('input').setAttribute('data-error', 'true')
         }
         if (!text) {
            e.target.querySelector('textarea').setAttribute('data-error', 'true')
         }
      } else {
         dispatch(
            editPost({
               id: post.id,
               title: title,
               text: text
            })
         )
         e.target.querySelectorAll('[data-error="true"]').forEach(item => {
            item.setAttribute('data-error', 'false')
         })
      }
   }

   return (
      <>
         {post &&
            <>
               <Container>
                  <Button
                     onClick={() => navigate(-1)}
                  >
                     Назад
                  </Button>
                  <Title>
                     Запись "{post.title}"
                  </Title>
                  <Form
                     onSubmit={handleSave}
                  >
                     <Input
                        type={'text'}
                        minlength={'1'}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                     />
                     <BigTextarea
                        value={text}
                        minlength={'1'}
                        onChange={(e) => setText(e.target.value)}
                     />
                     <BottomButtons>
                        <RedButton
                           type={'button'}
                           onClick={() => setModalOpen(true)}
                        >
                           Удалить
                        </RedButton>
                        <Button
                           type={'submit'}
                        >
                           Сохранить
                        </Button>
                     </BottomButtons>
                  </Form>
               </Container>
               <Modal
                  isOpen={modalOpen}
                  handleClick={() => setModalOpen(false)}
               >
                  <ConfirmDelete>
                     <ConfirmDeleteTitle>
                        Удалить запись?
                     </ConfirmDeleteTitle>
                     <ConfirmDeleteButtons>
                        <Button onClick={handleDelete}>
                           Да
                        </Button>
                        <Button onClick={() => setModalOpen(false)}>
                           Нет
                        </Button>
                     </ConfirmDeleteButtons>
                  </ConfirmDelete>
               </Modal>
            </>
         }
      </>
   )
}

export default PostEdit