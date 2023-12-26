import NoteList from '../components/Home/NoteList'
import CreateButton from '../components/Home/CreateButton'
import { useSelector } from 'react-redux'
import Loading from '../components/Elements/Shimmer'

const HomePage = () => {
    const { isLoading } = useSelector((store) => store.user)

    // if(isLoading) return <Loading />

    return (
        <>
            <CreateButton />
            <NoteList />
        </>
    )
}

export default HomePage