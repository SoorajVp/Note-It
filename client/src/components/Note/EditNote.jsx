import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getSingleNote, updateNote } from '../../services/apiCalls/note';
import { setLoading } from '../../state/slices/userSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { quillModules } from '../../App';

const EditNote = () => {
    const [note, setNote] = useState(null);
    const [head, setHead] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const fetchSingleNote = async () => {
            const response = await getSingleNote(id);
            setNote(response?.data);
            setHead(response?.data?.head);
            setText(response?.data?.text);
        };
        fetchSingleNote();
    }, [id]);

    // Disable save button if the head or text is empty or if they haven't changed
    const isSaveDisabled = !head.trim() || !text.trim() || (note?.head === head && note?.text === text);

    const submitNote = async () => {
        dispatch(setLoading(true));
        await updateNote({ id, head, text });
        dispatch(setLoading(false));
        navigate(`/note/${id}`);
    };

    const clearButton = () => {
        setHead('');
        setText('');
    };

    return (
        <div>
            <div className="flex justify-between mb-2">
                <Link to='/'>
                    <button className="secondary-button">Back</button>
                </Link>
                <div className="space-x-1">
                    <button className="secondary-button" onClick={clearButton}>Clear</button>
                    <button
                        className={`primary-button ${isSaveDisabled ? 'disabled:opacity-50 disabled:pointer-events-none' : ''}`}
                        disabled={isSaveDisabled}
                        onClick={submitNote}
                    >
                        Save
                    </button>
                </div>
            </div>
            <form className="mx-auto">
                <div className="">
                    <input
                        type="text"
                        onChange={(e) => setHead(e.target.value)}
                        value={head}
                        id="head"
                        autoComplete='off'
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-base block w-full p-2.5 focus:outline-none"
                        placeholder='Title'
                    />
                </div>
                <div className='bg-gray-50 mt-1'>
                    <ReactQuill
                        theme="snow"
                        value={text}
                        onChange={setText}
                        modules={quillModules}
                        className='editor-box rounded-sm'
                    />
                </div>
            </form>
        </div>
    );
};

export default EditNote;
