import React, {} from "react"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Header({user, setUser}) {

    const totalPosts = useSelector((state) => state.counter.totalPosts)
    const handleClick = () => {
        localStorage.setItem('user','Guest')
        setUser(()=>'Guest')
    }

    return (
        <nav>
            <Link to="/"><h2>Real Blog</h2></Link>
            <h4>{totalPosts}</h4>
            {user === 'Guest'
                ? <Link to="registration"><h2>Sign In</h2></Link>
                : <>
                    <h4 onClick={handleClick}>Log out</h4>
                    <h4>Hi, {user}</h4>
                </>}
        </nav>
    )
}

export default Header