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

    return (
        <div className='noteItem-container'>
            <div className='noteItem'>
                <h4>{note?.nameNote}</h4>
            </div>
        </div>
    )
}

export default NoteItem