import React, { useState } from "react"
import { Post } from "./postsApiSlice"

type PostFormProps = {
  onCreatePost: (post: Post) => void
}

export const PostForm: React.FC<PostFormProps> = ({ onCreatePost }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !body.trim()) return

    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const newPost: Post = {
        id: Date.now(), // Use timestamp as unique ID
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      }
      
      onCreatePost(newPost)
      
      // Clear form after successful submission
      setTitle("")
      setBody("")
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="max-w-2xl mx-auto mb-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); }}
            placeholder="Enter post title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
            Content:
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => { setBody(e.target.value); }}
            placeholder="Enter post content"
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !title.trim() || !body.trim()}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Creating..." : "Create Post"}
        </button>
        

      </form>
    </div>
  )
}
