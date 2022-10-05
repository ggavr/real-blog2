import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {timeToDate} from "../helpers/timeToDate";
import {act} from "@testing-library/react";
import {useSelector} from "react-redux";
import {useState} from "react";

const initialState = {

    result: [],
    totalPosts: 1,
    totalPages: 1,
    currentModal: {
        isOpened: false,
        modalName: 'editPost',
        postId: null,
        titleValue:'',
        author:''
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.currentModal.isOpened = action.payload.isOpened
            state.currentModal.modalName = action.payload.modalName
            state.currentModal.postId = action.payload.postId
            console.log(state.result.find(post => post.id == action.payload.postId))
            state.currentModal.titleValue = state.result.find(post => post.id == action.payload.postId).title;
            state.currentModal.author = state.result.find(post => post.id == action.payload.postId).username;

        },

        setPosts: (state, action) => {

            state.totalPosts = action.payload.total;
            state.result = action.payload.result.map((card) => ({...card, date: timeToDate(card.date)}) )
            state.totalPages = action.payload.totalPages

        },

        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        resetState: (state) => {
            state.value = 0
        }
    },
})

//Selectors

export const modalSelector = state => state.counter.currentModal;
export const counterSelector = state => state.counter;

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setPosts, resetState, setModal } = counterSlice.actions

export default counterSlice.reducer