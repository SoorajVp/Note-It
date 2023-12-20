
const CreateNote = () => {
    return (
        <div className="pt-3 px-3 md:px-16 lg:px-36 bg-purple-200 min-h-screen">
            <div className="flex justify-between mb-2">
                <div>
                    <button className="secondary-button">Back</button>
                </div>
                <div className="space-x-1">
                    <button className="secondary-button">Clear</button>
                    <button className="primary-button">Save</button>
                </div>
            </div>
            <form className="mx-auto">
                <div className="">
                    <input type="text" id="head" className="bg-gray-50 border-gray-300 text-gray-700 text-lg rounded-t-md block w-full p-2.5 focus:outline-none" placeholder='Title' />
                </div>
                <div>
                    <textarea id="text" rows="24" className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-b-md focus:outline-none" placeholder="Leave a comment..."></textarea>
                </div>
            </form>

        </div>
    )
}

export default CreateNote