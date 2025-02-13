import { apiSlice } from "./apiSlice";
import { CLASS_ROOM_URL } from "../constant";

export const classRoomApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new classroom
    createClassroom: builder.mutation({
      query: (data) => ({
        url: `${CLASS_ROOM_URL}/create`, // Create classroom via POST to '/create'
        method: "POST",
        body: data,
      }),
    }),

    // Assign teacher to a classroom
    assignTeacherToClassroom: builder.mutation({
      query: (data) => ({
        url: `${CLASS_ROOM_URL}/assign-teacher`, // Assign teacher via POST to '/assign-teacher'
        method: "POST",
        body: data,
      }),
    }),

    // Assign students to a classroom
    assignStudentsToClassroom: builder.mutation({
      query: (data) => ({
        url: `${CLASS_ROOM_URL}/assign-student`, // Assign students via POST to '/assign-student'
        method: "POST",
        body: data,
      }),
    }),

    // Get all classrooms
    getAllClassrooms: builder.query({
      query: () => ({
        url: `${CLASS_ROOM_URL}/`, // Get all classrooms via GET to '/'
      }),
      providesTags: ["Classroom"],
      keepUnusedDataFor: 5,
    }),

    // Get a specific classroom by classroomId
    getClassroom: builder.query({
      query: (classroomId) => ({
        url: `${CLASS_ROOM_URL}/${classroomId}`, // Get classroom by ID via GET to '/:classroomId'
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateClassroomMutation,
  useAssignTeacherToClassroomMutation,
  useAssignStudentsToClassroomMutation,
  useGetAllClassroomsQuery,
  useGetClassroomQuery,
} = classRoomApiSlice;
