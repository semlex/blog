import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
   name: 'posts',
   initialState: {
      posts: []
   },
   reducers: {
      addPost: (state, action) => {
         state.posts.push({
            id: Date.now(),
            title: action.payload.title,
            text: action.payload.text
         })
      },
      editPost: (state, action) => {
         const post = state.posts.find(post => post.id === action.payload.id)
         post.title = action.payload.title
         post.text = action.payload.text
      },
      deletePost: (state, action) => {
         state.posts = state.posts.filter(post => post.id !== action.payload.id)
      }
   }
})

export const {
   addPost,
   editPost,
   deletePost
} = postsSlice.actions
export default postsSlice.reducer