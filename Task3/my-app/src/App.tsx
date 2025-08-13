import "./App.css"
import { useState } from "react"
import { PostForm } from "./features/posts/PostForm"
import { Posts } from "./features/posts/Posts"
import { Post } from "./features/posts/postsApiSlice"

export const App = () => {
  const [localPosts, setLocalPosts] = useState<Post[]>([])

  const handleCreatePost = (newPost: Post) => {
    setLocalPosts(prev => [newPost, ...prev])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts Management App</h1>
        <p>A React-Redux app for managing posts</p>
      </header>
      <main>
        <PostForm onCreatePost={handleCreatePost} />
        <Posts localPosts={localPosts} />
      </main>
    </div>
  )
}
