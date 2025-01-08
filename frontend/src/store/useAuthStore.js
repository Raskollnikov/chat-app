import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore=create((set,get)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIng:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,
    checkAuth:async()=>{
        try {
            const res = await axiosInstance.get('/auth/check')   
            set({authUser:res.data})
        } catch (error) {
            console.log("check auth",error.message)
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    },
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
            get().connectSocket();
            } catch (error) {
            toast.error(error.response.data.message);
            } finally {
            set({ isSigningUp: false });
            }
        },
    
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
        const res = await axiosInstance.post("/auth/login", data);
        set({ authUser: res.data });
        toast.success("Logged in successfully");

        get().connectSocket();
        } catch (error) {
        toast.error(error.response.data.message);
        } finally {
        set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
        await axiosInstance.post("/auth/logout");
        set({ authUser: null });
        toast.success("Logged out successfully");
        get().disconnectSocket();
        } catch (error) {
        toast.error(error.response.data.message);
        }
    },
}))