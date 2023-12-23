import emptyIcon from '../../assets/empty.png';

const EmptyNote = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full mt-10'>
            <img src={emptyIcon} alt="Empty" className='w-14 h-14' />
            <p className='mt-2 text-gray-500 text-center'>
                Oops! It looks like you haven't added any notes yet. <br />
                Start by creating a new note to get organized.
            </p>
        </div>
    );
};

export default EmptyNote;
