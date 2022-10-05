import React, {useState} from 'react';
import {modalSelector, setModal} from "../toolkitRedux/toolkitReducer";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../toolkitRedux/thunks";
import ButtonControl from "./Controls/ButtonControl";
import InputControl from "./Controls/InputControl";

const Modal = () => {
    const dispatch = useDispatch()
    const {postId, modalName, author, titleValue} = useSelector(modalSelector) //the same as prev string
    const [currentInput, setCurrentInput] = useState(titleValue)

    const handleChangeTitle = (e) => setCurrentInput(() => (e.target.value))
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editPost({currentInput,postId}))
        dispatch(setModal({isOpened: false, modalName: 'editPost', postId:null}))
    }
    const handleClick = () => dispatch(setModal({isOpened: false, modalName: 'editPost', postId:null}))

    return (
       <div className='form--modal'>
           <ButtonControl handleClick={handleClick} type='close'/>
           <form className='form'>
               <InputControl value={currentInput} onChange={handleChangeTitle}/>
               <p>Post will be created by: {author}</p>
               <button  className="form--button" onSubmit={handleSubmit} onClick={handleSubmit}>
                   Edit Article
               </button>
           </form>
       </div>
    );
};

export default Modal;