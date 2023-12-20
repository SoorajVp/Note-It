import NoteList from '../components/Home/NoteList'
import CreateButton from '../components/Home/CreateButton'

const HomePage = () => {
    return (
        <div className='pt-3 px-3 lg:px-16 bg-purple-200 min-h-screen'>
            <CreateButton />
            <NoteList />
        </div>
    )
}

export default HomePage