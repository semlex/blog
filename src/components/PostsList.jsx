import styled from 'styled-components'
import Post from './Post'

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  margin: 0 -20px;
  min-height: calc(100vh - 300px)
`

const PostsList = ({ posts }) => {
   return (
      <Container>
         {posts.map((post, i) => (
            <Post key={i} post={post} />
         ))}
      </Container>
   )
}

export default PostsList