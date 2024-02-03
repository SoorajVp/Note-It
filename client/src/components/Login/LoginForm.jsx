import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { submitLogin } from '../../services/apiCalls/auth'


const initialValues = {
    name: '',
    password: ''
}

const registerSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    password: Yup.string().required("Please enter your password")
})

const LoginForm = () => {
    const dispatch = useDispatch()

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            dispatch(submitLogin(values))
            action.resetForm()
        }
    })

    return (
        <form onSubmit={handleSubmit}>

            <div className='mt-4'>
                <label className="text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                    <input name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter username" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>
                {(touched.name && errors.name) && <p className='text-2xs text-red-600 pl-1'>{errors.name}</p>}
            </div>
            <div className="mt-6">
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                    <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter password" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                </div>
                {(touched.password && errors.password) && <p className='text-2xs text-red-600 pl-1'>{errors.password}</p>}

            </div>
            <div className="mt-4 text-right">
                <Link to='/forgot-password' className="text-primary text-sm font-semibold hover:underline">
                    Forgot your password?
                </Link>
            </div>
            <div className="mt-10">
                <button type="submit" className="primary-button w-full">
                    Log in
                </button>
            </div>
            <p className="text-sm mt-6 text-center">Don't have an account <Link to='/register' className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap">Register</Link></p>
        </form>
    )
}

export default LoginForm