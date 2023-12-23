import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSingleNote, updateNote } from '../../services/apiCalls/note'
import { useEffect, useState } from 'react'

const SingleNote = () => {
    const [note, setNote] = useState(null)
    const [head, setHead] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchSingleNote = async () => {
            const response = await getSingleNote(id)
            console.log("single note", response)
            setNote(response.data)
            setHead(response?.data?.head);
            setText(response?.data?.text);

        }
        fetchSingleNote()
    }, [])
    console.log("head", head)

    const status = !(head && text) || (note?.head === head && note?.text === text);



    const submitNote = async () => {
        console.log('submit')
        const response = await updateNote({ id, head, text })
        console.log(response)
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
                    <button className="primary-button disabled:opacity-50 disabled:pointer-events-none" disabled={status} onClick={submitNote} >Save</button>
                </div>
            </div>
            <form className="mx-auto">
                <div className="">
                    <input type="text" onChange={(e) => setHead(e.target.value)} value={head} id="head" autoComplete='off'
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

export default SingleNote