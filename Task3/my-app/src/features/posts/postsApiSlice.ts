import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type CreatePostRequest = {
  title: string
  body: string
  userId: number
}

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  endpoints: build => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
  
  }),
})

// Export hooks for usage in components
export const { useGetPostsQuery } = postsApiSlice
