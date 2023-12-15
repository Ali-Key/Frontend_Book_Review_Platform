import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"
import BASE_URL from "./BASE_URL"

const setToken = (token) => {
    Cookies.set("token", token, {expires: 7})
}

export const AuthSlice = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        // sign up
        signUp: builder.mutation({
            query: (newUser) => ({
                url: "users/signup",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["user"]
        }),
        // login
        login: builder.mutation({
            query: (user) => ({
                url: "users/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["user"],

            onQueryStarted: async (arg, {queryFulfilled }) => {
               try {
                 const result = await queryFulfilled
                 setToken(result.data.token)
               } catch (error) {
                 console.log("error login: ", error)
               }
            }
        })
    })
})

export const {useSignUpMutation, useLoginMutation} = AuthSlice

export default AuthSlice.reducer