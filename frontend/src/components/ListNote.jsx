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
  return (
    <>
      {notes.map((note, i) => {
        return <Link to={`notes/${note.id}`} key={note.id} className='notes-group'>

          <div >
            <h6>{note.nameNote}</h6>
            <div className='time-created'>{moment(note.created).format("DD/MM/YYYY")}</div>
            <span>{note.body}</span>
          </div>
        </Link>
      })}
    </>
  )
}

export default ListNotes