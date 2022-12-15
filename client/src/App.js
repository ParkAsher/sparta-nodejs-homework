import './App.css';
import { Routes, Route } from 'react-router-dom'


/* components */
import Header from "./components/Header.js"
import Postlist from './components/Postlist';
import Editor from './components/Editor';
import Detail from './components/Detail';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Postlist />} />
                <Route path='/write' element={<Editor />} />
                <Route path='/post/:postNum' element={<Detail />} />
            </Routes>
        </>
    );
}

export default App;
