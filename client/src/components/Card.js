import React, {} from "react"
import avatar from '../assets/images/avatar.svg'
import {useDispatch} from "react-redux";
import {deleteReq, voteDislike, voteLike} from "../toolkitRedux/thunks";
import {setModal} from "../toolkitRedux/toolkitReducer";
import ButtonControl from "./Controls/ButtonControl";
import {useToggle} from "../hooks/useToogle";
import CreateComment from "./CreateComment";

function Card({title, author, date, likes, id, comment}) {
    let localUser = localStorage.getItem('user')
    const [isOpen, toggleIsOpen] = useToggle();


    const dispatch = useDispatch()
    const handleClick = () => dispatch(deleteReq(id))
    const handleEdit = () => dispatch(setModal({isOpened: true, modalName: 'editPost', postId: id}))
    const handleLike = () => dispatch(voteLike({postId: id, user: localUser}))
    const handleDislike = () => dispatch(voteDislike({postId: id, user: localUser}))
    return (
    <>
        <section className='card'>
            <div className='card--content'>
                <small>{title}</small>
                <div className='card--votes'>
                    <ButtonControl handleClick={handleLike} type='like'/>
                    {likes}
                    <ButtonControl handleClick={handleDislike} type='dislike'/>
                </div>
                {isOpen && <div className='card--extention'><CreateComment user={author} postId={id}/> {comment.map(el=><p>{el.text}</p>)}</div>}            </div>
            <div className='card--author'>
                <div>
                    <h5>{author}</h5>
                    <ButtonControl handleClick={handleClick} type='close'/>
                    <ButtonControl handleClick={handleEdit} type='edit'/>
                    <ButtonControl handleClick={toggleIsOpen} type='comments'/>
                </div>
                <img src={avatar} alt='avatar'/>
                <p>{date}</p>
            </div>
        </section>
    </>);
}

export default Card