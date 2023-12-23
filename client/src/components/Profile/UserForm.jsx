import { useEffect, useState } from 'react';
import { getUserData, updateUserData } from '../../services/apiCalls/user';
import toast from 'react-hot-toast';

const UserForm = () => {

    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')

    const [editName, setEditName] = useState(true)
    const [editMobile, setEditMobile] = useState(true)



    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserData();
            console.log(response)
            setUser(response?.data)
            setName(response?.data?.name)
            setMobile(response?.data?.mobile)

        }
        fetchUser()
    }, [])

    const submitStatus = (user?.name === name && user?.mobile === mobile) ? false : true

    const updateSumit = async () => {
        console.log('Updating', name, typeof mobile)
        if (mobile && typeof mobile === "number" && mobile.length === 10) {
            toast.error("Mobile number is not valid");
        } else if (name && typeof name === "string" && name.length >= 3) {
            toast.error("Username is not valid");
        } else {
            console.log("submit");
            const response = await updateUserData(name, mobile);
            console.log("Updation response", response);
        }

    }

    return (
        <form>
            <div className=''>
                <div className='flex justify-between'>
                    <label className="text-sm block text-gray-600">User name</label>
                    <p className='text-sm block text-primary font-semibold cursor-pointer' onClick={() => setEditName(!editName)}>Edit</p>
                </div>
                <div className="relative flex items-center">
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={editName}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter username" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>
            </div>

            <div className="mt-4 relative">
                <div className='flex justify-between'>
                    <label className="text-sm block text-gray-600">Mobile number</label>
                    <p className='text-sm block text-primary font-semibold  cursor-pointer' onClick={() => setEditMobile(!editMobile)}>Edit</p>
                </div>
                <div className="relative flex items-center">
                    <input name="mobile" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} disabled={editMobile}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter Mobile number" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 24 24">
                        <path d="M22 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM3 5h18v10H3V5zm0 12v-2h18v2H3z" />
                    </svg>
                </div>
            </div>


            <div className="mt-8">
                {
                    submitStatus &&
                    <button type="button" className="primary-button w-full" onClick={updateSumit}>
                        Save Changes
                    </button>
                }
            </div>

        </form>
    )
}

export default UserForm