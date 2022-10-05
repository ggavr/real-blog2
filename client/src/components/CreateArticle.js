import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {createPost} from "../toolkitRedux/thunks";
import InputControl from "./Controls/InputControl";
//   Title input
//    Image upload button
//    'Add'/ 'Edit' button (should sends request to create/update post and another one request to save image, if image exists)

function CreateArticle({user}) {
    const [currentInput, setCurrentInput] = useState('')
    const dispatch = useDispatch();
    const handleChangeTitle = (e) => setCurrentInput(() => (e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({currentInput,user}))
    }
    return (
        <form className='form'>
            <InputControl value={currentInput} onChange={handleChangeTitle}/>
            <p>Post will be created by: {user}</p>
            <button className="form--button" onClick={handleSubmit}>
                Create Article
            </button>
        </form>
    )
}
export default CreateArticle