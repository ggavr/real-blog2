import React, {useEffect, useState} from "react"
import Header from "./Header";
import CardList from "./CardList";
import {useSelector} from "react-redux";
import CreateArticle from "./CreateArticle";
import Modal from "./Modal";

function Home() {
    const [user, setUser] = useState('Guest')
    useEffect(()=>{
        let localUser = localStorage.getItem('user')
        setUser(()=>localUser)
    },[])

    const {isOpened, modalName} = useSelector(state=>state.counter.currentModal)
    return (
        <div>
            {isOpened && <Modal modalName={modalName}/>}
            <Header user={user} setUser={setUser}/>
            {user!=='Guest'&&<CreateArticle user={user}/>}
            <CardList/>
        </div>
    )
}

export default Home