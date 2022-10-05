import React from 'react';
import './button-control.css'
import close from "../../assets/images/close.svg";
import edit from "../../assets/images/edit.svg";
import like from "../../assets/images/like.svg";
import dislike from "../../assets/images/dislike.svg";
import comments from "../../assets/images/comments.svg";

const CONFIG = { close, edit, like, dislike, comments } // type: image

const ButtonControl = ({handleClick, type}) => {
    console.log(handleClick)
    return (
            <button className='btn-cntrl' onClick={handleClick}>
                <img src={CONFIG[type]}/>
            </button>
    );
};

export default ButtonControl;