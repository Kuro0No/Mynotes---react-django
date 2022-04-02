import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/NoteItem.scss'
// import PropTypes from 'prop-types'


const NoteItem = () => {
    const [note, setNote] = useState({
        name:'',
        body:''
    })
    const { id } = useParams()

    useEffect(() => {
        async function getNote() {
            const res = await axios.get(`http://localhost:8000/api/notes/${id}`)
            setNote(res.data)
        }

        getNote()
    }, [])
    const handleUpdate = async () => {
        try {

            await axios.put(`http://localhost:8000/api/notes/${id}/update`, note)
            alert('success')

        } catch {
            alert('failed')
        }
        

    }


    return (
        <div className='noteItem-container'>
            <div className='noteItem'>
                <div>
                    <label htmlFor="name-note">Name:</label>
                    <input value={note?.nameNote || ''} onChange={(e) => setNote({ ...note, nameNote: e.target.value })} id='name-note' type="text" />
                </div>
                <textarea value={note?.body || ''} onChange={(e) => setNote({ ...note, body: e.target.value })} rows="4" cols="50" ></textarea>
            </div>
            <button className='updatebtn' onClick={handleUpdate} > Update</button>
        </div>
    )
}

// NoteItem.propTypes = {
//     onChange: PropTypes.func
// }

export default NoteItem