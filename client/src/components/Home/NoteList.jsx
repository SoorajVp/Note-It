import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserNotes } from "../../services/apiCalls/note";
import EmptyNote from "./EmptyNote";
import NoteCard from "./NoteCard";
import Shimmer from "../Elements/Shimmer";

const NoteList = () => {
    const [notes, setNotes] = useState(null)
    const [loading, setLoading] = useState(false)
    const { actions } = useSelector((store) => store.user)
    
    useEffect(() => {
        setLoading(true)
        const fetchNotes = async() => {
            const response = await getUserNotes();
            setNotes(response?.data?.reverse())
            setLoading(false)
        }
        fetchNotes()
    }, [actions])


    if( notes?.length == 0 ) return <EmptyNote />
    if( loading ) return <Shimmer />

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

