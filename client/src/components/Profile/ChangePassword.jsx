import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { changePassword, checkPassword } from '../../services/apiCalls/user';
import { setLoading } from '../../state/slices/userSlice';

const ChangePassword = () => {
    const dispatch = useDispatch()

    const [isChangable, setChangable] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')

    const initialValues = {
        password: '',
        confirmPassword: '',
    }

    const passwordSchema = Yup.object({
        password: Yup.string().min(5).max(15).required("Please enter your password"),
        confirmPassword: Yup.string().required("Please confirm your password").oneOf([Yup.ref("password")], "Passwords do not match")
    })


    let { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: passwordSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values);
        }
    })


    const handleCurrentPassword = async() => {
        dispatch(setLoading(true))
        const response = await checkPassword({ password: currentPassword })
        dispatch(setLoading(false))
        console.log("onChangePassword", response)
        if(response?.status) {
            setChangable(true)
        }
    }


    return (
        <>
            {
                !isChangable ?
                    <div className='mb-5'>
                        <div className='flex justify-between'>
                            <h2 className='mb-5 font-semibold text-gray-600'>Change password</h2>
                            <p className='text-base block text-primary font-semibold cursor-pointer pr-1' onClick={handleCurrentPassword}>Next</p>
                        </div>
                        <label className="text-sm block text-gray-700 pb-1">Current Password</label>
                        <div className="flex items-center">
                            <input type="text" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter username" />
                            
                        </div>
                    </div> :

                    (<form onSubmit={handleSubmit} >
                        <div className=''>

                            <label className="text-sm block text-gray-700">New Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="text" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter username" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                </svg>
                            </div>
                            {(touched.password && errors.password) && <p className='text-2xs text-red-600 pl-1'>{errors.password}</p>}
                        </div>

                        <div className="mt-4 relative">
                            <label className="text-sm block text-gray-600">Confirm Password</label>
                            <div className="relative flex items-center">
                                <input name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary" placeholder="Enter Mobile number" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 24 24">
                                    <path d="M22 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM3 5h18v10H3V5zm0 12v-2h18v2H3z" />
                                </svg>
                            </div>
                            {(touched.confirmPassword && errors.confirmPassword) && <p className='text-2xs text-red-600 pl-1'>{errors.confirmPassword}</p>}
                        </div>

                        <div className="mt-8">
                            <button type="submit" className="primary-button w-full" > Change Password </button>
                        </div>
                    </form>
                    )

            }

        </>
    )
}
export default ChangePassword