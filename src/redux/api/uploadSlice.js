import { apiSlice } from "./apiSlice";
import { UPLOAD_URL } from "../constant";

export const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Upload image
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: UPLOAD_URL, // POST to '/api/upload'
        method: "POST",
        body: formData, // FormData for sending image
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type for file upload
        },
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
} = uploadApiSlice;
