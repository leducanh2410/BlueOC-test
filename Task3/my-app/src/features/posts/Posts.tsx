import React from "react"
import { useGetPostsQuery } from "./postsApiSlice"
import { Post } from "./postsApiSlice"

type PostsProps = {
  localPosts: Post[]
}

export const Posts: React.FC<PostsProps> = ({ localPosts }) => {
  const { data: apiPosts, isLoading, error } = useGetPostsQuery()
  
  // Combine API posts with local posts, local posts appear first
  const allPosts = [...localPosts, ...(apiPosts ?? [])]

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-medium text-gray-600">Loading posts...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-medium text-red-600 mb-4">Error loading posts</h2>
        <p className="text-gray-600 mb-4">Failed to fetch posts. Please try again.</p>
       
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Posts</h2>
      </div>
      
      {allPosts.length > 0 ? (
        <div className="space-y-6">
          {allPosts.map((post: Post) => (
            <div key={post.id} className=" bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 break-words">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 break-words">{post.body}</p>
              <div className="flex gap-6 text-xs text-gray-500">
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-600 italic">No posts found.</p>
        </div>
      )}
    </div>
  )
}
