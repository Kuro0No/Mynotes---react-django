import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListNotes from './components/ListNote';
import NoteItem from './Page/NoteItem';
import './styles/Home.scss'
import axios from 'axios';
import Header from './components/Header';

function App() {

  
  
  return (
    <div className="home-container">
      <div className='notes-container'>
        <Header />
        <Routes>
          <Route path='' element={<ListNotes />} />
          <Route path='/notes/:id' element={<NoteItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
