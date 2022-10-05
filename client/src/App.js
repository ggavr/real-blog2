import {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import FormRegistration from "./components/FormRegistration";
import FormSignIn from "./components/reserve/FormSignIn";
import { useDispatch} from "react-redux";
import CreateArticle from "./components/CreateArticle";
import {fetchPosts} from "./toolkitRedux/thunks";

function App() {
const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                    {/*<Route path="article" element={<Article />}/>*/}
                    <Route path="registration" element={<FormRegistration/>}/>
                    <Route path="registration/sign-in" element={<FormSignIn />}/>
                    <Route path="create-article" element={<CreateArticle />}/>
                    {/*<Route path="" element={< />}/>*/}

                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
