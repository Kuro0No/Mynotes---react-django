import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ListNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getNotes() {
      const res = await axios.get('http://localhost:8000/api/notes/')
      setNotes(res.data)
    }
    getNotes()
  }, [])
  const deleteNote =async (id) => {
    const filterNote = notes.filter(item => item.id != id)
    try{
      await axios.delete(`http://localhost:8000/api/notes/${id}/delete`)
      setNotes(filterNote)
      alert('success')
      
    } catch{
      alert('failed')
    }
  }
  return (
    <div className='notes-content'>
      {notes.map((note, i) => {
        return <div key={note.id} className='notes-group'>
          <Link to={`notes/${note.id}`}   >

            <div >
              <h6>{note.nameNote}</h6>
              <div className='time-created'>{moment(note.created).format("DD/MM/YYYY")}</div>
              <span>{note.body}</span>
            </div>
          </Link>
          <span onClick={() => deleteNote(note.id)} className='delete-note'>x</span>
        </div>
      })}
    </div>
  )
}

export default ListNotes