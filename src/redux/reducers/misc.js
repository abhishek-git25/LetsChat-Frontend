import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNewGroup: false,
    isNotification: false,
    isAddMember: false,
    isMobileMenuFriendly: false,
    isSearch: false,
    isFileMenu: false,
    isDeleteMenu: false,
    uploadingLoader: false,
    selectedDeleteChat: {
        chatId: "",
        groupChat: false
    }
}

const miscSlice = createSlice({
    name: "misc",
    initialState,
    reducers: {
        setIsNewGroup: (state, action) => {
            state.isNewGroup = action.payload
        },
        setIsAddMember: (state, action) => {
            state.isAddMember = action.payload
        },
        setIsNotification: (state, action) => {
            state.isNotification = action.payload
        },
        setIsMobileMenuFriendly: (state, action) => {
            state.isMobileMenuFriendly = action.payload
        },
        setIsSearch: (state, action) => {
            state.isSearch = action.payload
        },
        setIsFileMenu: (state, action) => {
            state.isFileMenu = action.payload
        },
        setIsDeleteMenu: (state, action) => {
            state.isDeleteMenu = action.payload
        },
        setIsUploadingLoader: (state, action) => {
            state.uploadingLoader = action.payload
        },
        setSelectedDeleteChat : (state , action) =>{
            state.selectedDeleteChat  = action.payload
        }
    }
})

export default miscSlice
export const { setIsNewGroup, setIsAddMember, setIsNotification, setIsMobileMenuFriendly, setIsSearch, setIsFileMenu, setIsDeleteMenu, setIsUploadingLoader,setSelectedDeleteChat } = miscSlice.actions