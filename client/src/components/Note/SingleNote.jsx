import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSingleNote, updateNote } from '../../services/apiCalls/note'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../state/slices/userSlice'

const SingleNote = () => {
    const [note, setNote] = useState(null)
    const [head, setHead] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        const fetchSingleNote = async () => {
            const response = await getSingleNote(id)
            setNote(response?.data)
            setHead(response?.data?.head);
            setText(response?.data?.text);
        }
        fetchSingleNote()
    }, [])

    const status = !(head && text) || (note?.head === head && note?.text === text);

    const submitNote = async () => {
        dispatch(setLoading(true))
        await updateNote({ id, head, text })
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
                    {/* <button className="secondary-button" onClick={clearButton}>Clear</button> */}
                    <button className="primary-button" onClick={() => navigate(`/note/edit/${id}`)} >Edit</button>
                </div>
            </div>
            <div className='bg-gray-50 p-6 border rounded'>
                <h2 className='text-2xl font-medium'>{head}</h2>
                <div className='mt-2 prose' dangerouslySetInnerHTML={{ __html: text}}>

                </div>
            </div>
            {/* <form className="mx-auto">
                <div className="">
                    <input type="text" onChange={(e) => setHead(e.target.value)} value={head} id="head" autoComplete='off'
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-t-md block w-full p-2.5 focus:outline-none" placeholder='Title' />
                </div>
                <div>
                    <textarea id="text" onChange={(e) => setText(e.target.value)} value={text} rows="24"
                        className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-b-md focus:outline-none" placeholder="Your notes..."></textarea>
                </div>
            </form> */}
        </div>
    )
}

export default SingleNote