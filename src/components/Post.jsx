import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 310px;
  padding: 20px;
`

const PostBody = styled.div``

const PostTitle = styled.h3`
  margin: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PostContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #000;
  width: 100%;
  height: 90px;
  padding: 0 3px;
`

const PostText = styled.p`
  display: -webkit-box;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

const PostLink = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
  padding: 5px 15px;
  color: #000;
  background: #dfe8ff;
  border: 1px solid #80a8ff;
  border-radius: 5px;

  &:hover {
    background: #cfdfff;
  }
`

const Post = ({ post }) => {
   return (
      <Container>
         <PostBody>
            <PostTitle>
               {post.title}
            </PostTitle>
            <PostContent>
               <PostText>
                  {post.text}
               </PostText>
            </PostContent>
            <PostLink
               type={'button'}
               to={`post/${post.id}`}
            >
               перейти
            </PostLink>
         </PostBody>
      </Container>
   )
}

export default Post