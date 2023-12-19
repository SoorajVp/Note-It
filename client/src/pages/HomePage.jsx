import React from 'react'
import CreateNote from '../components/Home/CreateNote'
import NoteList from '../components/Home/NoteList'

const HomePage = () => {
    return (
        <div className='pt-3 px-3 lg:px-16 bg-purple-200 min-h-screen'>
            <CreateNote />
            <NoteList />
        </div>
    )
}

export default HomePage