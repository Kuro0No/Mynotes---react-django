import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/NoteItem.scss'

const NoteItem = () => {
    const [note, setNote] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function getNote() {
            const res = await axios.get(`http://localhost:8000/api/notes/${id}`)
            setNote(res.data)
        }

        getNote()
    }, [])
    const handleUpdate =async () => {
        try{
            await axios.put(`http://localhost:8000/api/notes/${id}/update`, note)
            alert('success')
        }catch{
            alert('failed')
        }

    }
   

    return (
        <div className='noteItem-container'>
            <div className='noteItem'>
                <div>
                    <label htmlFor="name-note">Name:</label>
                    <input value={note?.nameNote} onChange={(e) => setNote({...note, nameNote: e.target.value})} id='name-note' type="text" />
                </div>
                <textarea value={note?.body} onChange={(e) => setNote({...note, body: e.target.value})} id="w3review" name="w3review" rows="4" cols="50" ></textarea>
            </div>
            <button onClick={handleUpdate} > Update</button>
        </div>
    )
}

export default NoteItem