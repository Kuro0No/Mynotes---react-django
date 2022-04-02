import axios from 'axios'
import React, { useState } from 'react'
import '../styles/CreateNote.scss'

const CreateNote = () => {
    const [note, setNote] = useState({
        name: '',
        body: '',
    })

    
    const addNote = async () => {
        try {
            await axios.post('http://localhost:8000/api/notes/create', note)

            alert('success')
        } catch {
            alert('Failed')
        }
    }
    return (
        <div className='create-container'>
            <div >
                <label htmlFor="create-note">Name</label>
                <input value={note.name} onChange={(e) => setNote({ ...note, name: e.target.value })} type="text" id='create-note' />
            </div>
            <textarea value={note.body} onChange={(e) => setNote({ ...note, body: e.target.value })} name="" id="" cols="30" rows="10"></textarea>
            <button  onClick={addNote}>Add Note</button>
        </div>
    )
}

export default CreateNote