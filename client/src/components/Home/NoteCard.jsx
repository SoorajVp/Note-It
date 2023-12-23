import React from 'react'
import { Link } from 'react-router-dom';

const NoteCard = ({ id, head, text, updatedAt }) => {
    const maxCharacters = 300;

    const truncateText = (text) => {
        return text.length > maxCharacters ? text.slice(0, maxCharacters) + '...' : text;
    };
    

    return (
        <Link to={`/note/${id}`} className='card w-full p-3 lg:p-4'>
            <div>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>{head}</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText(text)}</p>
            </div>
            <p className='pt-1 text-right text-2xs text-gray-500'>{updatedAt}</p>
        </Link>
    )
}

export default NoteCard