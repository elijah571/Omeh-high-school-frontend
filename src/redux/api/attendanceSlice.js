import { apiSlice } from "./apiSlice";
import { ATTENDANCE_URL } from "../constant";

export const attendanceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mark attendance
    markAttendance: builder.mutation({
      query: (data) => ({
        url: `${ATTENDANCE_URL}/mark-attendance`, // Correct route for marking attendance
        method: "POST",
        body: data,
      }),
    }),

    // Get attendance for a specific classroom
    getAttendanceForClassroom: builder.query({
      query: (classroomId) => ({
        url: `${ATTENDANCE_URL}/${classroomId}`, // Fetch attendance for a specific classroom
      }),
      providesTags: ["Attendance"],
      keepUnusedDataFor: 5,
    }),

    // Get a specific student's attendance
    getStudentAttendance: builder.query({
      query: ({ classroomId, studentId }) => ({
        url: `${ATTENDANCE_URL}/${classroomId}/${studentId}`, // Fetch attendance for a specific student in a classroom
      }),
      keepUnusedDataFor: 5,
    }),

    // Update attendance record
    updateAttendance: builder.mutation({
      query: (data) => ({
        url: `${ATTENDANCE_URL}/${data._id}`, // Use _id for updating attendance
        method: "PUT",
        body: data,
      }),
    }),

    // Delete attendance for a classroom
    deleteAttendance: builder.mutation({
      query: (classroomId) => ({
        url: `${ATTENDANCE_URL}/${classroomId}`, // Delete attendance for a specific classroom
        method: "DELETE",
      }),
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const {
  useMarkAttendanceMutation,
  useGetAttendanceForClassroomQuery,
  useGetStudentAttendanceQuery,
  useUpdateAttendanceMutation,
  useDeleteAttendanceMutation,
} = attendanceApiSlice;
