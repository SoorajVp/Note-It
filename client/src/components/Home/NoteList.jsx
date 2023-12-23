import { useEffect, useState } from "react";
import { getUserNotes } from "../../services/apiCalls/note";
import EmptyNote from "./EmptyNote";

const NoteList = () => {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        const fetchNotes = async() => {
            const response = await getUserNotes();
            setNotes(response?.data?.reverse())
        }
        fetchNotes()
    }, [])

    const maxCharacters = 300;

    const truncateText = (text) => {
        return text.length > maxCharacters ? text.slice(0, maxCharacters) + '...' : text;
    };

    if( notes.length == 0 ) return <EmptyNote />

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3'>

            {
                notes?.map((item) => (
                    <div className='card w-full p-3 lg:p-4'>
                        <div>

                        <div className='flex justify-between'>
                            <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>{item?.head}</h2>
                            <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                        </div>
                        <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText(item?.text)}</p>
                        </div>
                        <p className='pt-1 text-right text-2xs text-gray-500'>{item?.updatedAt}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default NoteList

