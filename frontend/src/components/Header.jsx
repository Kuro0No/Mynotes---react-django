import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.scss'


const Header = () => {
    const navigate = useNavigate()
    const handleCreate =() => {
        navigate('/create-note')
    }
    return (
        <div className='header-note'>
            <h3 className='title'>My Notes</h3>
            <div className='create-note' onClick={handleCreate}>
                <i className="bi bi-journal-plus"></i>
                <span>Add note</span>

            </div>
        </div>
    )
}

export default Header