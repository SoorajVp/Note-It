import { Link } from 'react-router-dom'
import addIcon from '../../assets/add-icon.svg'

const CreateButton = () => {
    return (
        <Link to='/create'>
            <div className=' border-2 border-secondary hover:bg-white transition duration-500 rounded-lg w-full py-4 p-2'>
                <div className='flex justify-center'>
                    <img src={addIcon} alt="Create" className='w-6 sm:w-8' />
                </div>
                <h1 className='text-center text-xs md:text-sm text-primary font-semibold'> Create Note</h1>
            </div>
        </Link>
    )
}

export default CreateButton