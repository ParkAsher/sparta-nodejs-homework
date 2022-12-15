import './App.css';
import { Routes, Route } from 'react-router-dom'


/* components */
import Header from "./components/Header.js"
import Postlist from './components/Postlist';
import Editor from './components/Editor';
import Detail from './components/Detail';
import Edit from './components/Edit';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Postlist />} />
                <Route path='/write' element={<Editor />} />
                <Route path='/post/:postNum' element={<Detail />} />
                <Route path='/edit/:postNum' element={<Edit />} />
            </Routes>
        </>
    );
}

export default App;
