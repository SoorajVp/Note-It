import { Link } from 'react-router-dom';
import { format } from 'timeago.js'
import DeleteNote from '../Modals/DeleteNote';

const NoteCard = ({ id, head, text, updatedAt }) => {
    const maxCharacters = 500;

    const truncateText = (text) => {
        return text.length > maxCharacters ? text.slice(0, maxCharacters) + '...' : text;
    };

    return (
        <Link to={`/note/${id}`} className='card p-3 lg:p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>{head}</h2>
                        <div onClick={(event) => event.stopPropagation()}>
                            <DeleteNote noteId={id} />
                        </div>
                    </div>
                <p className='text-2xs sm:text-xs text-gray-600 overflow-hidden' dangerouslySetInnerHTML={{ __html: truncateText(text) }}></p>
                </div>
                <p className='pt-1 text-right text-2xs text-gray-500'>{format(updatedAt)}</p>

        </Link>
    );
};

export default NoteCard;
