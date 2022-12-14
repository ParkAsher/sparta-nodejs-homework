import './App.css';


/* components */
import Header from "./components/Header.js"
import Editor from './components/Editor';
import Postlist from './components/Postlist';

function App() {
    return (
        <>
            <Header />
            <Editor />
            <Postlist />
        </>
    );
}

export default App;
