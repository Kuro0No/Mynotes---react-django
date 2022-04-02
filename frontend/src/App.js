import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListNotes from './components/ListNote';
import NoteItem from './Page/NoteItem';
import './styles/Home.scss'
import axios from 'axios';
import Header from './components/Header';
import CreateNote from './Page/CreateNote';

function App() {

  return (
    <div className="home-container " id='app'>
      <div className='notes-container'>
        <Header />
        <Routes>
          <Route path='' element={<ListNotes />} />
          <Route path='/notes/:id' element={<NoteItem />} />
          <Route path='/create-note' element={<CreateNote  />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
