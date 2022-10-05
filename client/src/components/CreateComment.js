import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {createComment} from "../toolkitRedux/thunks";
import InputControl from "./Controls/InputControl";

function CreateComment({user, postId}) {
    const [currentInput, setCurrentInput] = useState('')
    const dispatch = useDispatch();
    const handleChangeComment = (e) => setCurrentInput(() => (e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createComment({currentInput, postId, user}))
    }
    return (
        <form className='card--extention'>
            <InputControl value={currentInput} onChange={handleChangeComment}/>
            <button className="form--button" onClick={handleSubmit}>
                Add Comment
            </button>
        </form>
    )
}
export default CreateComment