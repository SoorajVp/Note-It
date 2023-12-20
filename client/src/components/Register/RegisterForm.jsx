import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <form>

            <div className='mt-4'>
                <label className="text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                    <input name="username" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter user name" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>
            </div>

            <div className="mt-4 relative">
                <label className="text-sm mb-2 block">Mobile</label>
                <div className="relative flex items-center">
                    <input name="mobile" type="number" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter user name" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 24 24">
                        <path d="M22 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM3 5h18v10H3V5zm0 12v-2h18v2H3z" />
                    </svg>
                </div>
            </div>

            <div className="mt-4">
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                    <input name="password" type="password" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter password" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                </div>
            </div>
            <div className="mt-4 text-right">
                <a href="jajvascript:void(0);" className="text-primary text-sm font-semibold hover:underline">
                    Forgot your password?
                </a>
            </div>
            <div className="mt-8">
                <button type="button" className="primary-button w-full">
                    Create Account
                </button>
            </div>
           
            <p className="text-sm mt-6 text-center">Already have an account <Link to='/login' className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap">Login</Link></p>
        </form>
    )
}

export default RegisterForm