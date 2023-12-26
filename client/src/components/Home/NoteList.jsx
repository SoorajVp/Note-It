import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../services/apiCalls/note";
import EmptyNote from "./EmptyNote";
import NoteCard from "./NoteCard";
import { setLoading } from "../../state/slices/userSlice";
import toast from "react-hot-toast";

const NoteList = () => {
    const { actions } = useSelector((store) => store.user)
    const [notes, setNotes] = useState(null)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                dispatch(setLoading(true));
                const response = await getUserNotes();
                setNotes(response?.data?.reverse() || []); 
            } catch (error) {
                toast.error(error?.message)
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchNotes();
    }, [actions])


    if( notes?.length == 0 ) return <EmptyNote />

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

