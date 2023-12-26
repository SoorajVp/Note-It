import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createNewNote } from '../../services/apiCalls/note'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../state/slices/userSlice';


const CreateNote = () => {
    const [head, setHead] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const status = ( head && text ) ? false : true 

    const submitNote = async () => {
        dispatch(setLoading(true))
        await createNewNote({ head, text })
        dispatch(setLoading(false))
        navigate('/')
    }

    const clearButton = () => {
        setHead('');
        setText('');
    }


    return (

        <div>
            <div className="flex justify-between mb-2">
                <Link to='/'>
                    <button className="secondary-button">Back</button>
                </Link>
                <div className="space-x-1">
                    <button className="secondary-button" onClick={clearButton}>Clear</button>
                    <button className="primary-button disabled:opacity-50 disabled:pointer-events-none" disabled={status} onClick={submitNote}>Save</button>
                </div>
            </div>
            <form className="mx-auto">
                <div className="">
                    <input type="text" onChange={(e)=> setHead(e.target.value)} value={head} id="head" autoComplete='off'
                    className="bg-gray-50 border-gray-300 text-gray-700 text-base rounded-t-md block w-full p-2.5 focus:outline-none" placeholder='Title' />
                </div>
                <div>
                    <textarea id="text" onChange={(e) => setText(e.target.value)} value={text} rows="24" 
                    className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-b-md focus:outline-none" placeholder="Your notes..."></textarea>
                </div>
            </form>
        </div>
    )
}

export default CreateNote