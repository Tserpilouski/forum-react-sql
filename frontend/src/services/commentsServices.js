import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081" }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => `/comments/${postId}`,
      providesTags: (result, error, postId) =>
        result ? [{ type: "Comments", postId }] : [],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: "/comments",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi;
