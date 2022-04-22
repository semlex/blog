import styled from 'styled-components'
import AddPost from '../components/AddPost'
import PostsList from '../components/PostsList'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Container = styled.div`
  max-width: 930px;
  margin: 0 auto;
  padding: 10px;
`

const Title = styled.h1`
   text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 8px 15px;
  background: #dfe8ff;
  border: 1px solid #80a8ff;
  border-radius: 0;

  &:hover {
    background: #cfdfff;
  }
`

const Home = () => {
   const [modalOpen, setModalOpen] = useState(false)

   const posts = useSelector(state => state.posts.posts)

   const handleClick = () => {
      setModalOpen(true)
   }

   return (
      <>
         <Container>
            <Title>
               Блог
            </Title>
            {posts.length > 0 &&
               <PostsList posts={posts} />
            }
            <ButtonWrapper>
               <Button
                  onClick={handleClick}
               >
                  + Добавить
               </Button>
            </ButtonWrapper>
         </Container>
         <AddPost
            isOpen={modalOpen}
            setIsOpen={setModalOpen}
         />
      </>
   )
}
export default Home