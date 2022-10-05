import {createAsyncThunk} from "@reduxjs/toolkit";
import {setModal, setPosts} from "./toolkitReducer";

export const fetchPosts = createAsyncThunk(
    'counter/fetchPosts',
    async (counter, {dispatch}) => {
        const response = await fetch("http://localhost:8080/post/page/1")
        const res = await response.json()

        console.log(res, 'thunk')
        dispatch(setPosts(res))
    }
)
export const voteDislike = createAsyncThunk(
    'counter/voteDislike',
    async ({user, postId}, {dispatch, getState}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let currentDislikesArr = getState().counter.result.find(post=>postId===post.id).dislikes;

        let finalDislikesArr = currentDislikesArr
        if (currentDislikesArr.indexOf(user) === -1) {
            finalDislikesArr = [...currentDislikesArr, user]
        }

        console.log(finalDislikesArr)

        var raw = JSON.stringify({
            "dislikes": finalDislikesArr
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://localhost:8080/post/${postId}`, requestOptions)
        const res = await response.json()

        // console.log(res, 'thunk liked')
        dispatch(fetchPosts())
    }
)
export const voteLike = createAsyncThunk(
    'counter/voteLike',
    async ({user, postId}, {dispatch, getState}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let currentLikesArr = getState().counter.result.find(post=>postId===post.id).likes;

        let finalLikesArr = currentLikesArr
        if (currentLikesArr.indexOf(user) === -1) {
            finalLikesArr = [...currentLikesArr, user]
        }

        console.log(finalLikesArr)

        var raw = JSON.stringify({
            "likes": finalLikesArr,
            "dislikes": []
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://localhost:8080/post/${postId}`, requestOptions)
        const res = await response.json()

        // console.log(res, 'thunk liked')
        dispatch(fetchPosts())
    }
)


export const editPost = createAsyncThunk(
    'counter/editPost',
    async ({currentInput, postId}, {dispatch}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": currentInput,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://localhost:8080/post/${postId}`, requestOptions)
        const res = await response.json()

        console.log(res, 'thunk edited')
        dispatch(fetchPosts())
    }
)
export const createPost = createAsyncThunk(
    'counter/createPost',
    async ({currentInput, user}, {dispatch}) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "title": currentInput,
            "username": user,
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch("http://localhost:8080/post/", requestOptions)
        const res = await response.json()

        console.log(res, 'thunk created')
        dispatch(fetchPosts())
    }
)
export const createComment = createAsyncThunk(
    'counter/createComment',
    async ({currentInput, postId, user}, {dispatch}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "text": currentInput,
            "postId": postId,
            "username": user
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:8080/comment/", requestOptions)
        const res = await response.json()

        console.log(res, 'thunk created')
        dispatch(fetchPosts())
    }
)
export const deleteReq = createAsyncThunk(
    'counter/deleteReq',
    async (id, {dispatch}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": "rhs",
            "username": "sehresh"
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const response = await fetch(`http://localhost:8080/post/${id}`, requestOptions)
        const res = await response.json()

        console.log(res, 'thunk deleteReq')
        dispatch(fetchPosts())
    }
)