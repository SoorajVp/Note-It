import { useEffect, useState } from "react";
import { getUserNotes } from "../../services/apiCalls/note";
import EmptyNote from "./EmptyNote";
import NoteCard from "./NoteCard";

const NoteList = () => {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        const fetchNotes = async() => {
            const response = await getUserNotes();
            console.log(response.data)
            setNotes(response?.data?.reverse())
        }
        fetchNotes()
    }, [])


    if( notes.length == 0 ) return <EmptyNote />

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3'>

            {
                notes?.map((item) => (
                    <NoteCard {...item} key={item?.id} />
                ))
            }

        </div>
    )
}

export default NoteList

