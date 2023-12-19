
const NoteList = () => {

    const maxCharacters = 300;

    const truncateText = (text) => {
        return text.length > maxCharacters ? text.slice(0, maxCharacters) + '...' : text;
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3'>

            <div className='card w-full p-3 lg:p-4'>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>This is Head sjkdfbs sjkfjasdbadjbasd asjdasdasdi asdjasdasdbas</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText("This is paragraph text .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis officia repellat numquam, voluptatibus accusamus atque praesentium ullam maxime rem. Accusamus molestias fugit quibusdam ab ullam voluptatibus laudantium, vitae incidunt!.--- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem obcaecati quasi accusantium vitae optio eos quam! Molestiae nesciunt, aut id fugit architecto perspiciatis, nulla quaerat vel inventore molestias ut!")}</p>
                <p className='pt-1 text-right text-2xs text-gray-500'>20/2/2025</p>
            </div>

            <div className='card w-full p-3 lg:p-4'>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>This is Head sjkdfbs sjkfjasdbadjbasd asjdasdasdi asdjasdasdbas</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText("This is paragraph text .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis officia repellat numquam, voluptatibus accusamus atque praesentium ullam maxime rem. Accusamus molestias fugit quibusdam ab ullam voluptatibus laudantium, vitae incidunt!.--- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem obcaecati quasi accusantium vitae optio eos quam! Molestiae nesciunt, aut id fugit architecto perspiciatis, nulla quaerat vel inventore molestias ut!")}</p>
                <p className='pt-1 text-right text-2xs text-gray-500'>20/2/2025</p>
            </div>

            <div className='card w-full p-3 lg:p-4'>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>This is Head sjkdfbs sjkfjasdbadjbasd asjdasdasdi asdjasdasdbas</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText("This is paragraph text .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis officia repellat numquam, voluptatibus accusamus atque praesentium ullam maxime rem. Accusamus molestias fugit quibusdam ab ullam voluptatibus laudantium, vitae incidunt!.--- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem obcaecati quasi accusantium vitae optio eos quam! Molestiae nesciunt, aut id fugit architecto perspiciatis, nulla quaerat vel inventore molestias ut!")}</p>
                <p className='pt-1 text-right text-2xs text-gray-500'>20/2/2025</p>
            </div>

            <div className='card w-full p-3 lg:p-4'>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>This is Head sjkdfbs sjkfjasdbadjbasd asjdasdasdi asdjasdasdbas</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText("This is paragraph text .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis officia repellat numquam, voluptatibus accusamus atque praesentium ullam maxime rem. Accusamus molestias fugit quibusdam ab ullam voluptatibus laudantium, vitae incidunt!.--- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem obcaecati quasi accusantium vitae optio eos quam! Molestiae nesciunt, aut id fugit architecto perspiciatis, nulla quaerat vel inventore molestias ut!")}</p>
                <p className='pt-1 text-right text-2xs text-gray-500'>20/2/2025</p>
            </div>

            <div className='card w-full p-3 lg:p-4'>
                <div className='flex justify-between'>
                    <h2 className='font-medium text-xs text-gray-800 sm:text-sm py-2 truncate w-56'>This is Head sjkdfbs sjkfjasdbadjbasd asjdasdasdi asdjasdasdbas</h2>
                    <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer'>Delete</h2>
                </div>
                <p className='text-2xs sm:text-xs text-gray-600 '>{truncateText("This is paragraph text .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis officia repellat numquam, voluptatibus accusamus atque praesentium ullam maxime rem. Accusamus molestias fugit quibusdam ab ullam voluptatibus laudantium, vitae incidunt!.--- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem obcaecati quasi accusantium vitae optio eos quam! Molestiae nesciunt, aut id fugit architecto perspiciatis, nulla quaerat vel inventore molestias ut!")}</p>
                <p className='pt-1 text-right text-2xs text-gray-500'>20/2/2025</p>
            </div>
            

        </div>
    )
}

export default NoteList

